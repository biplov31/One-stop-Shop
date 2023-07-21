import { useQuery } from "@tanstack/react-query";
import { Product } from "../components/Product";
import { Link } from "react-router-dom";

export const Home = () => {

  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json();
  }

  const { data: products, isLoading, isError, error } = useQuery(['products'], fetchProducts)

  if (isError) {
    return <h1>Error fetching products: {JSON.stringify(error)}</h1>
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <main>
      <h2>Our Products</h2>
      <div className="product-list">
        {products.map((product: unknown) => (
          <Link to={`/products/${product.id}`} className="product-link">
            <Product key={product.id} title={product.title} price={product.price} image={product.image} />
          </Link>
        ))}
      </div>
    </main>

  )
}