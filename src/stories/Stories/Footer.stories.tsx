/* eslint-disable storybook/story-exports */
import { StoryObj } from "storybook-framework-qwik";
import { Footer } from "~/components/Footer/Footer";

export default {
  title: "Footer/Example",
  parameters: {
    layout: "fullscreen",
  },
  component: Footer,
  argTypes: {
    name: { control: "text" },
    logo: { control: "text" },
    link: { control: "text" },
    backgroundColor: { control: "color" },
    fontColor: { control: "color" },
    phone: { control: "text" },
    email: { control: "text" },
    address: { control: "text" },
    socialMedia: { control: "array" },
    firstOption: { control: "array" },
    secondOption: { control: "array" },
    thirdOption: { control: "array" },
  },
  render: (args: any) => (
    <Footer
      logo={args.logo}
      link={args.link}
      name={args.name}
      phone={args.phone}
      email={args.email}
      address={args.address}
      firstOption={args.firstOption}
      secondOption={args.secondOption}
      thirdOption={args.thirdOption}
      socialMedia={args.socialMedia}
      backgroundColor={args.backgroundColor}
      fontColor={args.fontColor}
    />
  ),
};

const menuOptions = [
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
];

const socialMedia = [
  { name: "Facebook", link: "https://www.facebook.com/BuilderIO/" },
  { name: "Twitter", link: "https://twitter.com/builder_io" },
  { name: "Instagram", link: "https://www.instagram.com/builder_io/" },
  {
    name: "Youtube",
    link: "https://www.youtube.com/channel/UC0ZQZ1X0XZ1X0XZ1X0XZ1X0",
  },
  { name: "Pinterest", link: "https://www.pinterest.com/builderio/" },
  { name: "Linkedin", link: "https://www.linkedin.com/company/builder-io/" },
];

type Story = StoryObj;

export const All: Story = {
  args: {
    logo: "https://web-opentech.pages.dev/svg/ot-icon.svg",
    link: "https://lccopen.tech/",
    socialMedia: socialMedia,
    phone: "+584249511377",
    email: "mail@mail.com",
    address: "Direccion",
    firstOption: menuOptions,
    secondOption: menuOptions,
    thirdOption: menuOptions,
    name: "Opentech",
  },
};

export const OneMenu: Story = {
  args: {
    logo: "https://web-opentech.pages.dev/svg/ot-icon.svg",
    link: "https://lccopen.tech/",
    phone: "+584249511377",
    email: "mail@mail.com",
    address: "Direccion",
    firstOption: menuOptions,
    name: "Opentech",
    socialMedia: socialMedia,
  },
};

export const TwoMenus: Story = {
  args: {
    logo: "https://web-opentech.pages.dev/svg/ot-icon.svg",
    link: "https://lccopen.tech/",
    phone: "+584249511377",
    email: "mail@mail.com",
    address: "Direccion",
    firstOption: menuOptions,
    secondOption: menuOptions,
    name: "Opentech",
    socialMedia: socialMedia,
  },
};

export const ThreeMenus: Story = {
  args: {
    logo: "https://web-opentech.pages.dev/svg/ot-icon.svg",
    link: "https://lccopen.tech/",
    phone: "+584249511377",
    email: "mail@mail.com",
    address: "Direccion",
    firstOption: menuOptions,
    secondOption: menuOptions,
    thirdOption: menuOptions,
    name: "Opentech",
    socialMedia: socialMedia,
  },
};

export const NoMenu: Story = {
  args: {
    logo: "https://web-opentech.pages.dev/svg/ot-icon.svg",
    link: "https://lccopen.tech/",
    phone: "+584249511377",
    email: "mail@mail.com",
    address: "Direccion",
    name: "Opentech",
  },
};
