import { useEffect, useState } from "react";
import ItemsList from "../components/ItemsList";
import { getProducts, bestProducts } from "../api";
import { Link } from "react-router-dom";
import PageCount from "../components/pageCount";
import styled from "styled-components";
//
const InputDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SearchBtn = styled.button`
  height: 42px;
  padding: 12px 23px;
  border-radius: 8px;
  color: #f3f4f6;
  background-color: #3692ff;
  border: none;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 26px;
`;
const InputForm = styled.input`
  width: 325px;
  height: 42px;
  padding: 9px 20px 9px 16px;
  border-radius: 12px;
  border: none;
  background-color: #f3f4f6;
  color: #9ca3af;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
`;

const SortSelect = styled.select`
  width: 130px;
  height: 42px;
  padding: 12px 20px 12px 20px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
`;
//
function HomePage({ device }) {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("recent");
  const [bestItems, setBestItems] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [bestPageSize, setBestPageSize] = useState(4);
  const handleChangeSort = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    switch (device) {
      case "desktop":
        setPageSize(10);
        setBestPageSize(4);
        break;
      case "tablet":
        setPageSize(6);
        setBestPageSize(2);
        break;
      case "mobile":
        setPageSize(4);
        setBestPageSize(1);
        break;
      default:
        break;
    }
  }, [device]);

  //정렬된 데이터 받아오는 핸들러
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
    handleLoad({ order, bestPageSize, pageSize, page });
  }, [order, page, bestPageSize, pageSize]);

  return (
    <div>
      <div>
        <h3>베스트 상품</h3>
        <ItemsList value="best" device={device} items={bestItems} />
      </div>
      <InputDiv>
        <h3> 전체 상품</h3>
        <div>
          <InputForm
            type="text"
            placeholder="검색할 상품을 입력해주세요"
          ></InputForm>
          <Link to="/additem">
            <SearchBtn type="submit">상품 등록하기</SearchBtn>
          </Link>
          <SortSelect value={order} onChange={handleChangeSort}>
            <option value="recent">최신순</option>
            <option value="favorite">좋아요 순</option>
          </SortSelect>
        </div>
      </InputDiv>
      <ItemsList value="products" device={device} items={items} />
      <PageCount onClick={handleClickPageChange} />
    </div>
  );
}

export default HomePage;
