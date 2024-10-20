import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { ContactUs } from "./pages/contact/ContactUs";
import Admin from "./pages/admin/Admin";
import AllTodos from "./pages/todos/AllTODOs";

function App() {
  return (
    <div className="App">
      <h2>React</h2>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/todos" element={<AllTodos />}></Route>
      </Routes>
    </div>
  );
}

export default App;
