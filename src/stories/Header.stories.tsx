import { Story } from "@storybook/html";
import { createHeader, Header, HeaderProps } from "../components/Header/Header";

export default {
  title: "Example/Header",
  parameters: {
    layout: "fullscreen",
  },

  argTypes: {
    logo: { control: "text" },
    link: { control: "text" },
    menus: { control: "array" },
  },
  component: Header,
};

const Template: Story<HeaderProps> = (args) => createHeader(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
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
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
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
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};

// import { Meta } from "@storybook/html";
// import Header, { HeaderProps } from "../components/Header/Header";

// export default {
//   title: "Header",
// } as Meta;

// const Template = (args: HeaderProps) => <Header menus={args.menus} />;

// export const Demo: any = Template.bind({
//   menus: [],
// });

// Demo.args = {
//   menus: [
//     {
//       name: "Docs",
//       link: "https://qwik.builder.io/docs/components/overview/",
//     },
//     {
//       name: "Examples",
//       link: "https://qwik.builder.io/examples/introduction/hello-world/",
//     },
//     {
//       name: "Tutorials",
//       link: "https://qwik.builder.io/tutorial/welcome/overview/",
//     },
//   ],
// };
