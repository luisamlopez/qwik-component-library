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

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template: Story<ButtonProps> = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  //return `<div>${label}</div>`;
  return createButton(args);
};

export const Example = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Example.args = {
  label: "Button",
};

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
