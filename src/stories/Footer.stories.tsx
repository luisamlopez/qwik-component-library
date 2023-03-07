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
    contact: { control: "array" },
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

const contact = [
  {
    name: "+584249511377",
  },
  {
    name: "mail@mail.com",
    link: "mailTo:mail@mail.com",
  },
  {
    name: "Direccion",
  },
];

const Template: Story<FooterProps> = (args) => createFooter(args);

export const Example = Template.bind({});
Example.args = {
  logo: "https://web-opentech.pages.dev/svg/ot-icon.svg",
  link: "https://lccopen.tech/",
  socialMedia: socialMedia,
  contact: contact,
  firstOption: menuOptions,
  name: "Opentech",
};
