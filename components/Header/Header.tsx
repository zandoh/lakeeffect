import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { PATHS } from "../../const";

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <Link href={"/"}>
          <StyledImg src="/logo.webp" alt="yeti lake effect" height="75px" />
        </Link>
        <StyledList>
          <Link href={PATHS.INFO}>
            <StyledListItem>About</StyledListItem>
          </Link>
          <Link href={PATHS.APPLY}>
            <StyledListItem>Apply</StyledListItem>
          </Link>
          <Link href={PATHS.PROGRESS}>
            <StyledListItem>Progress</StyledListItem>
          </Link>
          <Link href={PATHS.RECRUITMENT}>
            <StyledListItem>Recruitment</StyledListItem>
          </Link>
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};

const StyledImg = styled.img`
  :hover {
    cursor: pointer;
  }
`;

const StyledHeader = styled.header`
  width: 100vw;
  height: ${(props) => props.theme.brand.headerHeight};
  z-index: 10;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px;
`;

const StyledList = styled.ul`
  display: flex;

  > * {
    margin-right: 40px;
  }
`;

const StyledListItem = styled.li`
  color: ${(props) => props.theme.brand.colors.white};
  font: 400 0.875em/18px Montserrat, sans-serif;
  transition: color 0.3s ease-in-out;

  :hover {
    color: ${(props) => props.theme.brand.colors.lightBlue};
    cursor: pointer;
  }
`;

export default Header;
