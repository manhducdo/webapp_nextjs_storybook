import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Icon } from "@/components/Icon/index";

export default {
  title: "Controls/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const BasicIcon = Template.bind({});
BasicIcon.args = {
  name: "Home",
};
