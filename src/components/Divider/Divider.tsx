import { component$ } from "@builder.io/qwik";
import "./divider.css";

export interface DividerProps {
  color?: string;
  width?: string;
  height?: string;
}

export const createDivider = (props: DividerProps) => {
  const divider = document.createElement("div");
  divider.className = "divider";
  const height = props.height || "2px";
  const width = props.width || "100%";
  const color = props.color || "white";
  divider.style.borderBottom = height + " solid " + color;
  divider.style.width = width;
  return divider;
};

export const Divider = component$((props: DividerProps) => {
  const height = props.height || "2px";
  const width = props.width || "100%";
  const color = props.color || "white";

  return (
    <div
      class="divider"
      style={{
        "border-bottom": height + " solid " + color,
        width: width,
      }}
    ></div>
  );
});
