import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//
import * as S from "./HomePage.style";
import ItemsList from "../components/ItemsList";
import { getProducts, bestProducts } from "../api";
import PageCount from "../components/pageCount";
import useWindowSize from "../hooks/useWindowSize";
import SelectBox from "../components/SelectBox";

//

//
function HomePage() {
  const [items, setItems] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState("최신순");
  const [bestItems, setBestItems] = useState([]);
  const [page, setPage] = useState(1);
  const device = useWindowSize();
  //
  const handleChangeSort = (selected) => {
    const { label } = selected;
    setSelectedOrder(label);
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
    <S.Contents device={device}>
      <div>
        <h3>베스트 상품</h3>
        <ItemsList value="best" device={device} items={bestItems} />
      </div>
      <S.InputDiv device={device}>
        <h3> 전체 상품</h3>
        <InputForm
          type="text"
          placeholder="검색할 상품을 입력해주세요"
          device={device}
        ></InputForm>
        <S.SearchBtn device={device} type="submit">
          <Link to="/additem">상품 등록하기</Link>
        </S.SearchBtn>
        <SelectBox onChange={handleChangeSort} value={selectedOrder} />
      </S.InputDiv>
      <ItemsList value="products" device={device} items={items} />
      <PageCount page={page} onClick={handleClickPageChange} />
    </S.Contents>
  );
}

export default HomePage;
