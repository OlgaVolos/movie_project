import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MovieListCards} from "./components";
import {MovieInfoPage, NotFoundPage} from "./pages";

function App() {

  return (
    <div>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'discover/movie'}/>}/>
                <Route path={'discover/movie'} element={<MovieListCards/>}/>
                <Route path={'movie/:id'} element={<MovieInfoPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
