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
    backgroundColor: { control: "color" },
    fontColor: { control: "color" },
    name: { control: "text" },
    description: { control: "text" },
    price: { control: "text" },
    link: { control: "text" },
    image: { control: "text" },
    onClick: { control: "clicked" },
  },
  component: CardService,
};

const Template: Story<CardServiceProps> = (args) => createCardService(args);

export const Basic = Template.bind({});

Basic.args = {
  link: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  description: "Bicicleta de montaña",
  name: "Servicio 1",
};
