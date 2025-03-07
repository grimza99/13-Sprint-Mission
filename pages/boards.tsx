import Button from "@/components/Button/Button";
import * as S from "../styles/boards.style";
import { Articles, BestArticle } from "@/components/Card/Card";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { Input, SearchInput } from "@/components/Input/Input";
import { SortSelect } from "@/components/Select/Select";
const apiUrl = process.env.NEXT_PUBLIC_ARTICLE_API_URL;
//
export default function Board() {
  const [best, setBest] = useState<Article[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
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
  //
  const handleSortChange = (option: string) => {
    if (option === "최신순") {
      setOrderBy("recent");
    } else {
      setOrderBy("like");
    }
  };
  //
  useEffect(() => {
    handleLoad({ orderBy });
  }, [orderBy]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();
    // 검색어가 없을 때 원본 데이터 유지
    if (!searchValue) {
      setFilteredArticles(articles);
      return;
    }
    const searchedArticle = articles.filter((article) =>
      article.content.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredArticles(searchedArticle);
  };
  return (
    <S.Contents>
      <S.TitleContentWrapper>
        <S.SubTitle>베스트 게시글 </S.SubTitle>
        <S.BestCardFlex>
          {best.length > 0 &&
            best.map((article) => (
              <BestArticle key={article.id} article={article} />
            ))}
        </S.BestCardFlex>
      </S.TitleContentWrapper>
      <S.TitleContentWrapper>
        <S.SubBtnWrapper>
          <S.SubTitle>게시글</S.SubTitle>
          <S.ButtonWrapper>
            <Button onClick={handleClick}>글쓰기</Button>
          </S.ButtonWrapper>
        </S.SubBtnWrapper>
        <S.InputSelectWrapper>
          <SearchInput
            placeholder="검색할 상품을 입력해주세요"
            name="search"
            onChange={handleSearchChange}
          />
          <SortSelect onChange={handleSortChange} />
        </S.InputSelectWrapper>
        <S.ArticlesFlex>
          {filteredArticles.length > 0 &&
            filteredArticles.map((article) => (
              <Articles key={article.id} article={article} />
            ))}
        </S.ArticlesFlex>
      </S.TitleContentWrapper>
    </S.Contents>
  );
}
