import styled from "styled-components";

export const StyledImg = styled.img`
  :hover {
    cursor: pointer;
  }
`;

export const StyledHeader = styled.header`
  height: ${(props) => props.theme.brand.headerHeight};
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0px;
`;

export const StyledList = styled.ul`
  display: flex;

  > * {
    margin-right: 40px;
  }
`;

export const StyledListItem = styled.li`
  color: ${(props) => props.theme.brand.colors.white};
  font: 400 0.875em/18px Montserrat, sans-serif;
  transition: color 0.3s ease-in-out;

  :hover {
    color: ${(props) => props.theme.brand.colors.lightBlue};
    cursor: pointer;
  }
`;
