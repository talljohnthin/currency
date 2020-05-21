import React, { FC } from "react";
import styled from "styled-components";

const Index = () => {
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
`;

const Logo = styled.section`
  color: $primary-color;
  font-weight: 900;
  font-size: 26px;
`;
