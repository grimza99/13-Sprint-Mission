import PlusIcon from "../../../assets/icons/plusIcon.svg";
import * as S from "./Input.style";
import { useRef, useState } from "react";
export function NormalInput({ label, children, placeholder, value, ...props }) {
  const { name, type, normal, textArea, onChange, ...rest } = props;
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      <S.Input
        name={name}
        type={type}
        value={value}
        $normal={normal}
        $textArea={textArea}
        placeholder={placeholder}
        onChange={handleChange}
        {...rest}
      ></S.Input>
    </S.InputWrapper>
  );
}

export function ImgInput({ value, ...props }) {
  const { ...rest } = props;
  const imgRef = useRef();
  const [imgPreview, setImgPreview] = useState("");
  //
  const handlePreviewImg = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgPreview(reader.result);
    };
  };
  return (
    <S.ImgInputWrapper>
      <S.ImgInput>
        <S.ImgInputTag
          onChange={handlePreviewImg}
          type="file"
          id="fileUpload"
          accept="image/*"
          ref={imgRef}
          {...rest}
        />
        <S.PlusLabelContainer htmlFor="fileUpload">
          <S.PlusIcon src={PlusIcon} />
          <p>이미지 등록</p>
        </S.PlusLabelContainer>
      </S.ImgInput>
      <div>{imgPreview && <S.PreviewImg src={imgPreview} />}</div>
    </S.ImgInputWrapper>
  );
}

export function TagInput({ label, children, placeholder, value, ...props }) {
  const { name, type, normal, textArea, onChange, onKeyUp, ...rest } = props;
  const handleChange = (e) => {
    onChange(e.target.value);
    onKeyUp(e);
  };
  return (
    <S.InputWrapper>
      <S.Label>{label}</S.Label>
      <S.Input
        name={name}
        type={type}
        value={value}
        $normal={normal}
        $textArea={textArea}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyUp={onKeyUp}
        {...rest}
      ></S.Input>
    </S.InputWrapper>
  );
}
