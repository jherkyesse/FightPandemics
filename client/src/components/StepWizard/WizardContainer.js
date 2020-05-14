import styled from "styled-components";

import { mq } from "../../constants/theme";

const { tablet, desktop } = mq;

const WizardContainer = styled.div`
  position: fixed;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  margin: 0;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  padding: 29px 15px 24px;
  background: #fff;
  overflow: auto;
  z-index: 1;
  & > div {
    width: 100%;
  }
  & button.close {
    position: relative;
    display: flex;
    justify-content: flex-end;
    width: 100%;
    &::before {
      content: '';
      position: absolute;
      width: 2px;
      height: 24px;
      transform: rotate(-45deg);
      background: #939393;
    }
    &::after {
      content: '';
      position: absolute;
      width: 2px;
      height: 24px;
      transform: rotate(45deg);
      background: #939393;
    }
  }

  @media screen and (min-width: ${tablet.narrow.minWidth}) {
    position: relative;
    margin: 0 auto;
    height: auto;
    max-width: 375px;
    background: transparent;
  }

  /* @media screen and (min-width: ${desktop.small.minWidth}) {
    max-width: 650px;
  } */
`;

export default WizardContainer;
