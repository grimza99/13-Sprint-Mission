import Button from "../../components/common/Button/Button";
import * as I from "../../components/common/Input/Input";
import * as S from "./AddItem.style";
import Tag from "../../components/Tag/Tag";
import { useState } from "react";
//
const INITIAL_DATA = {
  img: "",
  name: "",
  content: "",
  price: 0,
  tags: [],
};
function AddItem() {
  const [tag, setTag] = useState("");
  const [data, setData] = useState(INITIAL_DATA);
  //

  const handleChange = (name, value) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const CreateTag = (e) => {
    if (e.key === "Enter" && tag.trim() !== "") {
      const notDuplicate = data.tags.includes(tag.trim());
      if (!notDuplicate) {
        setData((prev) => ({
          ...prev,
          tags: [...prev.tags, tag.trim()],
        }));
      }
      setTag("");
      e.target.value = "";
    }
  };

  const handleClickTagDelete = (tag) => {
    const filterTags = data.tags.filter((prev) => prev !== tag);
    setData((prev) => ({ ...prev, tags: filterTags }));
  };

  const handlePriceChange = (value) => {
    if (Number(value) >= 0) {
      handleChange("price", Number(value));
    }
  };
  console.log(data);
  const requiredInput = ["name", "content", "tags", "price"];
  const isInputValid = requiredInput.every((field) => {
    const value = data[field];
    switch (typeof value) {
      case "object":
        if (Array.isArray(value) && value.length === 0) {
          return false;
        }
        return true;
        break;
      case "string":
        return value.trim() !== "";

      case "number":
        return value > 0;
      default:
        return false;
    }
  });
  console.log(isInputValid);

  return (
    <S.Background>
      <S.Container>
        <S.FlexDiv>
          <S.Title>상품등록페이지</S.Title>
          <S.ButtonContainer>
            <Button disabled={!isInputValid}>등록</Button>
          </S.ButtonContainer>
        </S.FlexDiv>
        <S.InputsContainer>
          <I.ImgInput
            type="file"
            name="img"
            onChange={(value) => handleChange("img", value)}
            label="상품 이미지"
            accept="image/jpeg, image/png"
          />

          <I.NormalInput
            normal
            name="name"
            label="상품명"
            placeholder="상품명을 입력해주세요"
            onChange={(value) => handleChange("name", value)}
          />
          <I.NormalInput
            textArea
            label="상품 소개"
            placeholder="상품 소개를 입력해주세요"
            onChange={(value) => handleChange("content", value)}
          />
          <I.NormalInput
            normal
            label="판매가격"
            placeholder="판매 가격을 입력해주세요"
            onChange={handlePriceChange}
          />
          <S.TagInputContainer>
            <I.TagInput
              normal
              type="text"
              value={tag}
              onKeyUp={CreateTag}
              label="태그"
              onChange={(e) => setTag(e.target.value)}
              placeholder="태그를 입력해주세요"
            />
            <S.TagsContainer>
              {data.tags &&
                data.tags.map((tag) => {
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
