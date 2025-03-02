import BestImage from "../../public/assets/icons/best.icon.svg";
import * as S from "./Card.style";
interface Props {
  article: Article;
}
export function BestCard({ article }: Props) {
  return (
    <S.CardWrapper>
      <div>
        <S.Img src={BestImage} alt="베스트" />
        <div>
          <p>{article.content}</p>
          <S.Img src={article.image} alt="상품이미지" />
        </div>
        <div>{article.writer.nickname}</div>
        <div>{article.likeCount}</div>
      </div>
    </S.CardWrapper>
  );
}
