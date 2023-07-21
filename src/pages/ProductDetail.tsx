import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const ProductDetail = () => {
  const { id } = useParams();

  const fetchProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
  }

  const { data: product, isLoading, isError, error } = useQuery(['products'], fetchProduct)

  if (isError) {
    return <h1>Error fetching products: {JSON.stringify(error)}</h1>
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <main>
      {product ? 
        <div className="product-detail">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <strong>{'$'+product.price}</strong>
          <p>{product.description}</p>
        </div>
      : <h3>Loading...</h3>      
      }
    </main>
  )
}