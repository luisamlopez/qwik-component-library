import { HTMLAttributes, component$ } from "@builder.io/qwik";
import "./dropdown.css";

export interface DropdownActions {
  onClick?: () => void;
}
export type DropdownProps = HTMLAttributes<HTMLDivElement> & {
  color?: "primary" | "secondary" | string;
  // condensed?: boolean;
  fullWidth?: boolean;
  label: string;
  size?: "large" | "small" | "medium";
  style?: string;
  options: { key: string; value: any }[];
} & DropdownActions;

export const Dropdown = component$((props: DropdownProps) => {
  const color = props.color
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <div class="dropdown">
      <label for="dropdown">{props.label}</label>
      <select
        name="dropdown"
        class={[
          "dropdown-select",
          `dropdown-select--${props.size}`,
          color,
        ].join(" ")}
        style={{
          width: props.fullWidth ? "100%" : "auto",
          backgroundColor: props.color,
        }}
      >
        (
        {props.options.map((option) => (
          <option value={option.value}>{option.key}</option>
        ))}
        )
      </select>
    </div>
  );
});
