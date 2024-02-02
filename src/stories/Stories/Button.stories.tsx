/* eslint-disable storybook/story-exports */
import { StoryObj } from "storybook-framework-qwik";
import { Button } from "~/components/Button/Button";

export default {
  title: "Button/Example",
  component: Button,
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
    borderRadius: { control: "text" },
  },
  render: (args: any) => (
    <Button
      label={args.label}
      backgroundColor={args.backgroundColor}
      size={args.size}
      primary={args.primary}
      condensed={args.condensed}
      fullWidth={args.fullWidth}
      borderRadius={args.borderRadius}
    />
  ),
};

type Story = StoryObj;

export const Primary: Story = {
  args: {
    label: "Button",
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    primary: false,
  },
};

export const Large: Story = {
  args: {
    label: "Button",
    primary: true,
    size: "large",
  },
};

export const Medium: Story = {
  args: {
    label: "Button",
    primary: true,
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    label: "Button",
    primary: true,
    size: "small",
  },
};
