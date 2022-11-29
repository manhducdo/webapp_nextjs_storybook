import { Icons } from "@/components/Icon/Icons";
import styled from "@emotion/styled";
import { FC } from "react";
import { useTheme } from "@emotion/react";
import { AppTheme } from "@/styles/themes";

export type AvailableIcons = keyof typeof Icons;

type WrapperProps = {
  size: string;
  theme: AppTheme;
};

export type Props = {
  name: AvailableIcons;
  size: string;
} & React.SVGProps<SVGSVGElement>;

const Wrapper = styled.div<WrapperProps>`
  color: ${({ theme }) => theme.font.regular};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;

export const Icon: FC<Props> = ({ name, size = "2rem" }) => {
  const Icon = Icons[name];
  const sizes = { width: size, height: size };
  const theme = useTheme();

  return (
    <Wrapper theme={theme} size={size}>
      <Icon {...sizes} />
    </Wrapper>
  );
};
