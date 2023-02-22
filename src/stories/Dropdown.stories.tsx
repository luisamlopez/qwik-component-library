import { Story } from "@storybook/html";
import {
  createDropdown,
  Dropdown,
  DropdownProps,
} from "../components/Dropdown/Dropdown";

export default {
  title: "Example/Dropdown",
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
  component: Dropdown,
};
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
const Template: Story<DropdownProps> = (args) => {
  return createDropdown(args);
};

export const Normal = Template.bind({});

Normal.args = {
  label: "Colores",
  options: dropdownOptions,
};

export const FullWidth = Template.bind({});

FullWidth.args = {
  fullWidth: true,
  label: "Colores",
  options: dropdownOptions,
};

export const Large = Template.bind({});

Large.args = {
  size: "large",
  label: "Colores",
  options: dropdownOptions,
};

export const Medium = Template.bind({});

Medium.args = {
  size: "medium",
  label: "Colores",
  options: dropdownOptions,
};

export const Small = Template.bind({});

Small.args = {
  size: "small",
  label: "Colores",
  options: dropdownOptions,
};
