import { Link } from "gatsby";
import styled from "styled-components";

export const P = styled.p`
  margin-bottom: 32px;
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
