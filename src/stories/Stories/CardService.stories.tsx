/* eslint-disable storybook/story-exports */
import { StoryObj } from "storybook-framework-qwik";
import { CardService } from "~/components/Cards/CardService/CardService";
import { $ } from "@builder.io/qwik";

export default {
  title: "CardService/Example",
  component: CardService,
  argTypes: {
    name: { control: "text" },
    description: { control: "text" },
    onClick: { control: "clicked" },
  },
  render: (args: any) => (
    <CardService
      name={args.name}
      description={args.description}
      onClick={$(() => {
        alert("click");
      })}
    />
  ),
};

type Story = StoryObj;

export const Basic: Story = {
  args: {
    description: "Bicicleta de montaña",
    name: "Servicio 1",
  },
};
