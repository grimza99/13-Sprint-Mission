import { useState } from "react";
//
import noComment from "../../assets/no-comments.svg";
import { placeholder } from "../../constants/globalConstant";
import { button } from "../../constants/globalConstant";
import { Input } from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";
import * as S from "./Comments.style";
//
export default function Comments({ data }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [formData, setFormData] = useState("");

  return (
    <S.CommentWrapper>
      <S.InputWrapper>
        <Input placeholder={placeholder.createComment} label="문의하기" />
        <S.ButtonWrapper>
          <Button disabled={isDisabled}>{button.send}</Button>
        </S.ButtonWrapper>
      </S.InputWrapper>
      <div>여기 코멘트</div>
    </S.CommentWrapper>
  );
}
