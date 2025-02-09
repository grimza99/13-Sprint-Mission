import Button from "../../components/common/Button/Button";
import { NormalInput, ImgInput } from "../../components/common/Input/Input";
import * as S from "./AddItem.style";
import Tag from "../../components/Tag/Tag";
import { useState } from "react";
//
function AddItem() {
  const [tags, setTags] = useState([]);
  const [data, setData] = useState({
    img: "",
    name: "",
    content: "",
    price: 0,
    tag: tags,
  });
  //

  const handleChange = (name, value) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
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
  const handleOnChange = () => {};
  const handleOnChangeValue = (value) => {};
  return (
    <S.Background>
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
            name="img"
            onChange={(value) => handleChange("img", value)}
            label="상품 이미지"
            accept="image/jpeg, image/png"
          ></ImgInput>

          <NormalInput
            name="name"
            normal
            label="상품명"
            placeholder="상품명을 입력해주세요"
            onChange={(value) => handleChange("name", value)}
          />
          <NormalInput
            textArea
            label="상품 소개"
            placeholder="상품 소개를 입력해주세요"
            onChange={(value) => handleChange("content", value)}
          />
          <NormalInput
            normal
            label="판매가격"
            placeholder="판매 가격을 입력해주세요"
            onChange={(value) => handleChange("price", value)}
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
    </S.Background>
  );
}
export default AddItem;
