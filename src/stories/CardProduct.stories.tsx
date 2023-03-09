import { Story } from "@storybook/html";
import {
  createCardProduct,
  CardProduct,
  CardProductProps,
} from "../components/Cards/CardProduct/CardProduct";

export default {
  title: "Example/Cards/ProductCard",
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
  component: CardProduct,
};

const Template: Story<CardProductProps> = (args) => createCardProduct(args);

export const Basic = Template.bind({});

Basic.args = {
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: "Bicicleta",
  link: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  description: "Bicicleta de montaña",
  price: 110,
};

export const Custom = Template.bind({});

Custom.args = {
  image:
    "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  name: "Bicicleta",
  link: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  description: "Bicicleta de montaña",
  price: 110,
  backgroundColor: "#123abc",
};
