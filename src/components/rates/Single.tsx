import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "./../../store/configureStore";
import styled from "styled-components";
import { Rate } from "../../types/Rate";
import { startGetRate, startfetchYesterdaysRates } from "./../../actions/Rate";

interface Props {}

const Single: FC<Props> = (props: Props) => {
  const { list, previousDayList } = useSelector(
    (state: AppState) => state.rates
  );

  const [previousDayRates, setPreviousDayRates] = useState<Rate[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    setPreviousDayRates(previousDayList);
    if (!previousDayRates.length) dispatch(startfetchYesterdaysRates());
    if (!list.length) dispatch(startGetRate("PLN"));
  }, [list, previousDayList, dispatch, previousDayRates]);

  return (
    <>
      <Wrapper>
        {list.map((e: Rate, index: number) => (
          <Item key={index} isOdd={index % 2 === 0 ? true : false}>
            <Box>{e.currency}</Box>
            <Text isOdd={index % 2 === 0 ? true : false}>
              <span>Today</span>
              {e.conversion}
            </Text>
            <Text2 isOdd={index % 2 === 0 ? true : false}>
              <span>Yesterday</span>
              {previousDayRates.length
                ? previousDayRates.filter((p) => p.currency === e.currency)
                    .length
                  ? previousDayRates.filter((p) => p.currency === e.currency)[0]
                      .conversion
                  : "No data"
                : null}
            </Text2>
          </Item>
        ))}
      </Wrapper>
    </>
  );
};

export default Single;

interface ItemProps {
  readonly isOdd: boolean;
}

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  transition: 0.3s;
  transform: translateY(10px) scale(1);
  box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.01),
    0 10px 20px 5px rgba(0, 0, 0, 0.01);
`;

const Text = styled.div<ItemProps>`
  text-align: center;
  font-size: 14px;
  letter-spacing: 1px;
  color: ${(props) => (props.isOdd ? "#fff" : "#333")};
  font-weight: 500;
  transition: 0.3s;
  transform: translateY(10px);
  & > span {
    font-weight: 400;
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const Text2 = styled.div<ItemProps>`
  text-align: center;
  font-size: 14px;
  letter-spacing: 1px;
  color: ${(props) => (props.isOdd ? "#fff" : "#333")};
  font-weight: 500;
  transition: 0.3s;
  transform: translateY(150%) scale(0.4);
  opacity: 0;
  & > span {
    font-weight: 400;
    display: block;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const Item = styled.div<ItemProps>`
  background: ${(props) => (props.isOdd ? "rgb(163, 155, 181)" : "#E0E3EA")};
  width: 21%;
  margin: 10px 0;
  padding: 20px 10px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.3s;
  box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.01),
    0 10px 20px 5px rgba(0, 0, 0, 0.01);
  overflow: hidden;

  &:hover {
    box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.03),
      0 10px 20px 5px rgba(0, 0, 0, 0.03);

    & > ${Box} {
      transform: translateY(-5px);
    }

    & > ${Text} {
      transform: translateY(-5px);
    }

    & > ${Text2} {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }

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
