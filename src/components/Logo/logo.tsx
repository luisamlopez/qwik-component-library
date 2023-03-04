import { component$ } from "@builder.io/qwik";

export interface LogoProps {
  logo: any;
  link: string;
  width: number;
}

export const createLogo = (props: LogoProps) => {
  const logo = document.createElement("logo");
  const a = document.createElement("a");
  const img = document.createElement("img");

  logo.style.textAlign = "center";
  a.href = props.link;
  img.alt = "Logo";
  img.width = props.width;
  img.src = props.logo;
  a.appendChild(img);
  logo.appendChild(a);
  return logo;
};

export const Logo = component$((props: LogoProps) => {
  return (
    <logo style={{ "text-align": "center" }}>
      <a href={props.link}>
        <img alt="Logo" width={props.width} src={props.logo} />
      </a>
    </logo>
  );
});
