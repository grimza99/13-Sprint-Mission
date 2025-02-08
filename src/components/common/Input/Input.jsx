import * as S from "./Input.style";
// import Plus from "../../../assets/icons/plusIcon.svg";
export default function Input({ label, children, placeholder, ...props }) {
  const { img, normal, textArea, ...rest } = props;
  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      <S.Input
        $img={img}
        $normal={normal}
        $textArea={textArea}
        placeholder={placeholder}
        {...rest}
      ></S.Input>
      {/* {img && <S.Plus>{Plus}</S.Plus>} */}
    </S.InputWrapper>
  );
}
