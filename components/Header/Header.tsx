import React from "react";
import Link from "next/link";
import { PATHS } from "../../const";
import {
  StyledHeader,
  StyledNav,
  StyledImg,
  StyledList,
  StyledListItem,
} from "./styles";

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
          {/* <Link href={PATHS.APPLY}>
            <StyledListItem>Apply</StyledListItem>
          </Link>
          <Link href={PATHS.PROGRESS}>
            <StyledListItem>Progress</StyledListItem>
          </Link>
          <Link href={PATHS.RECRUITMENT}>
            <StyledListItem>Recruitment</StyledListItem>
          </Link> */}
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
