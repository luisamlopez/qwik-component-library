import { Story } from "@storybook/html";
import { Button, createButton, ButtonProps } from "../components/Button/Button";

//Default export includes arguments and actions for every story
export default {
  title: "Example/Button",
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    primary: { control: "boolean" },
    condensed: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
  component: Button,
};

const Template: Story<ButtonProps> = (args) => {
  return createButton(args);
};

//Stories for each state
export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  primary: true,
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  primary: true,
  label: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  primary: true,
  label: "Button",
};
