import Button from "../../components/common/Button/Button";
import Input from "../../components/common/Input/Input";
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

  // const handleClickTagDelete = (tag) => {
  //   const filterTags = tags.filter((prev) => prev !== tag);
  //   setTags(filterTags);
  // };
  const CreateTag = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setTags((prev) => [...prev, e.target.value]); // 배열이면 prev에 새 태그 추가
      e.target.value = ""; // 입력값 초기화;
      console.log(tags);
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
        <Input img label="상품 이미지" placeholder="이미지등록" />
        <Input normal label="상품명" placeholder="상품명을 입력해주세요" />
        <Input
          textArea
          label="상품 소개"
          placeholder="상품 소개를 입력해주세요"
        />
        <Input normal label="판매가격" placeholder="판매 가격을 입력해주세요" />
        <S.TagInputContainer>
          <Input
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
                    <Tag value={tag} />
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
