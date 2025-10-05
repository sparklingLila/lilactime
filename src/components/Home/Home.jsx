import { Ribbon } from "../Icons/Ribbon"

export const Home = () => {
  return (
    <>
      <div className="center-container border-pink">
        {/* WELCOME SECTION */}
        <div className="title-w-bigicon">
          <img src="img/welcome.gif" alt="pink welcome sign" />
          <h1 className="text-pink">WELCOME</h1>
          <img src="img/welcome.gif" alt="pink welcome sign" />
        </div>
        <p className="text-justify">
          Hello, hello~! I'm so glad you're here in my little corner on the internet :) I made this site to share everything I like—and I like quite a lot of not-so-related stuff, so the topics posted here will be all over the place sjhdjksaj
        </p>
        <p className="text-justify">
          Click on anything on the side boxes and the full version of the content will appear here!
        </p>
        <img src="img/stardivider.gif" className="divider" alt="rainbow-colored stars divider" />
        {/* UPDATES SECTION */}
        <div>
          <h1 className="text-pink"><img src="img/sparkles.gif" alt="sparkles gif" /> UPDATE LOG</h1>
          <p><Ribbon color="blue" /> 2025/10/04: Added 'media I love' section.</p>
          <p><Ribbon color="mint"/> 2025/10/03: Added 'delulu land' and 'things I love' sections.</p>
          <p><Ribbon color="yellow" /> 2025/10/02: Added 'home', 'update log' and 'shoutbox'.</p>
          <p><Ribbon color="pink" /> 2025/10/01: Started making this site! Added first versions of header, navbar, main container, sidebars, and 'about me'.</p>
        </div>
      </div>
    </>
  )
}
