import { component$ } from "@builder.io/qwik";

export interface LogoProps {
  logo: any;
  link: string;
  width: number;
  borderRadius?: string;
}

/**
 * Primary UI component with Qwik
 */
export const Logo = component$((props: LogoProps) => {
  const borderRadius = props.borderRadius ? props.borderRadius : 0;
  return (
    <logo style={{ "text-align": "center" }}>
      <a href={props.link}>
        <img
          alt="Logo"
          width={props.width}
          src={props.logo}
          style={
            "border-radius:" + borderRadius + " " + borderRadius + " 0px 0px"
          }
        />
      </a>
    </logo>
  );
});
