import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { screen } from "@testing-library/react";
import { expect } from "@storybook/jest";
import { Logo } from "@/components/Logo/Logo";

export default {
  title: "Content/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const BasicLogo: ComponentStoryObj<typeof Logo> = {
  play: async () => {
    await expect(screen.getByRole("banner")).toBeInTheDocument();
  },
  args: {
    children: "WebApp",
  },
};
