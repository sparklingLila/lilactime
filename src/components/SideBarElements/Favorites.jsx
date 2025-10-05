import { Heart } from "../Icons/Heart"

export const Favorites = () => {
  return (
    <>
      <div className="sidebar-element border-yellow">
        <h1 className="bg-yellow2">favorites</h1>
        <p><Heart color="lilac" /> Favorite music albums</p>
        <p><Heart color="pink" /> Favorite pokemon by type</p>
        <p><Heart color="yellow" /> Favorite movies</p>
        <p><Heart color="mint" /> DereSute fav SSRs</p>
        <p><Heart color="blue" /> DereSute fav units</p>
        <p><Heart color="lilac" /> Otomegokoro playlist</p>
        <p><Heart color="pink" /> Weekly obsession playlist</p>
        <p><Heart color="yellow" /> Cute bird videos</p>
      </div>
    </>
  )
}
