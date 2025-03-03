import BestImage from "../../public/assets/icons/best.icon.svg";
import Image from "next/image";
import ProfileImg from "../../public/assets/icons/default.profile.icon.svg";
import { useFormatDate } from "../../hooks/useFormatting";
import * as S from "./Card.style";

import BtnHeart from "../BtnHeart/BtnHeart";
//
interface Props {
  article: Article;
}
export function BestArticle({ article }: Props) {
  const formattedDate = useFormatDate(article.createdAt);
  const articleImg = article.image || "";
  return (
    <S.BestCardWrapper>
      <S.BestContentsWrapper>
        <Image src={BestImage} width={102} height={30} alt="베스트" />

        <S.ContentImgWrapper>
          <p>{article.content}</p>
          <Image width={72} height={72} src={articleImg} alt="상품이미지" />
        </S.ContentImgWrapper>
        <S.ContentInfo>
          <S.NicknameLike>
            {article.writer.nickname}
            <BtnHeart value={article.likeCount} />
          </S.NicknameLike>
          <div>{formattedDate}</div>
        </S.ContentInfo>
      </S.BestContentsWrapper>
    </S.BestCardWrapper>
  );
}

export function Articles({ article }: Props) {
  const formattedDate = useFormatDate(article.createdAt);
  const articleImg = article.image || ProfileImg;

  return (
    <S.ArticleCardWrapper>
      <S.ContentsWrapper>
        <S.ContentImgWrapper>
          <p>{article.content}</p>
          <Image width={72} height={72} src={articleImg} alt="상품이미지" />
        </S.ContentImgWrapper>
        <S.ContentInfo>
          <S.NicknameLike>
            <Image src={ProfileImg} width={24} height={24} alt="프로필" />

            <div>{article.writer.nickname}</div>
            {formattedDate}
          </S.NicknameLike>
          <BtnHeart value={article.likeCount} />
        </S.ContentInfo>
      </S.ContentsWrapper>
    </S.ArticleCardWrapper>
  );
}
