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
