import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to='/' className="logo">One-stop Shop</Link>
      <nav>
        <Link to='/search'>Search</Link>
        <Link to='/cart'><img src="/images/shopping-cart.png" alt="Shopping cart" className="shopping-cart" /></Link>
      </nav>
    </header>
  )
}