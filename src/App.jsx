import { BrowserRouter, Route, Routes } from "react-router";
import Mainbody from './components/MainBody';
import { lessons } from "./components/Course/lessonConfig";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainbody></Mainbody>} />
          {lessons.map((lesson) => (
                    <Route
                        key={lesson.id}
                        path={`/lesson/${lesson.id}`}
                        element={<lesson.component />}
                    />
                ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
