import { DeluluLand } from '../SideBarElements/DeluluLand'
import { Profile } from '../SideBarElements/Profile'
import './sideBars.css'

export const LeftSidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <Profile />
        <DeluluLand />
      </div>
    </>
  )
}
