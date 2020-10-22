import React from "react";
import Home from "../components/Home/Home";
import DepCreate from "../components/Dependency/DepCreate";
import DepSearch from "../components/Dependency/DepSearch";
import UserCreate from "../components/User/UserCreate";
import UserModify from "../components/User/UserModify";
import UserSearch from "../components/User/UserSearch";
import PageNotFound from "../components/Errors/PageNotFound";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { BASE } from '../actions/constants';

export default (
    <>
      <Switch>
        <Route exact path={BASE}>
          <Home />
        </Route>
        <Route exact path={BASE+"dependency/create"}>
          <DepCreate />
        </Route>
        <Route exact path={BASE+"dependency/search/all"}>
          <DepSearch />
        </Route>
        <Route exact path={BASE+"user/create"}>
          <UserCreate />
        </Route>
        <Route exact path={BASE+"user/modify/:email"} render={(props) => <UserModify {...props}/>} />
        <Route exact path={BASE+"user/search"}>
          <UserSearch />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
    </>
  );
  