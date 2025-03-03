import BestImage from "../../public/assets/icons/best.icon.svg";
import Image from "next/image";
import { useFormatDate } from "../../hooks/useFormatting";
import * as S from "./Card.style";
interface Props {
  article: Article;
}
export function BestCard({ article }: Props) {
  const formattedDate = useFormatDate(article.createdAt);

  return (
    <S.CardWrapper>
      <S.ContentsWrapper>
        <Image src={BestImage} width={102} height={30} alt="베스트" />
        <S.ContentImgWrapper>
          <p>{article.content}</p>
          <Image width={72} height={72} src={article.image} alt="상품이미지" />
        </S.ContentImgWrapper>
        <div>{article.writer.nickname}</div>
        <div>{article.likeCount}</div>
        <div>{formattedDate}</div>
      </S.ContentsWrapper>
    </S.CardWrapper>
  );
}
