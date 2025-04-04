import instance from "./api";

export async function getArticleComment(
  articleId: number,
  limit: number = 5,
  cursor: number
) {
  const res = await instance.get(`/articles/${articleId}/comments`, {
    params: { limit: limit, cursor: cursor },
  });
  return res.data;
}
