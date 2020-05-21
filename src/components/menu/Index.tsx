import React, { FC } from "react";
import styled from "styled-components";

const Index = () => {
  return (
    <>
      <Wrapper>
        <InnerWrapper>
          <Item>Global</Item>
          <Item>Poland</Item>
        </InnerWrapper>
        <Item>Refresh Rates</Item>
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
`;

const Item = styled.section`
  color: #c8c9cd;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  padding: 12px 15px;
  transition: 0.3s;

  &:hover {
    color: #393939;
  }
`;

const InnerWrapper = styled.section`
  display: flex;
  font-weight: 900;
  font-size: 26px;
`;
