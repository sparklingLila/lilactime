import { Heart } from "../Icons/Heart"

export const Fashion = () => {
  return (
    <>
      <div className="sidebar-element border-pink">
        <div className="title-w-smallicon bg-pink2">
          <h1>fashion</h1>
          <img src="img/butterflylav.gif" alt="" />
        </div>
        <img src="img/girlwithlollipop.gif" alt="girl with lollipop" className="center-img"/>
        <p><Heart color="lilac" /> Colorful closet <img src="img/minirainbow.gif" alt="mini rainbow" /></p>
        <p><Heart color="pink" /> Outfits I made in Poupée Girl <img src="img/shinyyellowribbon.gif" alt="shiny yellow ribbon" /></p>
        <p><Heart color="yellow" /> Cute outfits of my Fall Guy <img src="img/minifallguy.png" alt="mini fall guy" /></p>
        <p><Heart color="mint"/> <a href="https://www.pinterest.com/lilactime_ee/" className="text-lav">Inspo boards</a> <img src="img/shootingstar.gif" alt="colorful shooting star" /></p>
      </div>
    </>
  )
}
