import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductItemProps } from "./product-item";

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProducts] = useState<ProductItemProps>();
  const [loading, setLoading] = useState<boolean>(false);

  const getProducts = async () => {
    setLoading(true);
    const response = await axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/${productId}`,
    });
    console.log(response);
    setLoading(false);
    setProducts(response.data);
  };
  useEffect(() => {
    if (productId) {
      getProducts();
    }
  }, [productId]);

  if (loading) {
    return <h1>loading</h1>;
  }
  if (product) {
    return <div>Product Detail {product?.title}</div>;
  }
  return <h1>No data found</h1>;
}
