import Button from "../../components/common/Button/Button";
import Input from "../../components/common/Input/Input";
import * as S from "./AddItem.style";
import Tag from "../../components/Tag/Tag";
import { useState } from "react";
//
function AddItem() {
  const [selectedImg, setSelectedImg] = useState("");
  const [productName, setProductName] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState(0);
  const [tags, setTags] = useState([]);
  //
  const handleClickTagDelete = (tag) => {
    const filterTags = tags.find((prev) => prev !== tag);
    setTags(filterTags);
  };
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
          <Input normal label="태그" placeholder="태그를 입력해주세요" />(
          {tags.map((tag) => {
            return (
              <Tag key={tag} value={tag} onClick={handleClickTagDelete(tag)} />
            );
          })}
          )
        </S.TagInputContainer>
      </S.InputsContainer>
    </S.Container>
  );
}
export default AddItem;
