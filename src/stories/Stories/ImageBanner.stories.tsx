/* eslint-disable storybook/story-exports */
import { StoryObj } from "storybook-framework-qwik";
import { ImageBanner } from "~/components/ImageBanner/ImageBanner";
import { $ } from "@builder.io/qwik";
const onClickButton = $(() => {
  alert("click");
});
export default {
  title: "ImageBanner/Example",
  component: ImageBanner,
  argTypes: {
    backgroundImage: { control: "text" },
    title: { control: "text" },
    message: { control: "text" },
    onClick: { action: "clicked" },
  },
  render: (args: any) => (
    <ImageBanner
      title={args.title}
      message={args.message}
      backgroundImage={args.backgroundImage}
      onClick={onClickButton}
    />
  ),
};

type Story = StoryObj;

export const Basic: Story = {
  args: {
    title: "Titulo",
    message: "Mensaje",
    backgroundImage:
      "https://goodlifebotanicals.com/wp-content/uploads/2019/03/gl-blue-white-branch.png",
  },
};
