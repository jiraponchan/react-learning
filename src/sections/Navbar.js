import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navbar">
      <div className="logo">
        <Link className='item'  to="/">LOGO</Link>
      </div>
      <div className="menuitem">
        <Link className='item'to="/">Home</Link>
        <Link className='item' to="/about">About</Link>
        <Link className='item' to="/contact">Contact</Link>
        <Link className='item' to="/myfucn1">My fucn 1</Link>
        <Link className='item' to="/showSec">ShowSec 1</Link>
      </div>
    </div>
  );
}

export default Navbar;
