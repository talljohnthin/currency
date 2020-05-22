import React, { FC } from "react";
import styled from "styled-components";

interface Props {}

const Index: FC<Props> = (props: Props) => {
  return (
    <>
      <Wrapper>404 Page Not Found</Wrapper>
    </>
  );
};

export default Index;

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
