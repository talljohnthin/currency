import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Index: FC = () => {
  return (
    <>
      <Wrapper>
        <Item>Logo</Item>
      </Wrapper>
    </>
  );
};

export default Index;

const Wrapper = styled.section`
  display: flex;
`;

const Item = styled.section`
  background: rgb(163, 155, 181);
`;
