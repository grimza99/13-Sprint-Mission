import * as S from "./CommentCard.style.jsx";
import defaultImg from "../../assets/icons/default.profile.icon.svg";
import KebabBtn from "../common/Button/KebabBtn.jsx";
export default function Comment({ data }) {
  return (
    <S.CommentWrapper>
      <S.CommentFlex>
        <S.Content>{data.content}</S.Content>
        <S.ProfileWrapper>
          {data.writer.image ? (
            <img src={data.writer.image} />
          ) : (
            <img src={defaultImg} />
          )}
          <S.NickNameDateWrapper>
            <S.NickName>{data.writer.nickname}</S.NickName>
            <S.Date>{data.updatedAt}</S.Date>
          </S.NickNameDateWrapper>
        </S.ProfileWrapper>
      </S.CommentFlex>
      <KebabBtn />
    </S.CommentWrapper>
  );
}
