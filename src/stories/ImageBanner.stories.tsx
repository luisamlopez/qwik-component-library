import { Story } from "@storybook/html";
import {
  createImageBanner,
  ImageBanner,
  ImageBannerProps,
} from "../components/ImageBanner/ImageBanner";

export default {
  title: "Example/ImageBanner",
  argTypes: {
    backgroundImage: { control: "text" },
    title: { control: "text" },
    message: { control: "text" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    onClick: { action: "clicked" },
  },
  component: ImageBanner,
};

const Template: Story<ImageBannerProps> = (args) => {
  return createImageBanner(args);
};

export const Normal = Template.bind({});
Normal.args = {
  title: "Titulo",
  message: "Mensaje",
  backgroundImage:
    "https://goodlifebotanicals.com/wp-content/uploads/2019/03/gl-blue-white-branch.png",
};
