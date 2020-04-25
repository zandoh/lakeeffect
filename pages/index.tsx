import { NextPage } from "next";
import Link from "next/link";
import YetiSvg from "../components/svg/Yeti";
import { PATHS } from "../const";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <StyledHomeWrapper>
      <StyledTitle>Lake Effect</StyledTitle>
      <StyledLinkGroup>
        <Link href={PATHS.INFO}>
          <StyledLink>Info</StyledLink>
        </Link>
        <Link href={PATHS.APPLY}>
          <StyledLink>Apply</StyledLink>
        </Link>
      </StyledLinkGroup>
      <YetiSvg height={250} width={250} bodyColor={"#FFF"} eyeColor={"#FFF"} />
      <StyledLinkGroup>
        <Link href={PATHS.PROGRESS}>
          <StyledLink>Progress</StyledLink>
        </Link>
        <Link href={PATHS.RECRUITMENT}>
          <StyledLink>Recruitment</StyledLink>
        </Link>
      </StyledLinkGroup>
    </StyledHomeWrapper>
  );
};

const StyledLinkGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledHomeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
`;

const StyledLink = styled.a`
  margin-right: 15px;
`;

const StyledTitle = styled.h1`
  font-family: ${(props) => props.theme.brand.fonts.baloo.bold};
`;

export default Home;
