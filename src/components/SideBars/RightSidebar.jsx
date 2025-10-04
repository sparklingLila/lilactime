import { ThingsILove } from '../SideBarElements/ThingsILove'
import './sideBars.css'

export const RightSidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <div className='sidebar-element'>
          <div className="title-w-smallicon">
            <h1>shoutbox</h1>
            <img src="img/pix5ls-chat.gif" alt="" />
          </div>
          <iframe src="https://www3.cbox.ws/box/?boxid=3549431&boxtag=Q34sFz" width="100%" height="400" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>
        </div>
        <ThingsILove />
      </div>
    </>
  )
}
