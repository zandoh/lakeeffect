import styled from "styled-components";
import Link from "next/link";

export const StyledHeader = styled.header`
  width: 100vw;
`;

export const StyledNav = styled.nav`
  padding: 25px;
`;

export const StyledLink = styled(Link)`
  color: purple;
  :hover {
    cursor: pointer;
  }
`;
