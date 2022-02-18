import Home from "./page/home/Home";
import TopBar from "./components/topbar/TopBar";
import Write from "./page/write/Write";
import Settings from "./page/settings/Settings";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import { Routes, Route} from "react-router-dom";
import Single from "./page/single/Single";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/write" element={<Write />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/single" element={<Single/>} />
      </Routes>
    </>
  );
}

export default App;
