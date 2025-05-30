import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./Components/Header";
import PrivateRoute from "./Components/PrivateRoute";

export default function App() {
  return  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route element={<PrivateRoute/>} >
      <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
  }