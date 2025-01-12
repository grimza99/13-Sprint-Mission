const BASE_URL = "https://panda-market-api.vercel.app/";

export async function getProducts() {
  const response = await fetch(`${BASE_URL}products`);
  if (!response.ok) {
    throw new Error("상품을 불러오지 못했습니다. 다시 시도해주세요");
  }
  const body = await response.json();
  return body;
}
