import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './View/Personal/Home.jsx'
import Business from './View/Business/Business.jsx';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/business" element={<Business />} />
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/settings" element={<Settings />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}

export default App
