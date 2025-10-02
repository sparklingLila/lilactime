import { Routes, Route } from "react-router-dom"
import { MainContainer } from "../components/MainContainer/MainContainer"
import { Blog } from "../components/Blog/Blog"
import { Birds } from "../components/Birds/Birds"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path={'/*'} element={<MainContainer />}>
          <Route index element={<Blog />} />
          <Route path="blog/" element={<Blog />} />
          <Route path="birds/" element={<Birds />} />

        </Route>
      </Routes>
    </>
  )
}
