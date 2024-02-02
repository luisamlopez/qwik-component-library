/* eslint-disable storybook/story-exports */
import { StoryObj } from "storybook-framework-qwik";
import { Dropdown } from "~/components/Dropdown/Dropdown";

export default {
  title: "Dropdown/Example",
  component: Dropdown,
  argTypes: {
    color: { control: "color" },
    fontColor: { control: "color" },
    fullWidth: { control: "boolean" },
    label: { control: "text" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
  render: (args: any) => (
    <Dropdown
      label={args.label}
      options={args.options}
      fullWidth={args.fullWidth}
      size={args.size}
      color={args.color}
      fontColor={args.fontColor}
      id="color"
    />
  ),
};

type Story = StoryObj;

const dropdownOptions = [
  {
    key: "Rojo",
    value: "red",
  },
  {
    key: "Azul",
    value: "blue",
  },
  {
    key: "Verde",
    value: "green",
  },
];

export const Basic: Story = {
  args: {
    label: "Colores",
    options: dropdownOptions,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: "Colores",
    options: dropdownOptions,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Colores",
    options: dropdownOptions,
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Colores",
    options: dropdownOptions,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Colores",
    options: dropdownOptions,
  },
};
