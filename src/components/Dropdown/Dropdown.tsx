import { HTMLAttributes, component$ } from "@builder.io/qwik";
import "./dropdown.css";

export type DropdownProps = HTMLAttributes<HTMLDivElement> & {
  color?: "primary" | "secondary" | string;
  fontColor?: string;
  fullWidth?: boolean;
  label: string;
  size?: "large" | "small" | "medium";
  options: { key: string; value: any }[];
};

/**
 * Primary UI component with Qwik
 */
export const Dropdown = component$((props: DropdownProps) => {
  return (
    <div class="dropdown">
      <label
        for="dropdown"
        style={{
          color: props.fontColor,
        }}
      >
        {props.label}
      </label>
      <select
        autoFocus
        name="dropdown"
        class={["dropdown-select", `dropdown-select--${props.size}`].join(" ")}
        id={props.id}
        style={{
          width: props.fullWidth ? "100%" : "auto",
          border: "1.5px solid" + props.color,
          marginBottom: "4px",
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
