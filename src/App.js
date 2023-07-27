import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Home from "./components";
import Aboutme from "./components/Aboutme";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/aboutme" component={Aboutme} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
