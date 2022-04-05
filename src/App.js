import { Routes, Route } from "react-router-dom";

import Container from "./pages/Homepage/Container";
import MovieDetail from "./pages/MovieDetail";
import MoviePage from "./pages/MoviePage";
import Video from "./Video/Video";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Container />}></Route>
        <Route
          path="/movies"
          element={
            <>
              <MoviePage></MoviePage>
            </>
          }
        ></Route>
        <Route
          path="/movie/:movieId"
          element={<MovieDetail></MovieDetail>}
        ></Route>
        <Route path="/movie/:slug" element={<Video></Video>}></Route>
      </Routes>
    </>
  );
}

export default App;
