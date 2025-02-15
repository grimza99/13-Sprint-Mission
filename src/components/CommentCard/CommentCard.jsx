import * as S from "./CommentCard.style.jsx";
import defaultImg from "../../assets/icons/default.profile.icon.svg";
import { EditSelect } from "../common/Select/Select.jsx";
export default function Comment({ data }) {
  const handleOnChange = () => {};
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
      <EditSelect onChange={handleOnChange} />
    </S.CommentWrapper>
  );
}
