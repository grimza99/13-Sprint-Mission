import activeHeart from "../../../assets/icons/active.heart.icon.svg";
import inactiveHeart from "../../../assets/icons/inactive.heart.icon.svg";
//
import * as S from "./BtnHeart.style";
//
export default function BtnHeart({ active, value, ...props }) {
  const { onClick, small, ...rest } = props;
  const onClickChange = (e) => {
    onClick(e);
  };
  return (
    <>
      {active ? (
        <S.ActiveBtnHeart onClick={onClickChange} small={small} {...rest}>
          <S.HeartImg src={activeHeart} $small={small ? small : undefined} />
          {value}
        </S.ActiveBtnHeart>
      ) : (
        <S.InactiveBtnHeart onClick={onClickChange} $small={small} {...rest}>
          <S.HeartImg src={inactiveHeart} $small={small ? small : undefined} />
          {value}
        </S.InactiveBtnHeart>
      )}
    </>
  );
}
