import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <Link to='/' className="logo">OnlineStore</Link>
      <nav>
        <Link to='/search'>Search</Link>
        <Link to='/cart'>Cart</Link>
      </nav>
    </header>
  )
}