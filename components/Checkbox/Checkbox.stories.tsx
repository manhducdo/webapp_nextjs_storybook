import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Checkbox } from "@/components/Checkbox";
import { expect } from "@storybook/jest";
import { userEvent, screen } from "@storybook/testing-library";

export default {
  title: "Controls/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const BasicCheckbox: ComponentStoryObj<typeof Checkbox> = {
  play: async ({ args }) => {
    await userEvent.click(screen.getByText("✔"));
    await expect(args.onChange).toHaveBeenCalled();
  },
};
