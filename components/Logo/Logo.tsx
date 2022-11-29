import styled from "@emotion/styled";
import { css } from "@emotion/react";

type Props = {
  size?: number;
};

export const Logo = styled.header<Props>`
  font-family: Monoton;
  font-size: ${({ size = 3 }) => `${size}rem`};
  ${({ theme, size = 3 }) => {
    return css`
      color: ${theme.font.logo};
      text-shadow: 0 0 0.3rem ${theme.font.logoShadow1},
        0 0 0.15rem ${theme.font.logoShadow2},
        0 0 0.2rem ${theme.font.logoShadow2},
        0 0 0.25rem ${theme.font.logoShadow2},
        0 0 0.3rem ${theme.font.logoShadow2};
    `;
  }}
`;
