function ListItem({ items }) {
  return (
    <div>
      <div>{items.name}</div>
    </div>
  );
}
function ItemsList({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li>
            <ListItem items={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default ItemsList;
