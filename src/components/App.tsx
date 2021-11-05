import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import TodosPage from "../pages/TodosPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact></Route>
          <Route component={AboutPage} path="/about"></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
