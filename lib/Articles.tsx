import instance from "./api";

export async function getBestArticles({
  page = 1,
  pageSize = 3,
}): Promise<Article[]> {
  try {
    const res = await instance.get(`/articles`, {
      params: { page, pageSize, orderBy: "like" },
    });
    return res.data.list;
  } catch {
    throw new Error("베스트 게시글 불러오기 실패");
  }
}

export async function getArticles({
  page = 1,
  orderBy = "recent",
  pageSize = 10,
}): Promise<Article[]> {
  try {
    const res = await instance.get(`/articles`, {
      params: { page, pageSize, orderBy },
    });
    return res.data.list;
  } catch {
    throw new Error(" 게시글 불러오기 실패");
  }
}
