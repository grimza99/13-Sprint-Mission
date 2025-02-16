import { useEffect, useState } from "react";
//
import * as S from "./CommentCard.style.jsx";
import defaultImg from "../../assets/icons/default.profile.icon.svg";
import { Input } from "../common/Input/Input.jsx";
import { EditSelect } from "../common/Select/Select.jsx";
import { button } from "../../constants/globalConstant.jsx";
//
export default function CommentCard({ data }) {
  const [initialValue, setInitialValue] = useState(data.content);
  const [isEditing, setIsEditing] = useState(null);
  const [isDelete, setIsDelete] = useState(null);
  //
  const handleOnChange = (option) => {
    if (option === button.edit) {
      setIsEditing(data.id);
    }
    if (option === button.delete) {
      setIsDelete(data.id);
    }
    return;
  };

  useEffect(() => {
    //삭제 리퀘스트 예정
  }, [isDelete]);
  //
  return (
    <S.CommentWrapper>
      <S.CommentFlex>
        {data.id === isEditing ? (
          <Input value={initialValue} />
        ) : (
          <S.Content>{data.content}</S.Content>
        )}

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
          {data.id === isEditing && <div></div>}
        </S.ProfileWrapper>
      </S.CommentFlex>
      <EditSelect onChange={handleOnChange} />
    </S.CommentWrapper>
  );
}
