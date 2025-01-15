import { BrowserRouter, Route, Routes } from "react-router";
import Mainbody from './components/MainBody';
import JavaScriptBasics from "./components/Course/JavaScriptBasics";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainbody></Mainbody>} />
          <Route path="/JavaScriptBasics" element={<JavaScriptBasics></JavaScriptBasics>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
