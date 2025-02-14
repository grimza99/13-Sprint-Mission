import { useState, useEffect } from "react";
//
import noComment from "../../assets/no-comments.svg";
import { getProductComments } from "../../api/comment.api";
import { placeholder } from "../../constants/globalConstant";
import { button } from "../../constants/globalConstant";
import { Input } from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";
import * as S from "./Comments.style";
//
export default function Comments({ productId }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [comments, setComments] = useState({});

  const [formData, setFormData] = useState("");

  const handleLoad = async () => {
    const data = await getProductComments(productId);
    setComments(data);
  };

  useEffect(() => {
    handleLoad();
  }, []);
  return (
    <S.CommentWrapper>
      <S.InputWrapper>
        <Input placeholder={placeholder.createComment} label="문의하기" />
        <S.ButtonWrapper>
          <Button disabled={isDisabled}>{button.send}</Button>
        </S.ButtonWrapper>
      </S.InputWrapper>
      {comments?.list?.length === 0 ? (
        <div>
          <img src={noComment} />
        </div>
      ) : (
        <div></div>
      )}
    </S.CommentWrapper>
  );
}
