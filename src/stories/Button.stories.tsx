import { Story } from "@storybook/html";
import { Button, createButton, ButtonProps } from "../components/Button/Button";

//Default export includes arguments and actions for every story
export default {
  title: "Example/Button",
  argTypes: {
    color: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    condensed: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
  component: Button,
};

const Template: Story<ButtonProps> = (args) => {
  return createButton(args);
};
//Main story
export const Example = Template.bind({});

Example.args = {
  label: "Button",
};

//Other stories
export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  label: "Button",
};
