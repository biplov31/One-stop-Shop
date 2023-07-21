import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

export const Search = () => {
  const [searchTerm, setSearchTerm]  = useState('');

  const fetchProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products?limit=30');
    return res.json();
  }

  const { data: products } = useQuery(['products'], fetchProducts)
  
  return (
    <main>
      <input 
        type="text" 
        className="searchbar"
        placeholder="Search for products" 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <div className="search-results">
        {products && products.filter((product) => {
          if (searchTerm == '') {
            return
          } else if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return product
          }
        }).map((product) => {
          return (
            <Link key={product.id} to={`/products/${product.id}`} >
              <div className="search-result">
                <img src={product.image} alt={product.title} />
                <span>{product.title}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </main>
  )
}