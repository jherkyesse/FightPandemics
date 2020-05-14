import styled from "styled-components";

import { theme } from "../../constants/theme";
const { font } = theme.typography;

const WizardStep = styled.div`
  min-height: 100%;
  display: flex;
  flex-flow: column wrap;

  p {
    font-family: ${font.family.display};
  }
  h5 {
    height: 55px;
    line-height: 64px;
  }
`;

export default WizardStep;
