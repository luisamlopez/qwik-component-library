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
 * Primary UI component for user interaction on Storybook
 */

export const createDropdown = (props: DropdownProps) => {
  //const form = document.createElement("form");
  const div = document.createElement("div");
  const label = document.createElement("label");
  const select = document.createElement("select");
  div.className = "dropdown-select";

  label.innerHTML = props.label;
  {
    props.options.map((option) => {
      const op = document.createElement("option");
      op.append(option.key);
      select.appendChild(op);
    });
  }

  div.className = ["dropdown-select", `dropdown-select--${props.size}`].join(
    " "
  );

  select.className = ["dropdown-select", `dropdown-select--${props.size}`].join(
    " "
  );
  label.style.color = props.fontColor!;
  select.style.backgroundColor = props.color!;
  select.style.width = props.fullWidth ? "100%" : "auto";

  div.style.width = props.fullWidth ? "100%" : "auto";

  div.style.marginBottom = "4px";

  div.appendChild(label);
  div.appendChild(select);
  return div;
};

/**
 * Primary UI component with Qwik
 */
export const Dropdown = component$((props: DropdownProps) => {
  const color = props.color
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <div class="dropdown">
      <label for="dropdown">{props.label}</label>
      <select
        autoFocus
        name="dropdown"
        class={[
          "dropdown-select",
          `dropdown-select--${props.size}`,
          color,
        ].join(" ")}
        id={props.id}
        style={{
          width: props.fullWidth ? "100%" : "auto",
          backgroundColor: props.color,
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
