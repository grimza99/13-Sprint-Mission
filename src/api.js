const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts({
  device = "desktop",
  page = 1,
  order = "recent",
}) {
  const pageSize = device === "mobile" ? 4 : device === "tablet" ? 6 : 10;
  const query = `?orderBy=${order}&page=${page}&pageSize=${pageSize}`;
  const response = await fetch(`${BASE_URL}/products${query}`);

  if (!response.ok) {
    throw new Error("상품을 불러오지 못했습니다. 다시 시도해주세요");
  }
  const body = await response.json();
  return body;
}

export async function bestProducts({ device }) {
  const pageSize = device === "mobile" ? 1 : device === "tablet" ? 2 : 4;
  const response = await fetch(
    `${BASE_URL}/products?orderBy=favorite&pageSize=${pageSize}`
  );
  if (!response.ok) {
    throw new Error("베스트 상품을 불러오지 못했습니다. 다시 시도해주세요");
  }
  const body = await response.json();
  return body;
}
