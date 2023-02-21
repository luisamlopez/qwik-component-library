import { component$ } from "@builder.io/qwik";

export interface LogoProps {
  logo: string;
  link: string;
}

export const Logo = component$((props: LogoProps) => {
  return (
    <logo style={{ "text-align": "center" }}>
      <a href={props.link}>
        <img alt="Logo" width={400} height={147} src={props.logo} />
      </a>
    </logo>
  );
});
