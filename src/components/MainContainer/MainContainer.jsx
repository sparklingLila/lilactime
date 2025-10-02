import { Outlet } from "react-router-dom"
import { NavBar } from "../NavBar/NavBar"
import { LeftSidebar } from "../SideBars/LeftSidebar"
import { RightSidebar } from "../SideBars/RightSidebar"
import './mainContainer.css'
import { Footer } from "../Footer/Footer"

export const MainContainer = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="main-container">
        <LeftSidebar />
        <Outlet />
        <RightSidebar />
      </div>
      <Footer />
    </>
  )
}
