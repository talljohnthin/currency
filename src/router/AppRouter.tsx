import React, { useEffect } from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  startfetchRates,
  startGetRate,
  startGetRates,
} from "./../actions/Rate";
// import createHistory from "history/createBrowserHistory";
// import HomePage from "../components/HomePage";

//export const history = createHistory();

// Instead of BrowserRouter, we use the regular router,
// but we pass in a customer history to it.
const AppRouter = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    //dispatch(startfetchRates());
    dispatch(startGetRates());
    //dispatch(startGetRate("PLN"));
  }, []);
  return (
    <>
      {console.log(data)}
      <div>Hey</div>
    </>
  );
};

export default AppRouter;
