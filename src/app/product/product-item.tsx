import { useNavigate } from "react-router-dom";

export interface ProductItemProps {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: string;
  };
}
// const value:boolean = true
// console.log(value)

export default function ProductItem(props: ProductItemProps) {
  const { title, price, description, category, image, rating, id } = props;
  const navigate = useNavigate();
  const handleProduct = (id: string) => {
    navigate(`/product-detail/${id}`);
  };
  return (
    <button onClick={() => handleProduct(id)}>
      <h1>{title}</h1>
      <span>{price}</span>
      <p>{description}</p>
      <span>{category}</span>
      <img src={image} alt={title} />
      <p>{rating.rate}</p>
    </button>
  );
}
