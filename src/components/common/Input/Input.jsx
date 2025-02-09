import * as S from "./Input.style";
// import Plus from "../../../assets/icons/plusIcon.svg";
export default function Input({ label, children, placeholder, ...props }) {
  const { img, normal, textArea, onChange, ...rest } = props;
  const handleChange = (e) => {
    onChange(e);
  };
  const handleKeydown = (e) => {
    handleKeydown(e);
  };
  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      <S.Input
        $img={img}
        $normal={normal}
        $textArea={textArea}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeydown}
        {...rest}
      ></S.Input>
      {/* {img && <S.Plus>{Plus}</S.Plus>} */}
    </S.InputWrapper>
  );
}
