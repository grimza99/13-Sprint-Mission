import * as S from "./Button.style";
import heart from "../../../assets/icons/inactive.heart.icon.svg";
//
//버튼 컨테이너 필요
export default function Button({ onClick, ...props }) {
  const {
    $small,
    value,
    toggle,
    square,
    circle,
    heart,
    children,
    disabled,
    ...rest
  } = props;
  const onClickChange = (e) => {
    onClick(e);
  };
  return (
    <>
      {toggle ? (
        <button />
      ) : (
        <S.Button
          onClick={onClickChange}
          $square={square}
          $circle={circle}
          disabled={disabled}
          {...rest}
        >
          {children}
        </S.Button>
      )}
    </>
  );
}
