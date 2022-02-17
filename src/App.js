import Home from "./page/home/Home";
import TopBar from "./components/topbar/TopBar";
import Write from "./page/write/Write";
import Settings from "./page/settings/Settings";
import Login from "./page/login/Login";
import Register from "./page/register/Register";
import { BrowserRouter as Routers,Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <Routers>
        <Route extract path="/">
          <Home />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/write">
          <Write />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
        
      </Routers>
    </Router>
  );
}

export default App;
