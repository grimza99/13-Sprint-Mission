export function useFormatDate(data) {
  const date = new Date(data);
  const formattedDate = `${date.getFullYear()}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
  return formattedDate;
}

export const useFormatPrice = (data, currency = "KRW") => {
  if (typeof data !== "number") return "가격 정보 없음";
  return data.toLocaleString("ko-KR", {
    style: "decimal",
    currency: currency,
  });
};
