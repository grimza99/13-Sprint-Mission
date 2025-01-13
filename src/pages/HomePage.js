import { useEffect, useState } from "react";
import ItemsList from "../components/ItemsList";
import { getProducts } from "../api";
//
function HomePage() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("recent");
  const handleChangeSort = (e) => {
    setOrder(e.target.value);
  };

  //정렬된 데이터 받아오는 핸들러
  const handleLoad = async (options) => {
    const { list } = await getProducts(options);
    setItems(list);
  };

  useEffect(() => {
    handleLoad({ order });
  }, [order]);

  return (
    <div>
      <div>
        <h3>베스트 상품</h3>
        <div>베스트 상품 영역</div>
      </div>
      <div>
        <h3> 전체 상품</h3>
        <div>
          {/* <form>
            <input type="text">검색</input>
            <button type="submit">상품 등록하기</button>
          </form> */}
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
