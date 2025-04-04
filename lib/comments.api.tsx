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

export async function editArticleComment(commentId: number) {
  const res = await instance.patch(`/comments/${commentId}`, {});
  return res.data.content;
}

export async function deleteArticleComment(commentId: number) {
  const res = await instance.delete(`/comments/${commentId}`, {});
  return res.data.content;
}
