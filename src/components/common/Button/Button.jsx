import * as S from "./Button.style";
//
//버튼 컨테이너 필요
export default function Button({ children, ...props }) {
  const { ...restProps } = props;
  return <S.Button {...restProps}>{children}</S.Button>;
}
