// import { Story, Meta } from '@storybook/html';
// import { createHeader, HeaderProps } from './Header';

// export default {
//   title: 'Example/Header',
//   parameters: {
//     // More on Story layout: https://storybook.js.org/docs/html/configure/story-layout
//     layout: 'fullscreen',
//   },
//   // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
//   argTypes: {
//     onLogin: { action: 'onLogin' },
//     onLogout: { action: 'onLogout' },
//     onCreateAccount: { action: 'onCreateAccount' },
//   },
// } as Meta;

// const Template: Story<HeaderProps> = (args) => createHeader(args);

// export const LoggedIn = Template.bind({});
// LoggedIn.args = {
//   user: {},
// };

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {};

import { Meta } from "@storybook/html";
import Header, { HeaderProps } from "./Header";

export default {
  title: "Header",
} as Meta;

const Template = (args: HeaderProps) => <Header menus={args.menus} />;

export const Demo: any = Template.bind({
  menus: [],
});

Demo.args = {
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
