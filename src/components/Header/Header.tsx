import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import "./header.css";
import { component$ } from "@builder.io/qwik";

export interface HeaderProps {
  user?: { name: string };
  menus: {
    name: string;
    link: string;
  }[];
  logo: string | object;
  link: string;
  backgroundColor?: string;
  fontColor?: string;
}

//Arrow function to make menu responsive
export const onMenuClick = () => {
  const navbar = document.getElementById("wrapper-menu");
  const responsive_class_name = "responsive";
  navbar!.classList.toggle(responsive_class_name);
};

/**
 * Primary UI component with Qwik
 */
export const Header = component$((props: HeaderProps) => {
  return (
    <header
      style={{
        "background-color": props.backgroundColor,
      }}
    >
      <div class="logo">
        <Logo logo={props.logo} link={props.link} width={100} />
      </div>

      <a
        id="menu-icon"
        class="menu-icon"
        onClick$={() => {
          onMenuClick();
        }}
        style={{ color: props.fontColor ? props.fontColor : "#fff" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          class="w-6 h-6"
          width={24}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </a>

      <div
        class="wrapper"
        id="wrapper-menu"
        style={{ "background-color": props.backgroundColor }}
      >
        {props.menus.map((menu) => (
          <a href={menu.link} style={{ color: props.fontColor! }}>
            {menu.name}
          </a>
        ))}
      </div>

      <div class="account">
        {props.user ? (
          <span
            class="welcome"
            style={{ color: props.fontColor ? "#fff" : props.fontColor! }}
          >
            Hola,&nbsp; <b>{props.user.name}</b>!
          </span>
        ) : (
          <span>
            <Button size="small" label="Log in" primary />
            <p>o</p>
            <Button
              size="small"
              label="Sign up"
              backgroundColor="#fff"
              fontColor="#fff"
            />
          </span>
        )}
      </div>
    </header>
  );
});
