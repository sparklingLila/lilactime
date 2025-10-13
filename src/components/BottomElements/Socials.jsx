import { Heart } from "../Icons/Heart"
import { Ribbon } from "../Icons/Ribbon"

export const Socials = () => {
  return (
    <>
      <div className="container25 border-sax">
        <h1 className="bg-sax2">✿ socials ✿</h1>
        <p><Heart color="mint" /> <a href="https://x.com/lilactime_ee" className="text-lav">Twitter main acc</a></p>
        <p><Heart color="blue" /> <a href="https://x.com/lilacribbons_" className="text-pink">Twitter Hellaverse alt</a></p>
        <p><Heart color="lilac" /> <a href="https://archiveofourown.org/users/LilacRibbons" className="text-yellow">AO3</a></p>
        <p><Heart color="pink" /> <a href="https://lilacribbons.tumblr.com/" className="text-mint">Tumblr</a></p>
        <p><Heart color="yellow" /> <a href="https://www.pinterest.com/lilactime_ee/" className="text-sax">Pinterest</a></p>
        <p><Heart color="mint" /> <a href="https://letterboxd.com/StarlightLila/" className="text-lav">Letterboxd</a></p>
        {/* CREDITS */}
        <h1 className="bg-pink2">⁂ credits ⁂</h1>
        <p><Ribbon color="lilac" /> <a href="https://pix5ls.tumblr.com/pixels" className="text-yellow">Icons from pix5ls</a></p>
        <p><Ribbon color="pink" /> <a href="https://gifcities.org/" className="text-mint">Girl gifs from here</a></p>
        <p><Ribbon color="yellow" /> <a href="https://www.pixilart.com/thatweirddude" className="text-sax">Pixel Fall Guy</a></p>
        <p><Ribbon color="mint" /> The rest are from various dead sites from the 2000's D:</p>
      </div>
    </>
  )
}
