/* eslint-disable storybook/story-exports */
import { StoryObj } from "storybook-framework-qwik";
import { Header } from "~/components/Header/Header";

export default {
  title: "Header/Example",
  parameters: {
    layout: "fullscreen",
  },
  component: Header,
  argTypes: {
    logo: { control: "text" },
    link: { control: "text" },
    menus: { control: "array" },
    backgroundColor: { control: "color" },
    fontColor: { control: "color" },
    user: { control: "object" },
  },
  render: (args: any) => (
    <Header
      logo={args.logo}
      link={args.link}
      menus={args.menus}
      backgroundColor={args.backgroundColor}
      fontColor={args.fontColor}
      user={args.user}
    />
  ),
};

type Story = StoryObj;

export const LoggedIn: Story = {
  args: {
    user: { name: "John Doe" },
    logo: "https://web-opentech.pages.dev/svg/ot-icon.svg",
    link: "https://lccopen.tech/",
    menus: [
      {
        name: "Docs",
        link: "https://qwik.builder.io/docs/components/overview/",
      },
      {
        name: "Examples",
        link: "https://qwik.builder.io/examples/introduction/hello-world/",
      },
      {
        name: "Tutorials",
        link: "https://qwik.builder.io/tutorial/welcome/overview/",
      },
    ],
  },
};

export const LoggedOut: Story = {
  args: {
    logo: "https://web-opentech.pages.dev/svg/ot-icon.svg",
    link: "https://lccopen.tech/",
    menus: [
      {
        name: "Docs",
        link: "https://qwik.builder.io/docs/components/overview/",
      },
      {
        name: "Examples",
        link: "https://qwik.builder.io/examples/introduction/hello-world/",
      },
      {
        name: "Tutorials",
        link: "https://qwik.builder.io/tutorial/welcome/overview/",
      },
    ],
  },
};
