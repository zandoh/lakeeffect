import React from "react";
import { StyledSubPageWrapper } from "./styles";

interface SubPageWrapperProps {
  children?: React.ReactNode;
}

const SubPageWrapper: React.FC<SubPageWrapperProps> = (props) => {
  return <StyledSubPageWrapper>{props.children}</StyledSubPageWrapper>;
};

export default SubPageWrapper;
