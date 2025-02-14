export default function useFormatDate(data) {
  const date = new Date(data);
  const formattedDate = `${date.getFullYear()}.${String(
    date.getMonth() + 1
  ).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
  return formattedDate;
}
