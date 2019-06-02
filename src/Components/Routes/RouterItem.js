import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../Home"));
const Experience = lazy(() => import("../Experience"));
const Bio = lazy(() => import("../Bio"));
const TechStack = lazy(() => import("../TechStack"));
const Contact = lazy(() => import("../Contact"));
const ErrorNotFound = lazy(() => import("../Errors/ErrorNotFound"));

const RouterItem = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/exp" component={Experience} />
      <Route path="/bio" component={Bio} />
      <Route path="/techStack" component={TechStack} />
      <Route path="/contact" component={Contact} />
      <Route component={ErrorNotFound} />
    </Switch>
  );
};

export default RouterItem;
