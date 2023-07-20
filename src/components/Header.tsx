import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <span className="logo">OnlineStore</span>
      <nav>
        <Link to='/search'>Search</Link>
        <Link to='/cart'>Cart</Link>
      </nav>
    </header>
  )
}