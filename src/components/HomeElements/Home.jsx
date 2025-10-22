import './homeElements.css'
import { Stamps } from "./Stamps"
import { Updates } from "./Updates"

export const Home = () => {
  return (
    <>
      <div className="center-container border-pink">
        {/* WELCOME SECTION */}
        <div className="title-w-bigicon">
          <img src="img/welcome.gif" alt="pink welcome sign" />
          <h1 className="text-pink2">WELCOME</h1>
          <img src="img/welcome.gif" alt="pink welcome sign" />
        </div>
        <p className="text-justify">
          Hello, hello~! I'm so glad you're here in my little corner on the internet :) I made this site to share everything I like—and I like quite a lot of not-so-related stuff, so the topics posted here will be all over the place sjhdjksaj
        </p>
        <p className="text-justify">
          Click on anything on the side boxes and the full version of the content will appear here!
        </p>
        <img src="img/stardivider.gif" className="divider" alt="rainbow-colored stars divider" />

        <Updates />
        <img src="img/stardivider.gif" className="divider" alt="rainbow-colored stars divider" />

        <Stamps />
      </div>
    </>
  )
}
