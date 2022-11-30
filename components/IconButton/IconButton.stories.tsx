import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";

import { IconButton } from "@/components/IconButton";

export default {
  title: "Controls/IconButton",
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

export const BasicIconButton: ComponentStoryObj<typeof IconButton> = {
  play: async ({ args }) => {
    await userEvent.click(screen.getByRole("button"));
    // @todo: https://github.com/storybookjs/storybook/issues/16941
    // await expect(args.onClick).toHaveBeenCalled();
  },
  args: {
    name: "Home",
  },
};
