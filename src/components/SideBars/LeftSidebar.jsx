import { Profile } from '../SideBarElements/Profile'
import './sideBars.css'

export const LeftSidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <Profile />
        <div className="sidebar-element">
          <h1>delulu land</h1>
        </div>
      </div>
    </>
  )
}
