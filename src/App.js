import { Route } from "react-router-dom";
import "./App.css";
import Home from "./react_router_example/home";
import About from "./react_router_example/about";
import Profile from "./react_router_example/Profile";
function App() {
  return (
    <div className='App'>
      <Route path='/' component={Home} exact={true} />
      <Route path='/about' component={About} />
      <Route path='/profile/:username' component={Profile} />
    </div>
  );
}

export default App;
