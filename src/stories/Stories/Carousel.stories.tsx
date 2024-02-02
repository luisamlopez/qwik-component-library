import { StoryObj } from "storybook-framework-qwik";
import { Carousel } from "../Carousel";

export default {
  title: "Carousel/Example",
  component: Carousel,
  argTypes: {
    slides: { control: "object" },
  },
  render: (args: any) => <Carousel slides={args.slides} />,
  visualViewport: {
    width: 1920,
    height: 1080,
  },
};

type Story = StoryObj;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    slides: [
      {
        name: "Delmoliton",
        image: "/assets/img/example1.webp",
        phrase: "Small text",
        short_description:
          "Lorem ipsum dolor sshort_descriptionsectetur adipisicing elit.",
        link: "https://www.google.com",
      },
      {
        name: "Assmolition",
        image: "/assets/img/example2.webp",
        phrase: "Really small text",
        short_description:
          "Labore ducimus quos quam est eaque aliquid magnam! Ut",
        link: "https://www.google.com",
      },
      {
        name: "Milmolition",
        image: "/assets/img/example3.webp",
        phrase: "Not so small text",
        short_description:
          "similique eum optio odit eius voluptatem error placeat cupiditate inventore facere nemo voluptas",
        link: "https://www.google.com",
      },
      {
        name: "Delmoliton",
        image: "/assets/img/example1.webp",
        phrase: "Small text",
        short_description:
          "Lorem ipsum dolor sshort_descriptionsectetur adipisicing elit.",
        link: "https://www.google.com",
      },
      {
        name: "Assmvvvvolition",
        image: "/assets/img/example2.webp",
        phrase: "Really small text",
        short_description:
          "Labore ducimus quos quam est eaque aliquid magnam! Ut",
        link: "https://www.google.com",
      },
      {
        name: "Milmolition",
        image: "/assets/img/example3.webp",
        phrase: "Not so small text",
        short_description:
          "similique eum optio odit eius voluptatem error placeat cupiditate inventore facere nemo voluptas",
        link: "https://www.google.com",
      },
    ],
  },
};
