import Button from "../../components/common/Button/Button";
import { NormalInput, ImgInput } from "../../components/common/Input/Input";
import * as S from "./AddItem.style";
import Tag from "../../components/Tag/Tag";
import { useEffect, useState } from "react";
//
function AddItem() {
  const [selectedImg, setSelectedImg] = useState("");
  const [productName, setProductName] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState([]);
  //

  useEffect(() => {}, []);

  const handleClickTagDelete = (tag) => {
    const filterTags = tags.filter((prev) => prev !== tag);
    setTags(filterTags);
  };
  const CreateTag = (e) => {
    const trimmedValue = e.target.value.trim();
    if (e.key === "Enter" && trimmedValue !== "") {
      const notDuplicate = tags.find((tag) => tag === trimmedValue);
      if (!notDuplicate) {
        setTags((prev) => [...prev, trimmedValue]);
      }
      e.target.value = "";
    }
  };

  const handleOnChangeValue = (value) => {};
  return (
    <S.Container>
      <S.FlexDiv>
        <S.Title>상품등록페이지</S.Title>
        <S.ButtonContainer>
          <Button>등록</Button>
        </S.ButtonContainer>
      </S.FlexDiv>
      <S.InputsContainer>
        <ImgInput
          type="file"
          img
          label="상품 이미지"
          accept="image/jpeg, image/png"
        ></ImgInput>

        <NormalInput
          normal
          label="상품명"
          placeholder="상품명을 입력해주세요"
        />
        <NormalInput
          textArea
          label="상품 소개"
          placeholder="상품 소개를 입력해주세요"
        />
        <NormalInput
          normal
          label="판매가격"
          placeholder="판매 가격을 입력해주세요"
        />
        <S.TagInputContainer>
          <NormalInput
            name="img"
            onKeyUp={CreateTag}
            onChange={handleOnChangeValue}
            normal
            label="태그"
            placeholder="태그를 입력해주세요"
          />
          <S.TagsContainer>
            {tags &&
              tags.map((tag) => {
                return (
                  <div key={tag}>
                    <Tag value={tag} onClick={handleClickTagDelete} />
                  </div>
                );
              })}
          </S.TagsContainer>
        </S.TagInputContainer>
      </S.InputsContainer>
    </S.Container>
  );
}
export default AddItem;
