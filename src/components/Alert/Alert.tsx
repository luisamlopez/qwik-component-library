import { HTMLAttributes, component$ } from "@builder.io/qwik";
import "./alert.css";

export type AlertProps = HTMLAttributes<HTMLDivElement> & {
  message: string;
  type: "success" | "error" | "warning" | "info";
};

export const onClickExit = () => {
  const type = document.getElementById("alert");
  type!.style.display = "none";
};

export const Alert = component$((props: AlertProps) => {
  const type = props.type ? `alert--${props.type}` : "alert--success";
  return (
    <div class={["alert", type].join(" ")} id={["alert", type].join(" ")}>
      <div class="alert__message">{props.message}</div>
      <div
        class="alert__close"
        onClick$={() => {
          onClickExit();
        }}
      >
        X
      </div>
    </div>
  );
});
