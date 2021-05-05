import React from "react";
import styled from "styled-components";
import Spacer from "./Spacer";
import avatar from "../images/avatar.png";

const Wrapper = styled.footer`
  flex-shrink: 0;
  padding: 30px 0px 40px;
  border-top: 1px solid #f3f4f6;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
`;

const Icons = styled.div`
  display: flex;
`;

const Tagline = styled.p`
  font-size: 16px;
  color: #111827;
`;

const Avatar = styled.img`
  width: 60px;
  border-radius: 100%;
`;

export const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <Avatar src={avatar} />
        <Spacer size={8} />
        <div>
          <Tagline>Words written by Dillon Morris.</Tagline>
          <Spacer size={4} />
          <Icons>
            <a target="blank" href="https://github.com/dilmodev">
              <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.008 18.625a.417.417 0 00.534.4 9.375 9.375 0 10-5.2 0 .417.417 0 00.533-.4v-1.958A2.342 2.342 0 015 15.233a5.058 5.058 0 00-1.133-1.9c2.375.575 2.416 2.117 4.033 1.392a3.333 3.333 0 01.525-1.517c-1.833-.208-3.767-.5-3.767-3.666a3.2 3.2 0 01.834-2.217 2.967 2.967 0 01.083-2.183s.692-.225 2.275.833a7.825 7.825 0 014.167 0c1.575-1.067 2.266-.833 2.266-.833a2.967 2.967 0 01.084 2.183 3.192 3.192 0 01.833 2.217c0 3.175-1.933 3.458-3.775 3.658a3.192 3.192 0 01.567 1.942z"
                  fill="none"
                  stroke="#2563EB"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.249995"
                />
              </svg>
            </a>
            <Spacer size={16} />
            <a href="https://twitter.com/dilmodev">
              <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.317 5.592l-1.75-.75.916-2-2.133.708a3.725 3.725 0 00-2.5-1A3.758 3.758 0 0010.1 6.3v.833c-2.95.609-5.525-1-7.917-3.75q-.625 3.334 1.25 5L.692 7.967A3.792 3.792 0 004.233 11.3l-2.291.833c.833 1.667 2.35 1.925 4.375 2.084a9.6 9.6 0 01-5.625 1.666c10.633 4.725 16.875-2.216 16.875-8.333v-.692z"
                  fill="none"
                  stroke="#2563EB"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.249995"
                />
              </svg>
            </a>
          </Icons>
        </div>
      </Inner>
    </Wrapper>
  );
};
