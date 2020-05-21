import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  startfetchRates,
  startGetRate,
  startGetRates,
} from "./../../actions/Rate";

interface Props {}

const Index: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Link to="/" onClick={() => dispatch(startGetRates())}>
            <Item>Global</Item>
          </Link>
          <Link to="/poland" onClick={() => dispatch(startGetRate("PLN"))}>
            <Item>Poland</Item>
          </Link>
        </InnerWrapper>
        <Link to="/" onClick={() => dispatch(startfetchRates())}>
          <Item>Refresh Rates</Item>
        </Link>
      </Wrapper>
    </>
  );
};

export default Index;

const Wrapper = styled.section`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid #f1f1f1;
  border-radius: 6px;
  margin-bottom: 15px;
`;

const Item = styled.section`
  color: #393939;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  padding: 12px 15px;
  transition: 0.3s;

  &:hover {
    color: #000;
  }
`;

const InnerWrapper = styled.section`
  display: flex;
  font-weight: 900;
  font-size: 26px;
  outine: 0;
`;
