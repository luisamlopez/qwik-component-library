import { component$ } from "@builder.io/qwik";

export interface AvatarProps {
  size?: string;
  url: string;
  alt: string;

  //Styles
  borderRadius?: string;
}

export const createAvatar = (props: AvatarProps) => {
  const avatar = document.createElement("img");

  avatar.className = "avatar";
  if (props.size) {
    avatar.style.width = props.size;
  } else {
    avatar.style.width = "50px";
  }

  avatar.alt = props.alt;
  avatar.src = props.url;
  return avatar;
};

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
