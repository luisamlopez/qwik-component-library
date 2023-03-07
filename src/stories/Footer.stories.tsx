import { Story } from "@storybook/html";
import { createFooter, Footer, FooterProps } from "../components/Footer/Footer";

export default {
  title: "Example/Footer",
  parameters: {
    layout: "fullscreen",
  },

  argTypes: {
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
  component: Footer,
};

const menuOptions = [
  {
    name: "Docs",
    link: "https://qwik.builder.io/docs/components/overview/",
    img: "https://raw.githubusercontent.com/BuilderIO/qwik/main/.github/assets/qwik-logo.svg",
  },
  {
    name: "Examples",
    link: "https://qwik.builder.io/examples/introduction/hello-world/",
    img: "https://raw.githubusercontent.com/BuilderIO/qwik/main/.github/assets/qwik-logo.svg",
  },
  {
    name: "Tutorials",
    link: "https://qwik.builder.io/tutorial/welcome/overview/",
    img: "https://raw.githubusercontent.com/BuilderIO/qwik/main/.github/assets/qwik-logo.svg",
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

const Template: Story<FooterProps> = (args) => createFooter(args);

export const Example = Template.bind({});
Example.args = {
  logo: "https://web-opentech.pages.dev/svg/ot-icon.svg",
  link: "https://lccopen.tech/",
  socialMedia: socialMedia,
  phone: "+584249511377",
  email: "mail@mail.com",
  address: "Direccion",
  firstOption: menuOptions,
  name: "Opentech",
};
