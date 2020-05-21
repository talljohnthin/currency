import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "./../../store/configureStore";
import styled from "styled-components";
import { Rate } from "../../types/Rate";

interface Props {}

const Single: FC<Props> = (props: Props) => {
  const { list } = useSelector((state: AppState) => state.rates);
  const [rates, setRates] = useState<any>([]);

  useEffect(() => {
    setRates(list);
  }, [list]);

  return (
    <>
      <Wrapper>
        {rates.map((e: Rate) => (
          <Item key={e.currency}>
            <Box>{e.currency}</Box>
            <Text>{e.conversion}</Text>
          </Item>
        ))}
      </Wrapper>
    </>
  );
};

export default Single;

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Item = styled.div`
  background: rgb(163, 155, 181);
  width: 21%;
  margin: 10px 0;
  padding: 16px 10px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.01),
    0 10px 20px 5px rgba(0, 0, 0, 0.01);

  @media (max-width: 900px) {
    width: 29%;
  }
  @media (max-width: 767px) {
    width: 45%;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Box = styled.div`
  width: 40px;
  height: 40px;
  background: #fff;
  border-radius: 50%;
  font-size: 13px;
  display: flex;
  margin: 0 auto 10px;
  justify-content: center;
  align-items: center;
  color: #aea7be;
  box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.01),
    0 10px 20px 5px rgba(0, 0, 0, 0.01);
`;

const Text = styled.div`
  text-align: center;
  font-size: 14px;
  letter-spacing: 1px;
  color: #fff;
  font-weight: 400;
`;
