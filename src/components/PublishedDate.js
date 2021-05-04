import React from "react";
import styled from "styled-components";
import { Calendar } from "../components/icons/Calendar";
import Spacer from "./Spacer";

const Date = styled.p`
  font-size: 14px;
  color: #6b7280;
`;

const DateIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const PublishedDate = ({ date }) => {
  return (
    <DateIconWrapper>
      <Calendar />
      <Spacer size={6} />
      <Date>{date}</Date>
    </DateIconWrapper>
  );
};
