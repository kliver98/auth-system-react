import React from "react";
import Home from "../components/Home/Home";
import PageNotFound from "../components/Errors/PageNotFound";
import { Route, Switch } from "react-router-dom";
import { BASE } from '../actions/constants';

const base = "/auth-system-react/"

export default (
    <>
      <Switch>
        <Route exact path={BASE}>
          <Home />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
  