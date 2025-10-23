import { Heart } from "../Icons/Heart"

export const Favorites = () => {
  return (
    <>
      <div className="sidebar-element border-yellow">
        <h1 className="bg-yellow2">favorites <img src="img/minihearts.webp" alt="mini hearts growing and shrinking" /></h1>
        <img src="img/girlinflask.gif" alt="girl in flask with lots of colorful hearts" className="center-img" />
        <p><Heart color="lilac" /> Favorite albums <img src="img/cd.gif" alt="rotating cd" /></p>
        <p><Heart color="pink" /> Favorite pokemon by type <img src="img/ditto.gif" alt="mini ditto" /></p>
        <p><Heart color="yellow" /> Favorite movies <img src="img/tinytv.gif" alt="tiny pink tv" /></p>
        <p><Heart color="mint" /> DereSute SSRs <img src="img/heartwithbow.gif" alt="heart with bow" /></p>
        <p><Heart color="blue" /> DereSute units <img src="img/colorfulstars.gif" alt="colorful stars gif" /></p>
        <p><Heart color="lilac" /> Otomegokoro playlist (music for my dreamer heart) <img src="img/heartmusicnote.gif" alt="music note made of hearts" /></p>
        <p><Heart color="pink" /> Weekly obsession playlist <img src="img/tinyequalizer.gif" alt="tiny rainbow equalizer" /><img src="img/heartstream.gif" alt="heart stream" /></p>
        <p><Heart color="yellow" /> My favorite cute bird videos <img src="img/cockatiel.gif" alt="cockatiel" /></p>
      </div>
    </>
  )
}
