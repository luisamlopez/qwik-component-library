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
    borderRadius: { control: "text" },
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Para usar este componente, debes importarlo Button desde: ../components/Button/Button El componente Button se utiliza para mostrar un elemento de botón clickeable dentro de una interfaz de usuario. Puede ser personalizado mediante una variedad de props para adaptarse a las necesidades de la aplicación.",
      },
    },
  },
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
