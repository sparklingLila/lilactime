import { NavLink } from 'react-router-dom';
import './navBar.css';

export const NavBar = () => {

  return (
    <>
      <div className="header">
        <h1>lilac time.</h1>
      </div>
      <div className="navbar">
        <NavLink to="/">⋆Home⋆</NavLink>
        <NavLink to="/blog">⋆Blog⋆</NavLink>
        <NavLink to="/gallery">⋆Art gallery⋆</NavLink>
        <NavLink to="/amigurumi">⋆Amigurumi⋆</NavLink>
        <NavLink to="/outfits">⋆Outfits⋆</NavLink>
      </div>
    </>
  )
}
