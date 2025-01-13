function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
}
function ListItem({ items }) {
  return (
    <div>
      <img src={items.images[0]} alt="이미지" />
      <div>이름:{items.name}</div>
      <div>가격: {items.price}</div>
      <div>좋아요: {items.favoriteCount}</div>
      <div>날짜: {formatDate(items.createdAt)}</div>
    </div>
  );
}
function ItemsList({ items, className }) {
  return (
    <div>
      <div>
        <ul>
          {items.map((item) => {
            return (
              <li className={className} key={item.id}>
                <ListItem items={item} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ItemsList;
