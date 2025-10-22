import { Fashion } from '../SideBarElements/Fashion'
import { Favorites } from '../SideBarElements/Favorites'
import './sideBars.css'

export const RightSidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-element border-mint'>
          <div className="title-w-smallicon bg-mint2">
            <h1>shoutbox</h1>
            <img src="img/pix5ls-chat.gif" alt="" />
          </div>
          <iframe src="https://www3.cbox.ws/box/?boxid=3549431&boxtag=Q34sFz" width="100%" height="400" allowtransparency="yes" allow="autoplay" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="auto"></iframe>
        </div>
        <Favorites />
        <Fashion />
      </div>
    </>
  )
}
