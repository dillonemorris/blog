import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { SpeechBubble } from "./icons/SpeechBubble";
import { useIsMobile } from "../hooks/useIsMobile";

export const P = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
  color: var(--color-text);
  line-height: 1.6;
`;

export const H2 = styled.h2`
  font-size: 34px;
  padding-top: 16px;
  margin-bottom: 16px;
  color: var(--color-text);
`;

export const H3 = styled.h2`
  font-size: 26px;
  padding-top: 12px;
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

const BlockQuote = styled.blockquote`
  background-color: var(--color-secondary-background);
  color: #fff;
  border-radius: 6px;
  padding: 36px;
  display: flex;

  p {
    padding: ${({ isMobile }) => (isMobile ? "8px" : "16px 32px")};
    font-size: ${({ isMobile }) => (isMobile ? "16px" : "inherit")};
  }
`;

const QuoteIcon = styled.div`
  margin-left: -56px;
  margin-top: -12px;
  background-color: var(--color-primary);
  display: flex;
  height: fit-content;
  padding: 12px;
  border-radius: 50%;
`;

export const Quote = ({ children }) => {
  const isMobile = useIsMobile();
  return (
    <BlockQuote isMobile={isMobile}>
      <QuoteIcon>
        <SpeechBubble />
      </QuoteIcon>
      {children}
    </BlockQuote>
  );
};
