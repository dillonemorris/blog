import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import { Checkmark } from "../components/icons/Checkmark";
import { Skull } from "../components/icons/Skull";

const Button = styled.button`
  padding: 8px 24px;
  border-radius: 6px;
`;

const FailButton = styled(Button)`
  background: #d1fae5;
  color: #059669;
`;

const PassButton = styled(Button)`
  background: #d1fae5;
  color: #064e3b;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 24px 0px;
`;

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Inner = styled.div`
  padding: 48px 0px;
  align-items: center;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-tertiary-background);
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

const PassDescription = styled(Description)`
  color: var(--color-success);
`;

const FailDescription = styled(Description)`
  color: var(--color-danger);
`;

const Bold = styled.span`
  font-weight: bold;
`;

export const ButtonContrastExample = ({ disableDescription = false }) => {
  return (
    <Container>
      <Outer>
        <Inner>
          <PassButton>Submit</PassButton>
        </Inner>
        <Spacer size={6} />
        {!disableDescription ? (
          <PassDescription>
            <Checkmark />
            <Spacer size={6} />
            <p>
              Passes with a contrast ratio of <Bold>8.57</Bold>
            </p>
          </PassDescription>
        ) : null}
        <Spacer size={6} />
      </Outer>
      <Spacer size={12} />
      <Outer>
        <Inner>
          <FailButton>Submit</FailButton>
        </Inner>
        <Spacer size={6} />
        {!disableDescription ? (
          <FailDescription>
            <Skull />
            <Spacer size={6} />
            <p>
              Fails with a contrast ratio of <Bold>3.32</Bold>
            </p>
          </FailDescription>
        ) : null}
      </Outer>
      <Spacer size={8} />
    </Container>
  );
};
