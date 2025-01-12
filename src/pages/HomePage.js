import { useEffect, useState } from "react";
import ItemsList from "../components/ItemsList";
import { getProducts } from "../api";
//
function HomePage() {
  const [items, setItems] = useState([]);

  const handleLoad = async () => {
    const { list } = await getProducts();
    setItems(list);
  };

  useEffect(() => {
    handleLoad();
  }, [items]);

  return (
    <div>
      <ItemsList items={items} />
    </div>
  );
}

export default HomePage;
