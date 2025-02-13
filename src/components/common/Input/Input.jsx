import PlusIcon from "../../../assets/icons/plusIcon.svg";
import DeleteIcon from "../../../assets/icons/DeleteIcon.svg";
import * as S from "./Input.style";
import { useRef, useState } from "react";
//
export function NormalInput({
  type,
  label,
  children,
  placeholder,
  value,
  ...props
}) {
  const { name, normal, textArea, onChange, ...rest } = props;
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
//
export function ImgInput({ placeholder, type, name, onChange, ...props }) {
  const { ...rest } = props;
  const imgRef = useRef();
  const [imgPreview, setImgPreview] = useState("");

  const handlePreviewImg = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgPreview(reader.result);
      onChange(reader.result);
    };
  };
  //
  const handleClickImgDelete = () => {
    setImgPreview("");
    onChange("");
  };
  return (
    <S.ImgInputWrapper>
      <S.ImgInputContainer>
        <S.ImgInput
          onChange={handlePreviewImg}
          type={type}
          name={name}
          id="fileUpload"
          accept="image/*"
          ref={imgRef}
          {...rest}
        />
        <S.PlusLabelContainer htmlFor="fileUpload">
          <S.PlusIcon src={PlusIcon} />
          <p>{placeholder}</p>
        </S.PlusLabelContainer>
      </S.ImgInputContainer>
      <div>
        {imgPreview && (
          <S.ImgPreviewWrapper>
            <S.PreviewImg src={imgPreview} />
            <S.DeleteImg src={DeleteIcon} onClick={handleClickImgDelete} />
          </S.ImgPreviewWrapper>
        )}
      </div>
    </S.ImgInputWrapper>
  );
}
//
export function TagInput({
  label,
  onChange,
  children,
  placeholder,
  onKeyUp,
  value,
  ...props
}) {
  const { name, type, normal, ...rest } = props;
  const handleChange = (e) => {
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
        placeholder={placeholder}
        onKeyUp={handleChange}
        onChange={onChange}
        {...rest}
      ></S.Input>
    </S.InputWrapper>
  );
}
