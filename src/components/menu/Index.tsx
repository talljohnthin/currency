import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "./../../store/configureStore";
import {
  startfetchRates,
  startGetRate,
  startGetRates,
  startfetchYesterdaysRates,
} from "./../../actions/Rate";

interface Props {}

const Index: FC<Props> = (props: Props) => {
  const { fetchLoading } = useSelector((state: AppState) => state.rates);
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
        <Link
          to="/"
          onClick={() => {
            dispatch(startfetchRates());
            dispatch(startfetchYesterdaysRates());
          }}
        >
          <Item>{fetchLoading ? "Fetching Rates..." : "Refresh Rates"}</Item>
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
  box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.01),
    0 10px 20px 5px rgba(0, 0, 0, 0.01);
`;

const Item = styled.section`
  color: #393939;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  padding: 17px 25px;
  transition: 0.3s;
  &:hover {
    color: #000;
  }
  @media (max-width: 767px) {
    padding: 16px;
  }
`;

const InnerWrapper = styled.section`
  display: flex;
  font-weight: 900;
  font-size: 26px;
  outline: 0;
  align-items: center;
`;
