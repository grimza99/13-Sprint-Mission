import Button from "@/components/Button/Button";
import * as S from "../styles/boards.style";
import { BestCard } from "@/components/Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
const apiUrl = process.env.NEXT_PUBLIC_ARTICLE_API_URL;
//
export default function Board() {
  const [best, setBest] = useState<Article[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [orderBy, setOrderBy] = useState("recent");
  const handleClick = () => {};

  const handleLoad = async ({ bestPageSize = 3, orderBy = "recent" }) => {
    const bestRes = await axios.get(
      `${apiUrl}?page=1&pageSize=${bestPageSize}&orderBy=like`
    );
    const bestArticle = bestRes.data.list;
    setBest(bestArticle);
    const res = await axios.get(
      `${apiUrl}?page=1&pageSize=10&orderBy=${orderBy}`
    );
    const articlesData = res.data.list;
    setArticles(articlesData);
  };
  useEffect(() => {
    handleLoad({ orderBy });
  }, [orderBy]);

  return (
    <S.Contents>
      <div>
        <S.SubTitle>베스트 게시글 </S.SubTitle>
        {best.length > 0 &&
          best.map((article) => (
            <BestCard key={article.id} article={article} />
          ))}
      </div>
      <div>
        <S.SubBtnWrapper>
          <S.SubTitle>게시글</S.SubTitle>
          <S.ButtonWrapper>
            <Button onClick={handleClick}>글쓰기</Button>
          </S.ButtonWrapper>
        </S.SubBtnWrapper>
        <div>
          <div>인풋 최신순셀렉트</div>
          <div>게시글 제목 사진</div>
          <div>프로필사진 닉네임 날짜 하트 숫자 </div>
        </div>
      </div>
    </S.Contents>
  );
}
