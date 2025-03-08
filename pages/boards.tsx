import Button from "@/components/Button/Button";
import { Articles, BestArticle } from "@/components/Card/Card";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { SearchInput } from "@/components/Input/Input";
import { SortSelect } from "@/components/Select/Select";
import useWindowSize from "@/hooks/useWindowSize";
const apiUrl = process.env.NEXT_PUBLIC_ARTICLE_API_URL;
//
export default function Board() {
  const [best, setBest] = useState<Article[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [orderBy, setOrderBy] = useState("recent");
  const device: string = useWindowSize();
  const handleClick = () => {};

  const handleLoad = async (orderBy: string, device: string) => {
    const bestPageSize = device === "mobile" ? 1 : device === "tablet" ? 2 : 3;
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
    setFilteredArticles(articlesData);
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
    handleLoad(orderBy, device);
  }, [orderBy, device]);

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
    <div className="flex flex-col w-full h-screen gap-10 ">
      <div className="flex flex-col gap-6">
        <div className="text-gray-900 font-Pretendard text-H3Bold">
          베스트 게시글
        </div>
        <div className="flex gap-6 mx-auto">
          {best.length > 0 &&
            best.map((article) => (
              <BestArticle key={article.id} article={article} />
            ))}
        </div>
      </div>
      <div className="flex flex-col w-full gap-6">
        <div className="flex justify-between">
          <div className="text-gray-900 font-Pretendard text-H3Bold">
            게시글
          </div>
          <div className="w-[88px]">
            <Button onClick={handleClick}>글쓰기</Button>
          </div>
        </div>
        <div className="flex w-full gap-4">
          <SearchInput
            placeholder="검색할 상품을 입력해주세요"
            name="search"
            onChange={handleSearchChange}
          />
          <SortSelect onChange={handleSortChange} />
        </div>
        <div className="flex flex-col w-full gap-6">
          {filteredArticles.length > 0 &&
            filteredArticles.map((article) => (
              <Articles key={article.id} article={article} />
            ))}
        </div>
      </div>
    </div>
  );
}
