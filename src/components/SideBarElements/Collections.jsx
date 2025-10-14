import { Heart } from "../Icons/Heart"

export const Collections = () => {
  return (
    <>
      <div className="sidebar-element border-mint">
        <div className="title-w-smallicon bg-mint2">
          <h1>collections</h1>
          <img src="img/pix5ls-flask.gif" alt="flask of colorful stars" />
        </div>
        <img src="img/girlhappytoyland.gif" alt="" className="center-img"/>
        <p><Heart color="lilac" /> Mini Lalaloopsy <img src="img/lalaloopsy.jpg" alt="mini lalaloopsy" /></p>
        <p><Heart color="pink" /> Cassettes, music CDs, DVDs and BRs <img src="img/cd.gif" alt="rotating cd" /></p>
        <p><Heart color="yellow" /> Plushies <img src="img/rabbit.gif" alt="" /></p>
      </div>
    </>
  )
}
