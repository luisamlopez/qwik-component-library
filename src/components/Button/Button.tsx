// import { component$, HTMLAttributes, Slot } from "@builder.io/qwik";
// //import clsx from "clsx";
// export type Props = HTMLAttributes<HTMLButtonElement> & {
//   color?: "primary" | "secondary";
//   condensed?: boolean;
//   fullWidth?: boolean;
//   label: string;
//   size?: "large" | "small" | "medium";
// };

// export const Button = component$((props: Props) => {
//   return (
//     <button
//       onClick$={props.onClick$}

//       //   className={clsx(
//       //     props.fullWidth && "w-full justify-center ",
//       //     props.color === "secondary"
//       //       ? "text-white bg-gray-600"
//       //       : "dark:text-black dark:bg-white dark:hover:bg-white bg-sky-600 hover:bg-sky-500 text-white",
//       //     !props.condensed ? "text-lg" : "text-sm",
//       //     "flex items-center font-bold px-4 py-2 rounded-3xl"
//       //   )}
//     >
//       <Slot />
//     </button>
//   );
// });

import { component$ } from "@builder.io/qwik";
import "./button.css";

export interface ButtonProps {
  primary?: boolean;
  condensed?: boolean;
  fullWidth?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  style?: string;
  onClick?: any;
}

/**
 * Primary UI component for user interaction
 */
export const Button = component$((props: ButtonProps) => {
  const mode = props.primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <button
      onClick$={props.onClick}
      class={["storybook-button", `storybook-button--${props.size}`, mode].join(
        " "
      )}
      style={{
        fontSize: props.condensed ? "12px" : "16px",
        width: props.fullWidth ? "100%" : "auto",
        backgroundColor: props.backgroundColor,
        ...(props.style && JSON.parse(props.style)),
      }}
    >
      {props.label}
    </button>
  );
  // const btn = document.createElement("button");
  // btn.type = "button";
  // btn.innerText = props.label;
  // btn.addEventListener("click",props.onClick);

  // const mode = props.primary
  //   ? "storybook-button--primary"
  //   : "storybook-button--secondary";
  // btn.className = ["storybook-button", `storybook-button--${props.size}`, mode].join(
  //   " "
  // );

  // btn.style.fontSize = props.condensed ? "12px" : "16px";
  // btn.style.width = props.fullWidth ? "100%" : "auto";
  // btn.style.cssText = `background-color: ${props.backgroundColor};`;
  // if (props.style) {
  //   btn.style.cssText = props.style!;
  // }

  // return btn;
});
