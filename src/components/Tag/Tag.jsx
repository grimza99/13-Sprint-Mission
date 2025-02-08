import DeleteButton from "../../assets/icons/TagIcon.svg";
import * as S from "./Tag.style";
export default function Tag({ value, onClick }) {
  return (
    <S.Container>
      <S.FlexContents>
        <S.Tag>#{value}</S.Tag>
        <S.DeleteButton onClick={onClick}>{DeleteButton}</S.DeleteButton>
      </S.FlexContents>
    </S.Container>
  );
}
