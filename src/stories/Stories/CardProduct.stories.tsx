/* eslint-disable storybook/story-exports */
import { StoryObj } from "storybook-framework-qwik";
import { CardProduct } from "~/components/Cards/CardProduct/CardProduct";
import { $ } from "@builder.io/qwik";

export default {
  title: "CardProduct/Example",
  component: CardProduct,
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
  render: (args: any) => (
    <CardProduct
      image={args.image}
      name={args.name}
      price={args.price}
      description={args.description}
      link={args.link}
      onClick={$(() => {
        alert("click");
      })}
      fontColor={args.fontColor}
      backgroundColor={args.backgroundColor}
    />
  ),
};

type Story = StoryObj;

export const Basic: Story = {
  args: {
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Bicicleta",
    link: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Bicicleta de montaña",
    price: 110,
  },
};

export const Custom: Story = {
  args: {
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    name: "Bicicleta",
    link: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Bicicleta de montaña",
    price: 110,
    backgroundColor: "#123abc",
  },
};
