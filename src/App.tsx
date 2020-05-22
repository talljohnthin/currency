import React, { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/header/Index";
import Menu from "./components/menu/Index";
import { Global, Single } from "./components/rates/Index";
import PageNotFound from "./components/404/Index";

interface Props {}

const App: FC<Props> = (Props: Props) => {
  return (
    <>
      <Header></Header>
      <Wrapper>
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/" component={Global} />
            <Route exact path="/poland" component={Single} />
            <Route component={PageNotFound} />
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
  background: #fff;
  border-radius: 6px;
  min-height: 400px;
`;
