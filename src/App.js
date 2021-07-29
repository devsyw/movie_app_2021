import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <HashRouter>
      {/* <Route path="/">
        기본적으로 존재하는 뷰
      </Route> */}
      <Navigation/>

      <Route path="/" exact={true} component={Home}/>
      <Route path="/home">
        <h3>Home</h3>
      </Route>
      <Route path="/home/introduction">
        <h3>introduction</h3>
      </Route>
      <Route path="/about" component={About} />
    </HashRouter>
  );
}

export default App;