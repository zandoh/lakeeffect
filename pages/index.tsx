import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import YetiSvg from "../public/Yeti";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <StyledHomeHeader>
        <StyledParagraph>Coming Soon</StyledParagraph>
        <YetiSvg height={250} width={250} />
        <StyledTitle>&lt;Lake Effect&gt;</StyledTitle>
      </StyledHomeHeader>
    </React.Fragment>
  );
};

const StyledHomeHeader = styled.section`
  display: flex;
  height: 660px;
  background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
    url("/bg.jpg") no-repeat;
  background-size: cover;
  margin-top: -${(props) => props.theme.brand.headerHeight};
  padding-top: ${(props) => props.theme.brand.headerHeight};
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  font-family: "BalooBold";
  font-size: 38px;
  color: ${(props) => props.theme.brand.colors.white};
  margin-top: 32px;
`;

const StyledParagraph = styled.p`
  font-family: "Montserrat-Light";
  font-size: 18px;
  color: ${(props) => props.theme.brand.colors.white};
  margin-bottom: 32px;
`;

export default Home;
