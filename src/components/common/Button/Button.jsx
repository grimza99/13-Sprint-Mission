import * as S from "./Button.style";
//
//버튼 컨테이너 필요
export default function Button({ onClick, children, ...props }) {
  const { value, square, ...rest } = props;
  return (
    <>
      <S.Button onClick={onClick} {...rest}>
        {children}
      </S.Button>
    </>
  );
}
