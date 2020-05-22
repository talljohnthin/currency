import React, { FC } from "react";
import styled from "styled-components";

interface Props {}

const Index: FC<Props> = (props: Props) => {
  return (
    <>
      <Header>
        <Logo>Logo</Logo>
      </Header>
    </>
  );
};

export default Index;

const Header = styled.section`
  padding: 26px 30px;
  background: white;
  display: flex;
  justify-content: center;
  border: 1px solid #eee;
  box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.01),
    0 10px 20px 5px rgba(0, 0, 0, 0.01);
`;

const Logo = styled.section`
  color: $primary-color;
  font-weight: 900;
  font-size: 26px;
`;
