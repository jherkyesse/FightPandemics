import styled from "styled-components";
import { theme } from "../../constants/theme";
import React from "react";

const { colors, typography } = theme;

const AnswerStyles = styled.div`
  display: block;
  background-color: #fff;
  color: #000;
  font-family: ${typography.font.family.display}, sans-serif;
  font-size: ${typography.size.large};
  border: 0.1rem solid ${colors.royalBlue};
  border-radius: 0.8rem;
  box-sizing: border-box;
  cursor: pointer;
  padding: 25px 0 25px 52px;
  margin: 15px 0px;
  &:hover {
    background-color: ${colors.royalBlue};
    color: #fff;
  }

  strong {
    display: block;
  }
`;

const ColorAnswerStyles = styled.div`
  display: block;
  background-color: ${colors.royalBlue};
  color: #fff;
  font-family: ${typography.font.family.display}, sans-serif;
  font-size: ${typography.size.large};
  font-weight: 500;
  border: 0.1rem solid ${colors.royalBlue};
  border-radius: 10em;
  box-sizing: border-box;
  cursor: pointer;
  padding: 15px;
  margin: 15px 0px;
  text-align: center;
  &:hover {
    background-color: ${colors.royalBlue};
    color: #fff;
  }

  strong {
    display: block;
  }
`;

const AnswerButton = ({ children, onSelect, color }) => {
  if (color)
    return <ColorAnswerStyles onClick={onSelect}>{children}</ColorAnswerStyles>;
  return <AnswerStyles onClick={onSelect}>{children}</AnswerStyles>;
};

export default AnswerButton;
