import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { ContactUs } from "./pages/contact/ContactUs";

function App() {
  return (
    <div className="App">
      <h2>React</h2>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
