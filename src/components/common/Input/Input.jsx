import * as S from "./Input.style";
// import Plus from "../../../assets/icons/plusIcon.svg";
export default function Input({
  label,
  children,
  placeholder,
  value,
  ...props
}) {
  const { img, normal, textArea, onChange, onKeyUp, ...rest } = props;
  const handleChange = (e) => {
    onChange(e.target.value);
    onKeyUp(e);
  };
  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      <S.Input
        type="text"
        value={value}
        $img={img}
        $normal={normal}
        $textArea={textArea}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyUp={onKeyUp}
        {...rest}
      ></S.Input>
      {/* {img && <S.Plus>{Plus}</S.Plus>} */}
    </S.InputWrapper>
  );
}
