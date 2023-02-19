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

import "./button.css";

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;

  backgroundColor?: string;

  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const createButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
}: ButtonProps) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick);

  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  btn.className = ["storybook-button", `storybook-button--${size}`, mode].join(
    " "
  );

  btn.style.backgroundColor = backgroundColor;

  return btn;
};
