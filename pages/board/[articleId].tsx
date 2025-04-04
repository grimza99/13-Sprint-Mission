import Image from "next/image";
import Previous from "@/public/assets/icons/previous.icon.svg";
import Button from "@/components/Button";
import Link from "next/link";
import { EditSelect } from "@/components/Select";
import { Articles } from "@/components/Card";
import { GetServerSideProps } from "next";
import { getArticleDetail } from "@/lib/Articles";

//
interface Props {
  detailArticle: Article;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { articleId } = context.query as {
    articleId: string;
  };
  const detailArticle = await getArticleDetail(Number(articleId));
  console.log(detailArticle);

  return {
    props: { detailArticle },
  };
};

export default function DetailArticle({ detailArticle }: Props) {
  const handleChange = () => {};

  return (
    <div className="flex flex-col items-center gap-8">
      <div>
        <Articles article={detailArticle} isDetailArticle />
        <EditSelect onChange={handleChange} />
      </div>
      <div></div>
      <div></div>
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
