import React, { FC } from "react";
import styled from "styled-components";

interface Props {}

const Index: FC<Props> = (props: Props) => {
  return (
    <>
      <Wrapper>
        <Text>404 Page Not Found</Text>
      </Wrapper>
    </>
  );
};

export default Index;

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Text = styled.div`
  text-align: center;
  font-size: 30px;
  letter-spacing: 1px;
  font-weight: 600;
  transition: 0.3s;
  padding: 15px;
  transform: translateY(0);
  @media (max-width: 767px) {
    font-size: 24px;
  }
`;
