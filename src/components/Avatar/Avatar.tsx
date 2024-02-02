import { component$ } from "@builder.io/qwik";

export interface AvatarProps {
  size?: string;
  url: string;
  alt: string;

  //Styles
  borderRadius?: string;
}

/**
 * Primary UI component with Qwik
 */
export const Avatar = component$((props: AvatarProps) => {
  const borderRadius = props.borderRadius || "4px";
  return (
    <img
      width={props.size}
      alt={props.alt}
      src={props.url}
      class="avatar"
      style={"border-radius:" + borderRadius}
    />
  );
});
