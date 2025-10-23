import { Routes, Route } from "react-router-dom"
import { MainContainer } from "../components/MainContainer/MainContainer"
import { Home } from "../components/HomeElements/Home"
import { Blog } from "../components/Blog/Blog"
import { Birds } from "../components/Birds/Birds"
import { NotFound } from "../components/NotFound"

export const AppRouter = () => {

  const mainPath = import.meta.env.VITE_FRONTEND_URL;

  return (
    <>
      <Routes>
        <Route path={`/*`} element={<MainContainer />}>
          <Route index element={<Home />} />
          <Route path={`blog`} element={<Blog />} />
          <Route path={`birds`} element={<Birds />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
