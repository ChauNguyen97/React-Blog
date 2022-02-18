import Home from "./page/home/Home";
import TopBar from "./components/topbar/TopBar";
import Write from "./page/write/Write";
import Settings from "./page/settings/Settings";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import { Routes, Route} from "react-router-dom";
import Single from "./page/single/Single";

function App() {
  const user=false;
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Login/>} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/post/:postId" element={user ? <Single /> : <Login/>} />
      </Routes>
    </>
  );
}

export default App;
