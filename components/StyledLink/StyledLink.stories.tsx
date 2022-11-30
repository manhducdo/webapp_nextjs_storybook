import { expect } from "@storybook/jest";
import { screen } from "@testing-library/react";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";

import { StyledLink } from "@/components/StyledLink";

export default {
  title: "Content/StyledLink",
  component: StyledLink,
} as ComponentMeta<typeof StyledLink>;

export const BasicStyledLink: ComponentStoryObj<typeof StyledLink> = {
  play: async () => {
    await expect(screen.getByRole("link")).toBeInTheDocument();
  },
  args: {
    children: "Hands-On React. Build advanced React Js Frontend with expert",
    href: "#",
  },
};
