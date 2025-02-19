import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//
import * as S from "./ItemsPage.style";
import ItemsList from "../../components/ItemsList/ItemsList";
import { getProducts, bestProducts } from "../../api/product.api";
import PageCount from "../../components/PageNation/pageCount";
import useWindowSize from "../../hooks/useWindowSize";
import { SortSelect } from "../../components/common/Select/Select";
import Button from "../../components/common/Button/Button";
import { SearchInput } from "../../components/common/Input/Input"; //

//
function HomePage() {
  const [items, setItems] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState("최신순");
  const [bestItems, setBestItems] = useState([]);
  const [page, setPage] = useState(1);
  const device = useWindowSize();
  const navigate = useNavigate();
  //
  const handleChangeSort = (option) => {
    setSelectedOrder(option);
  };

  const handleLoad = async (options) => {
    const { list: bestItems } = await bestProducts(options);
    const { list } = await getProducts(options);
    setItems(list);
    setBestItems(bestItems);
  };

  const handleClickPageChange = (value) => {
    setPage(Number(value));
  };

  useEffect(() => {
    handleLoad({ selectedOrder, device, page });
  }, [selectedOrder, page, device]);

  return (
    <S.Background>
      <S.Contents>
        <div>
          <S.Title>베스트 상품</S.Title>
          <ItemsList value="best" items={bestItems} />
        </div>
        {device === "mobile" ? (
          <S.MobileContainer>
            <S.MobileTitleBtn>
              <S.Title> 전체 상품</S.Title>
              <S.SearchBtnContainer>
                <Button onClick={() => navigate("/additem")}>
                  상품 등록하기
                </Button>
              </S.SearchBtnContainer>
            </S.MobileTitleBtn>
            <S.SearchSelectContainer>
              <SearchInput
                placeholder="검색할 상품을 입력해주세요"
                onChange={() => {}}
              />
              <SortSelect onChange={handleChangeSort} value={selectedOrder} />
            </S.SearchSelectContainer>
          </S.MobileContainer>
        ) : (
          <S.TitleInputDiv>
            <S.Title> 전체 상품</S.Title>
            <S.InputDiv>
              <S.InputContainer>
                <SearchInput
                  placeholder="검색할 상품을 입력해주세요"
                  onChange={() => {}}
                />
              </S.InputContainer>
              <S.SearchBtnContainer>
                <Button onClick={() => navigate("/additem")}>
                  상품 등록하기
                </Button>
              </S.SearchBtnContainer>

              <SortSelect onChange={handleChangeSort} value={selectedOrder} />
            </S.InputDiv>
          </S.TitleInputDiv>
        )}

        <ItemsList value="products" items={items} />
        <PageCount page={page} onClick={handleClickPageChange} />
      </S.Contents>
    </S.Background>
  );
}

export default HomePage;
