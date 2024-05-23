import { Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import CreateProfile from "./pages/CreateProfile";

function App() {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/create-profile" element={<CreateProfile />} />
    </Routes>
  );
}

export default App;
