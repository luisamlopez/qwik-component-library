import { component$ } from "@builder.io/qwik";

export interface LogoProps {
  logo: any;
  link: string;
  width: number;
}

export const Logo = component$((props: LogoProps) => {
  return (
    <logo style={{ "text-align": "center" }}>
      <a href={props.link}>
        <img alt="Logo" width={props.width} src={props.logo} />
      </a>
    </logo>
  );
});
