import { Heart } from "../Icons/Heart"
import { Ribbon } from "../Icons/Ribbon"

export const Socials = () => {

  const linkText = `<a href="https://lilac-time.neocities.org" target="_blank"><img src="https://lilac-time.neocities.org/img/button.jpg" alt="lilac time button" /></a>`;

  return (
    <>
      <div className="container25 border-sax">
        <h1 className="bg-sax2">✿ socials ✿</h1>
        <div className="margin-bottom30">
          <p><Heart color="mint" /> <a href="https://x.com/lilactime_ee" className="text-lav">Twitter main acc</a></p>
          <p><Heart color="blue" /> <a href="https://x.com/lilacribbons_" className="text-pink">Twitter HH/HB alt</a></p>
          <p><Heart color="lilac" /> <a href="https://archiveofourown.org/users/LilacRibbons" className="text-yellow">AO3</a></p>
          <p><Heart color="pink" /> <a href="https://lilacribbons.tumblr.com/" className="text-mint">Tumblr</a></p>
          <p><Heart color="yellow" /> <a href="https://www.pinterest.com/lilactime_ee/" className="text-sax">Pinterest</a></p>
          <p><Heart color="mint" /> <a href="https://letterboxd.com/StarlightLila/" className="text-lav">Letterboxd</a></p>
        </div>

        {/* CREDITS */}
        <h1 className="bg-pink2">⁂ credits ⁂</h1>
        <div className="margin-bottom30">
          <p><Ribbon color="lilac" /> <a href="https://pix5ls.tumblr.com/pixels" className="text-yellow">Pixels from pix5ls</a></p>
          <p><Ribbon color="pink"/> <a href="https://sadthemes.tumblr.com/smolpxl" className="text-mint">Pixels by sadthemes</a></p>
          <p><Ribbon color="yellow" /> <a href="https://gifcities.org/" className="text-sax">Girl gifs from here</a></p>
          <p><Ribbon color="mint" /> <a href="https://www.pixilart.com/thatweirddude" className="text-lav">Pixel Fall Guy</a></p>
          <p><Ribbon color="blue"/> <a href="https://www.deviantart.com/mel-rosey/art/Princess-Perfume-Avatar-330573613" className="text-pink2">Favicon by Mel-Rosey</a></p>
          <p><Ribbon color="lilac" /> <a href="https://sadthemes.tumblr.com/smolpxl" className="text-yellow">Background by sadgrl</a></p>
          <p><Ribbon color="pink" /> The rest I got from various dead sites from the 2000's D:</p>
        </div>

        {/* LINK ME */}
        <h1 className="bg-mint2">★ link me! ★</h1>
        <img src="img/button.jpg" alt="lilac time button" className="center-img" />
        <textarea value={linkText} readOnly className="link-box center-img"></textarea>
      </div>
    </>
  )
}
