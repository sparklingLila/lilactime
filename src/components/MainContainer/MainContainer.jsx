import { Outlet } from "react-router-dom"
import { NavBar } from "../NavBar/NavBar"
import { LeftSidebar } from "../SideBars/LeftSidebar"
import { RightSidebar } from "../SideBars/RightSidebar"
import { Footer } from "../Footer/Footer"
import { BottomContainer } from "../BottomContainer/BottomContainer"
import './mainContainer.css'

export const MainContainer = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="main-container">
        <LeftSidebar />
        <Outlet />
        <RightSidebar />
      </div>
      <BottomContainer />
      <Footer />
    </>
  )
}
