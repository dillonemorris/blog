import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { SpeechBubble } from "./icons/SpeechBubble";
import { useIsMobile } from "../hooks/useIsMobile";
import Spacer from "./Spacer";

export const P = styled.p`
  margin-bottom: 12px;
  font-size: 20px;
  color: var(--color-text);
  line-height: 1.6;
`;

export const H2 = styled.h2`
  font-size: 34px;
  padding-top: 30px;
  margin-bottom: 12px;
  color: var(--color-text);
`;

export const H3 = styled.h2`
  font-size: 26px;
  padding-top: 20px;
  margin-bottom: 8px;
  color: var(--color-text);
`;

export const A = styled(Link)`
  color: var(--color-primary);
  font-size: 20px;
  font-weight: bold;
  transition: box-shadow 200ms ease;
  box-shadow: 0px 0px 0px var(--color-primary);

  &:hover {
    box-shadow: 0px 2px 0px var(--color-primary);
  }
`;

export const Ul = styled.ul`
  color: var(--color-text);
`;

const BlockQuote = styled.blockquote`
  background-color: var(--color-secondary-background);
  color: #fff;
  border-radius: 6px;
  padding: 20px 32px 20px 24px;
  display: flex;
  flex-direction: column;

  p {
    font-size: ${({ isMobile }) => (isMobile ? "16px" : "inherit")};
  }
`;

const QuoteIcon = styled.div`
  //margin-top: -20px;
`;

export const Quote = ({ children }) => {
  const isMobile = useIsMobile();
  return (
    <BlockQuote isMobile={isMobile}>
      <QuoteIcon>
        <SpeechBubble />
      </QuoteIcon>
      <Spacer size={12} />
      {children}
    </BlockQuote>
  );
};
