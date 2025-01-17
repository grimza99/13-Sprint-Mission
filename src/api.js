const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts({
  pageSize = 10,
  page = 1,
  order = "recent",
}) {
  const query = `?page=${page}&pageSize=${pageSize}&orderBy=${order}`;
  const response = await fetch(`${BASE_URL}/products${query}`);

  if (!response.ok) {
    throw new Error("상품을 불러오지 못했습니다. 다시 시도해주세요");
  }
  const body = await response.json();
  return body;
}

export async function bestProducts({ bestPageSize = 4 }) {
  const response = await fetch(
    `${BASE_URL}/products?orderBy=favorite&pageSize=${bestPageSize}`
  );
  if (!response.ok) {
    throw new Error("베스트 상품을 불러오지 못했습니다. 다시 시도해주세요");
  }
  const body = await response.json();
  return body;
}
