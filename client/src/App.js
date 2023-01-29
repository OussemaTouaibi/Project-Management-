import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Signin" element={<SignIn />} />
        <Route exact path="/Signup" element={<SignUp />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
