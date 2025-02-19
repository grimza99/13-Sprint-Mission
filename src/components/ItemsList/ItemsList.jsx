import { useNavigate } from "react-router-dom";
import useWindowSize from "../../hooks/useWindowSize";
//
import * as S from "./ItemsList.style";
import BtnHeart from "../common/BtnHeart/BtnHeart";

//

function ListItem({ value, items }) {
  const navigate = useNavigate();
  const device = useWindowSize();
  return (
    <S.Item onClick={() => navigate(`./${items.id}`)}>
      <S.ProductImg
        value={value}
        $device={device}
        src={items.images[0]}
        alt="이미지"
      />
      <S.FlexContent>
        <S.Title>{items.name}</S.Title>
        <S.Price>{items.price} 원</S.Price>
        <BtnHeart $items value={items.favoriteCount} />
      </S.FlexContent>
    </S.Item>
  );
}
export default function ItemsList({ value, items, ...props }) {
  const device = useWindowSize();
  return (
    <S.ItemListStyle value={value} $device={device}>
      {items.map((item) => {
        return (
          <ListItem key={item.id} value={value} $device={device} items={item} />
        );
      })}
    </S.ItemListStyle>
  );
}
