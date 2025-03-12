import Button from "@/components/Button";
import { Articles, BestArticle } from "@/components/Card";
import { ChangeEvent, useEffect, useState } from "react";
import { SearchInput } from "@/components/Input";
import { SortSelect } from "@/components/Select";
import useWindowSize from "@/hooks/useWindowSize";
import { getArticles, getBestArticles } from "@/lib/Articles";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

//
const BEST_PAGE_SIZE: number = 3;
const PAGE_SIZE: number = 10;

interface Props {
  bestArticles: Article[];
  sortedArticles: Article[];
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { orderBy = "recent", keyword = "" } = context.query as {
    orderBy: string;
    keyword?: string;
  };

  const bestArticles = await getBestArticles({ pageSize: BEST_PAGE_SIZE });
  const sortedArticles = await getArticles({
    pageSize: PAGE_SIZE,
    orderBy,
    keyword,
  });
  return { props: { bestArticles, sortedArticles } };
};
//
export default function Board({ bestArticles, sortedArticles }: Props) {
  const [best, setBest] = useState(bestArticles);
  const [filteredArticles, setFilteredArticles] = useState(sortedArticles);
  const device: string = useWindowSize();
  const router = useRouter();

  const handleClick = () => {};

  const handleSortChange = (option: string) => {
    const newOrderBy = option === "최신순" ? "recent" : "like";
    router.push({
      pathname: router.pathname,
      query: { ...router.query, orderBy: newOrderBy },
    });
  };
  //
  useEffect(() => {
    if (router.query.keyword) {
      const newQuery = { ...router.query };
      delete newQuery.keyword;

      router.replace(
        { pathname: router.pathname, query: newQuery },
        undefined,
        { shallow: true }
      );
    }
  }, []);
  useEffect(() => {
    setBest([...bestArticles]);
    setFilteredArticles([...sortedArticles]);
    if (device === "mobile") {
      setBest(bestArticles.slice(0, 1));
    } else if (device === "tablet") {
      setBest(bestArticles.slice(0, 2));
    } else {
      setBest(bestArticles);
    }
  }, [device, sortedArticles]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();

    const newQuery = { ...router.query };

    if (!searchValue) {
      delete newQuery.keyword;
    } else {
      newQuery.keyword = searchValue;
    }

    router.push({
      pathname: router.pathname,
      query: newQuery,
    });
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
