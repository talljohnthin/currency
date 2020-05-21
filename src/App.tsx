import React, { useEffect, FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startfetchRates } from "./actions/Rate";
import styled from "styled-components";
import Header from "./components/header/Index";
import Menu from "./components/menu/Index";
import { Global, Single } from "./components/rates/Index";

interface Props {}

const App: FC<Props> = (Props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startfetchRates());
  }, [dispatch]);
  return (
    <>
      <Header></Header>
      <Wrapper>
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/" component={Global} />
            <Route exact path="/poland" component={Single} />
          </Switch>
        </Router>
      </Wrapper>
    </>
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
