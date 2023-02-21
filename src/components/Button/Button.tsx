import "./button.css";
import { HTMLAttributes, component$ } from "@builder.io/qwik";

export interface ButtonActions {
  onClick?: () => void;
}
export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  backgroundColor?: string;
  condensed?: boolean;
  fullWidth?: boolean;
  primary?: boolean;
  label: string;
  size?: "large" | "small" | "medium";
  style?: string;
  borderRadius?: string;
  margin?: string;
} & ButtonActions;

/**
 * Primary UI component for user interaction
 */
export const createButton = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
  fullWidth,
  borderRadius,
  condensed,
  margin,
}: ButtonProps) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick!);

  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  btn.className = ["storybook-button", `storybook-button--${size}`, mode].join(
    " "
  );

  btn.style.backgroundColor = backgroundColor!;

  btn.style.borderRadius = borderRadius ? borderRadius : "2px";

  btn.style.fontSize = condensed ? "12px" : "16px";

  btn.style.width = fullWidth ? "100%" : "auto";

  btn.style.margin = margin ? margin : "0px";

  return btn;
};

export const Button = component$((props: ButtonProps) => {
  const mode = props.primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <button
      onClick$={props.onClick$}
      class={["storybook-button", `storybook-button--${props.size}`, mode].join(
        " "
      )}
      //If there is a style prop, use it, otherwise use the default

      style={{
        fontSize: props.condensed ? "12px" : "16px",
        width: props.fullWidth ? "100%" : "auto",
        backgroundColor: props.backgroundColor,
        margin: props.margin,
        borderRadius: props.borderRadius ? props.borderRadius : "2px",
      }}
    >
      {props.label}
    </button>
  );
});
