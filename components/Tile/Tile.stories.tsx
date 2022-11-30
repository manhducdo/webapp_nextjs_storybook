import { ComponentStoryObj, ComponentMeta } from "@storybook/react";

import { Tile } from "@/components/Tile/Tile";
import { expect } from "@storybook/jest";
import { screen } from "@storybook/testing-library";

export default {
  title: "Content/Tile",
  component: Tile,
} as ComponentMeta<typeof Tile>;

export const BasicTile: ComponentStoryObj<typeof Tile> = {
  play: async ({ args }) => {
    await expect(screen.getByRole("heading")).toBeInTheDocument();
  },
  args: {
    header: "Header",
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, modi nesciunt aspernatur repellat quam ipsa sunt officiis suscipit ex, quaerat nemo dolor neque architecto sequi vel consectetur atque voluptates. Repellendus!`,
  },
};
