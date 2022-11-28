import React, {
  FC,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from "react";
import styled from "@emotion/styled";
import { boxShadow, borderRadius } from "@/components/styles";
import { AppTheme } from "@/styles/themes";

type Props = {
  header: (string | ReactElement<any, string | JSXElementConstructor<any>>) &
    ReactNode;
  children?: (string | ReactElement<any, string | JSXElementConstructor<any>>) &
    ReactNode;
  theme?: AppTheme | undefined;
};

const Section = styled.section<Props>`
  ${borderRadius}
  padding: 1vmin 4vmin 4vmin;
  background-color: ${({ theme }) => theme?.background};
  color: ${({ theme }) => theme?.font.regular};
  ${({ theme }) =>
    boxShadow(theme?.components.shadow1, theme?.components.shadow2)}
`;

export const Tile: FC<Props> = ({ header, children, ...rest }) => {
  return (
    <Section {...rest}>
      <h2>{header}</h2>
      {children}
    </Section>
  );
};
