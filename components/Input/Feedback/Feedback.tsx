import { FC, ReactElement } from "react";

import styled from "@emotion/styled";

type Props = {
  isValid?: boolean;
  children?: ReactElement | string;
};

export const Feedback = styled.span<Props>`
  color: ${({ isValid, theme }) =>
    isValid ? theme.font.valid : theme.font.invalid};
`;

export const ConditionalFeedback: FC<Props> = ({ children }) =>
  children ? <Feedback>{children}</Feedback> : <>&nbsp;</>;
