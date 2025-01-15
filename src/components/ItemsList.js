import favoriteImg from "../assets/favoriteLogo.svg";
import styled from "styled-components";
//
const Title = styled.h4`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
  color: #1f2937;
  margin: 0px;
`;
const Price = styled.div`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  text-align: left;
  color: #1f2937;
  margin-top: 6px;
  margin-bottom: 6px;
`;

const FavoriteCount = styled.span`
  color: #4b5563;'
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  text-align: left;

`;

const ProductImg = styled.img`
  width: 221px;
  height: 221px;
  border-radius: 16px;
`;

const ItemListStyle = styled.ul`
  margin: 24px auto;
  padding: 0px;
  width: 100%;
  gap: 40px 24px;
  display: grid;
  grid-template-columns: repeat(5, 221px);
  grid-auto-rows: 317px;
  list-style: none;
`;

const Item = styled.div`
  display: flex;
  height: 317px;
  flex-direction: column;
  gap: 16px;
`;
//

function ListItem({ items }) {
  return (
    <Item>
      <ProductImg src={items.images[0]} alt="이미지" />
      <div>
        <Title>{items.name}</Title>
        <Price>{items.price} 원</Price>
        <div>
          <img src={favoriteImg} alt="좋아요하트"></img>
          <FavoriteCount>{items.favoriteCount}</FavoriteCount>
        </div>
      </div>
    </Item>
  );
}
function ItemsList({ items }) {
  return (
    <div>
      <div>
        <ItemListStyle>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <ListItem items={item} />
              </li>
            );
          })}
        </ItemListStyle>
      </div>
    </div>
  );
}

export default ItemsList;
