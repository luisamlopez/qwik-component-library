import { HTMLAttributes, component$ } from "@builder.io/qwik";
import "./banner.css";

export type BannerProps = HTMLAttributes<HTMLDivElement> & {
  message: string;
  type: "success" | "error" | "warning" | "info";
};

export const Banner = component$((props: BannerProps) => {
  const type = props.type ? `banner--${props.type}` : "banner--success";
  return (
    <div class={["banner", type].join(" ")}>
      <div class="banner__message">{props.message}</div>
      <div class="banner__close">X</div>
    </div>
  );
});
