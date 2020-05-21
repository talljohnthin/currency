import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import {
  fetchRates,
  getRatesGlobal,
  getRatesPoland,
} from "./redux/actions/rates/ratesActions";
import { useDispatch } from "react-redux";
import Header from "./components/header/Index";
import Menu from "./components/menu/Index";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRates());
  });

  const handleGetGlobalRates = () => {
    dispatch(getRatesGlobal());
  };

  const handleGetPolandRates = () => {
    dispatch(getRatesPoland());
  };

  return (
    <Fragment>
      <Header />
      <Wrapper>
        <Menu />
      </Wrapper>

      <button onClick={handleGetGlobalRates}>click poland</button>
      <button onClick={handleGetPolandRates}>click global</button>
      {/* <Router>
        <Route path="/" exact component={Flow} />
        <Route path="/powerbill" exact component={PowerBill} />
        <Route path="/address" exact component={Address} />
        <Route path="/address/change" exact component={Change} />
        <Route path="/address/search" exact component={Search} />
        <Route path="/homeowner" exact component={HomeOwner} />
        <Route path="/provider" exact component={Provider} />
        <Route path="/roofshade" exact component={ProofShade} />
        <Route path="/name" exact component={Personal} />
        <Route path="/email" exact component={Email} />
        <Route path="/tel" exact component={Phone} />
        <Route path="/results" exact component={Results} />
      </Router> */}
    </Fragment>
  );
};
export default App;

const Wrapper = styled.section`
  padding: 30px;
  max-width: 900px;
  margin: 20px auto 0;
  justify-content: space-between;
  box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.01),
    0 10px 20px 5px rgba(0, 0, 0, 0.01);
  border: 1px solid #f6f7f7;
  background: #fff;
  border-radius: 6px;
  min-height: 400px;
`;
