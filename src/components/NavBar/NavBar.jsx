import './navBar.css';

export const NavBar = () => {
  return (
    <>
      <div className="header">
        <h1>lilac time.</h1>
      </div>
      <div className="navbar">
        <a href="/">⋆Home⋆</a>
        <a href="/blog">⋆Blog⋆</a>
        <a href="/dibujitos">⋆Art gallery⋆</a>
        <a href="/amigurumi">⋆Amigurumi⋆</a>
        <a href="/coords">⋆Outfits⋆</a>
      </div>
    </>
  )
}
