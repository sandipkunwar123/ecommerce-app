import axios from "axios";
import { useEffect, useState } from "react";
import ProductItem, { ProductItemProps } from "./product-item";

export default function Products() {
  const [products, setProducts] = useState<Array<ProductItemProps>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getProducts = async () => {
    setLoading(true);
    const response = await axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    });

    console.log(response);
    setLoading(false);
    setProducts(response.data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  if (loading) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      {products.map((item) => (
        <ProductItem {...item} key={item.id} />
      ))}
    </div>
  );
}
