import { Story, Meta } from "@storybook/html";
import { createHeader, HeaderProps } from "../components/Header/Header";

export default {
  title: "Example/Header",
  parameters: {
    layout: "fullscreen",
  },

  argTypes: {
    logo: { control: "text" },
    onLogin: { action: "onLogin" },
    onLogout: { action: "onLogout" },
    onCreateAccount: { action: "onCreateAccount" },
    menus: { control: "array" },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => createHeader(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: { name: "John Doe" },
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
