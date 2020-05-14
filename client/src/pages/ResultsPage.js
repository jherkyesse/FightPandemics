import React from "react";
import styled from "styled-components";
import { theme } from "../constants/theme";
import { AnswerButton, StepTitle } from "../components/StepWizard";
import {
  GenericMessage,
  ColoredMessage,
  SectionTitle,
  GenericResponse,
} from "./CovidScreening/GenericMessage";
const { colors } = theme;

const GenericMessageList = [
  [
    "Maintain Social Distance",
    "Small but important steps can slow the spread of COVID‑19. They should avoid groups of people and keep 6 ft. or 1.5 m apart from anyone who’s not part of the household. They should especially avoid people showing symptoms.",
  ],
  [
    "Take Precautions to Protect Others",
    "They may need to wear a mask to help protect themselve and those around them.",
  ],
  [
    "Ask About Their Medications",
    "If they’re currently taking prescription medication, they should contact their doctor’s office about getting a 30-day supply.",
  ],
  [
    "Rest and Take Care",
    "They should eat well, drink fluids, and get plenty of rest.",
  ],
  [
    "Monitor Symptoms",
    "Watch for COVID-19 symptoms such as cough, fever, and difficulty breathing. If their symptoms get worse, contact their doctor’s office.",
  ],
];

const SubtitleStyle = styled.h5`
  margin: 15px 0;
`;

export const ResultsPage = (props) => {
  return (
    <>
      <SubtitleStyle>Results</SubtitleStyle>
      <StepTitle>No testing needed at this time</StepTitle>
      <ColoredMessage color={colors.royalBlue}>
        As of now, their answers suggest they do not need to get tested. If
        anything changes, take the questionnaire again.
      </ColoredMessage>
      <SectionTitle>Their next steps</SectionTitle>
      <GenericMessage msg={GenericMessageList || props.msg} />
      <SectionTitle>Responses</SectionTitle>
      <GenericResponse response={props.val} />
      <AnswerButton color={colors.royalBlue}>Done</AnswerButton>
    </>
  );
};
