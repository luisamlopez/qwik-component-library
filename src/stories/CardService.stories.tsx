import { Story } from "@storybook/html";
import {
  createCardService,
  CardService,
  CardServiceProps,
} from "../components/Cards/CardService/CardService";

export default {
  title: "Example/Cards/ServiceCard",
  parameter: {
    layout: "fullscreen",
  },
  argTypes: {
    name: { control: "text" },
    description: { control: "text" },
    onClick: { control: "clicked" },
  },
  component: CardService,
};

const Template: Story<CardServiceProps> = (args) => createCardService(args);

export const Basic = Template.bind({});

Basic.args = {
  description: "Bicicleta de montaña",
  name: "Servicio 1",
};
