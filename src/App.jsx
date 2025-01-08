import { BrowserRouter, Route, Routes } from "react-router";
import Mainbody from './components/MainBody';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainbody></Mainbody>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
