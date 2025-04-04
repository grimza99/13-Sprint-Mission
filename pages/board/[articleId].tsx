import Image from "next/image";
import Previous from "@/public/assets/icons/previous.icon.svg";
import Button from "@/components/Button";
import Link from "next/link";
import { EditSelect } from "@/components/Select";
import { Articles } from "@/components/Card";
import { GetServerSideProps } from "next";
import { getArticleDetail } from "@/lib/Articles";
import { Input } from "@/components/Input";
import { ChangeEvent, useState } from "react";
import { getArticleComment } from "@/lib/comments.api";
import Comment from "@/components/board/comment";

//
interface Props {
  detailArticle: Article;
  comments: Comment[];
}
const LIMIT = 5;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { articleId } = context.query as {
    articleId: string;
  };
  let cursor = 0;
  const detailArticle = await getArticleDetail(Number(articleId));
  const data = await getArticleComment(Number(articleId), LIMIT, cursor);
  cursor = data.cursor;
  return {
    props: { detailArticle, comments: data.list },
  };
};

export default function DetailArticle({ detailArticle, comments }: Props) {
  const [commentValue, setCommentValue] = useState("");
  const handleSelect = () => {};
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentValue(e.target.value);
  };
  const handleSubmit = () => {};

  return (
    <div className="flex flex-col items-center w-full gap-8">
      <div className="flex flex-col w-full gap-6">
        <div className="relative">
          <Articles article={detailArticle} isDetailArticle />
          <div className="absolute top-0 right-0">
            <EditSelect onChange={handleSelect} />
          </div>
        </div>
        <p>{detailArticle.content}</p>
      </div>
      <div className="flex flex-col items-end w-full gap-4">
        <Input
          type="text"
          label="댓글달기"
          name="comment"
          placeholder="댓글을 입력해주세요."
          value={commentValue}
          onChange={handleChange}
        />
        <div className="w-[74px] h-[42px]">
          <Button disabled={Boolean(!commentValue)} onClick={handleSubmit}>
            등록
          </Button>
        </div>
      </div>
      <div>
        {comments.map((comment) => {
          return <Comment comment={comment} />;
        })}
      </div>
      <div className="w-[240px] h-[48px] ">
        <Link href={"/board"}>
          <Button className="rounded-[40px]" onClick={() => {}}>
            목록으로 돌아가기
            <Image src={Previous} width={24} height={24} alt="이전" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
