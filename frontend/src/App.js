import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { Button, ButtonGroup } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/chat" component={ChatPage} />
    </div>
  );
}

export default App;
