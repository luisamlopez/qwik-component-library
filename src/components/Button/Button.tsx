import "./button.css";
import { component$ } from "@builder.io/qwik";

export interface ButtonProps {
  backgroundColor?: string;
  condensed?: boolean;
  fullWidth?: boolean;
  primary?: boolean;
  label: string;
  size?: "large" | "small" | "medium";
  fontColor?: string;
  borderRadius?: string;
  margin?: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction on Storybook
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
  fontColor,
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

  if (mode === "storybook-button--secondary" && backgroundColor) {
    btn.style.border = "1px solid" + backgroundColor!;
  } else {
    btn.style.backgroundColor = backgroundColor!;
  }

  btn.style.borderRadius = borderRadius ? borderRadius : "2px";

  btn.style.fontSize = condensed ? "12px" : "16px";

  btn.style.color = primary ? "#fff" : fontColor!;

  btn.style.width = fullWidth ? "100%" : "auto";

  btn.style.margin = margin ? margin : "4px";

  return btn;
};

/**
 * Primary UI component with Qwik
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
      //If there is a style prop, use it, otherwise use the default
      style={{
        fontSize: props.condensed ? "12px" : "16px",
        width: props.fullWidth ? "100%" : "auto",
        //if it's primary, use the backgroundColor prop, otherwise use the mode
        backgroundColor:
          props.backgroundColor && props.primary ? props.backgroundColor : mode,
        margin: props.margin,
        color: props.primary ? "#fff" : props.fontColor,
        borderRadius: props.borderRadius ? props.borderRadius : "2px",
        border: props.primary ? "none" : "1px solid" + props.backgroundColor,
      }}
    >
      {props.label}
    </button>
  );
});
