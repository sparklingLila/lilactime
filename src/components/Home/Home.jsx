
export const Home = () => {
  return (
    <>
      <div className="center-container">
        {/* WELCOME SECTION */}
        <div className="title-w-bigicon">
          <img src="img/welcome.gif" alt="pink welcome sign" />
          <h1>WELCOME</h1>
          <img src="img/welcome.gif" alt="pink welcome sign" />
        </div>
        <p>
          Hello, hello~! I'm so glad you're here in my little corner on the internet :) I made this site as a place to share everything I like—and I like quite a lot of not-so-related things, so the topics posted here will be all over the place sjhdjksaj
        </p>
        <p>Click on anything on the side boxes and the full version of the content will appear here!</p>
        <img src="img/stardivider.gif" className="divider" alt="rainbow-colored stars divider" />
        {/* UPDATES SECTION */}
        <div className="text-left">
          <h1><img src="img/sparkles.gif" alt="sparkles gif" /> UPDATES</h1>
          <p>💛 2025-10-02: Added 'home' and 'updates' sections.</p>
          <p>🩷2025-10-01: Started making this site! Added first versions of header, navbar, main container, sidebars, and 'about me' section.</p>
        </div>
      </div>
    </>
  )
}
