import { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { PATHS } from "../const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/pro-light-svg-icons";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <StyledHomeHeader>
        <StyledSpan>US - Alliance - Kel'Thuzad</StyledSpan>
        <StyledH1>Lake Effect</StyledH1>
        <Link href={PATHS.INFO}>
          <React.Fragment>
            <StyledAnchor>
              Learn More <StyledFontAwesomeIcon icon={faArrowRight} />
            </StyledAnchor>
          </React.Fragment>
        </Link>
      </StyledHomeHeader>
      <StyledHomeNews>
        <StyledNewsTitle>
          <StyledH2>News Feed</StyledH2>
        </StyledNewsTitle>
      </StyledHomeNews>
    </React.Fragment>
  );
};

const StyledHomeHeader = styled.section`
  height: 660px;
  background: linear-gradient(rgba(0, 68, 171, 0.25), rgba(0, 68, 171, 0.25)),
    url("/shadowlands.jpg") no-repeat;
  background-size: cover;
  margin-top: -${(props) => props.theme.brand.headerHeight};
  padding-top: ${(props) => props.theme.brand.headerHeight};
  padding: 250px 120px 0 120px;
`;

const StyledSpan = styled.span`
  color: ${(props) => props.theme.brand.colors.lightBlue};
  font: 700 0.875em/1 "Montserrat", sans-serif;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 14px;
`;

const StyledH1 = styled.h1`
  color: ${(props) => props.theme.brand.colors.white};
  font: 700 4em "BalooBold", sans-serif;
  margin-bottom: 58px;
`;

const StyledAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.brand.colors.lightBlue};
  color: ${(props) => props.theme.brand.colors.white};
  height: 45px;
  width: 175px;
  font: 900 0.75em/1 "Montserrat", sans-serif;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
  }
`;

const StyledHomeNews = styled.section`
  padding: 70px 120px 50px 120px;
`;

const StyledNewsTitle = styled.div`
  border-bottom: 1px solid rgba(10, 12, 17, 0.14);
`;

const StyledH2 = styled.h2`
  font: 500 2.25em/1 "Montserrat", sans-serif;
  color: ${(props) => props.theme.brand.colors.black};
  margin-bottom: 25px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 15px;
  margin-left: 15px;
`;

export default Home;
