import { useEffect, useState } from "react";
import ItemsList from "../components/ItemsList";
import { getProducts, bestProducts } from "../api";
import { Link } from "react-router-dom";
import styled from "styled-components";
//
const ListGrid = styled(ItemsList)`
  display: grid;
`;

function HomePage() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("recent");
  const [bestItems, setBestItems] = useState([]);
  const handleChangeSort = (e) => {
    setOrder(e.target.value);
  };

  //정렬된 데이터 받아오는 핸들러
  const handleLoad = async (options) => {
    const { list: bestItems } = await bestProducts();
    const { list } = await getProducts(options);
    setItems(list);
    setBestItems(bestItems);
  };

  useEffect(() => {
    handleLoad({ order });
  }, [order]);

  return (
    <div>
      <div>
        <h3>베스트 상품</h3>
        <ItemsList items={bestItems} />
      </div>
      <div>
        <h3> 전체 상품</h3>
        <div>
          <input type="text"></input>
          <Link to="/additem">
            <button type="submit">상품 등록하기</button>
          </Link>
        </div>
        <select value={order} onChange={handleChangeSort}>
          <option value="recent">최신순</option>
          <option value="favorite">좋아요 순</option>
        </select>

        <ItemsList items={items} />
      </div>
    </div>
  );
}

export default HomePage;
