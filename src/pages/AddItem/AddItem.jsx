import Button from "../../components/common/Button/Button";
import Input from "../../components/common/Input/Input";
import * as S from "./AddItem.style";
//
function AddItem() {
  return (
    <S.Container>
      <S.FlexDiv>
        <p>상품등록페이지</p>
        <Button>등록</Button>
      </S.FlexDiv>
      <S.InputsContainer>
        <Input img label="상품 이미지" placeholder="이미지등록" />
        <Input normal label="상품명" placeholder="상품며을 입력해주세요" />
        <Input
          textArea
          label="상품 소개"
          placeholder="상품 소개를 입력해주세요"
        />
        <Input normal label="판매가격" placeholder="판매 가격을 입력해주세요" />
        <Input normal label="태그" placeholder="태그를 입력해주세요" />
      </S.InputsContainer>
    </S.Container>
  );
}
export default AddItem;
