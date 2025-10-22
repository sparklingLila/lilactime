import { Ribbon } from "../Icons/Ribbon"

export const Updates = () => {
  return (
    <>
      <div>
        <h1 className="text-pink2"><img src="img/sparkles.gif" alt="sparkles gif" /> UPDATE LOG</h1>
        <div className="scroll-container">
          <p><Ribbon color="blue"/> 2025/10/22: Added lots of stamps! Also added 'link me!' section.</p>
          <p><Ribbon color="mint" /> 2025/10/14: Added tiny icons to every sidebar element.</p>
          <p><Ribbon color="yellow" /> 2025/10/12: Updated 'media I love' section.</p>
          <p><Ribbon color="pink" /> 2025/10/11: Added 'collections' and 'fashion' sections. Added little icons next to every subsection link.</p>
          <p><Ribbon color="lilac" /> 2025/10/05: Gave every sidebar element a different color; added 'socials' and 'credits' sections.</p>
          <p><Ribbon color="blue" /> 2025/10/04: Added 'media I love' section.</p>
          <p><Ribbon color="mint" /> 2025/10/03: Added 'delulu land' and 'things I love' sections.</p>
          <p><Ribbon color="yellow" /> 2025/10/02: Added 'home', 'update log' and 'shoutbox'.</p>
          <p><Ribbon color="pink" /> 2025/10/01: Started making this site! Added first versions of header, navbar, main container, sidebars, and 'about me'.</p>
        </div>
      </div>
    </>
  )
}
