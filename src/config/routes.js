import React from "react";
import Home from "../components/Home/Home";
import PageNotFound from "../components/Errors/PageNotFound";
import { Route, Switch } from "react-router-dom";
export default (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
  