import PlusIcon from "../../../assets/icons/plusIcon.svg";
import DeleteIcon from "../../../assets/icons/DeleteIcon.svg";
import * as S from "./Input.style";
import { useRef, useState } from "react";
//
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
//
export function ImgInput({ value, label, onChange, onClick, ...props }) {
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
  const { name, type, normal, textArea, ...rest } = props;
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
        $textArea={textArea}
        placeholder={placeholder}
        onKeyUp={handleChange}
        onChange={onChange}
        {...rest}
      ></S.Input>
    </S.InputWrapper>
  );
}
