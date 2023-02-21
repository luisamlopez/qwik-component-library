import "./button.css";
import { HTMLAttributes, component$ } from "@builder.io/qwik";

export interface ButtonActions {
  onClick?: () => void;
}
export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  color?: "primary" | "secondary" | string;
  condensed?: boolean;
  fullWidth?: boolean;
  label: string;
  size?: "large" | "small" | "medium";
  style?: string;
} & ButtonActions;

/**
 * Primary UI component for user interaction
 */
export const createButton = ({
  size = "medium",
  color = "primary",
  label,
  onClick,
  fullWidth,
  condensed,
}: ButtonProps) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick!);

  const mode = color
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  btn.className = ["storybook-button", `storybook-button--${size}`, mode].join(
    " "
  );

  btn.style.backgroundColor = color;

  btn.style.fontSize = condensed ? "12px" : "16px";

  btn.style.width = fullWidth ? "100%" : "auto";

  return btn;
};

export const Button = component$((props: ButtonProps) => {
  const color = props.color
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <button
      onClick$={props.onClick$}
      class={[
        "storybook-button",
        `storybook-button--${props.size}`,
        color,
      ].join(" ")}
      //If there is a style prop, use it, otherwise use the default

      style={{
        fontSize: props.condensed ? "12px" : "16px",
        width: props.fullWidth ? "100%" : "auto",
        backgroundColor: props.color,
        margin: "10px",
      }}
    >
      {props.label}
    </button>
  );
});
