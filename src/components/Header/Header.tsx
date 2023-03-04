import { Button, createButton } from "../Button/Button";
import { createLogo, Logo } from "../Logo/Logo";
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

//Arrow function to menu responsive
export const onMenuClick = () => {
  const navbar = document.getElementById("wrapper-menu");
  const responsive_class_name = "responsive";
  navbar!.classList.toggle(responsive_class_name);
};

export const createHeader = ({ user, logo, link, menus }: HeaderProps) => {
  const header = document.createElement("header");
  const a = document.createElement("a");
  const wrapper = document.createElement("div");
  const account = document.createElement("div");
  const welcome = document.createElement("span");
  const span = document.createElement("span");

  header.className = "header";
  a.className = "menu-icon";
  a.id = "menu-icon";
  wrapper.className = "wrapper";
  wrapper.id = "wrapper-menu";
  account.className = "account";
  welcome.className = "welcome";

  header.appendChild(
    createLogo({
      logo: logo,
      link: link,
      width: 100,
    })
  );

  a.onclick = onMenuClick;

  const menu = `<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          class="w-6 h-6"
          width="24px"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>`;

  a.innerHTML = menu;

  for (let i = 0; i < menus.length; i++) {
    const a = document.createElement("a");
    a.href = menus[i].link;
    a.innerHTML = menus[i].name;
    wrapper.appendChild(a);
  }

  if (!user) {
    span.appendChild(
      createButton({
        size: "small",
        label: "Log in",
        primary: true,
      })
    );
    const p = document.createElement("p");
    p.innerHTML = "o";

    span.appendChild(p);

    span.appendChild(
      createButton({
        size: "small",
        label: "Sign up",
        backgroundColor: "#123bac",
      })
    );
    account.append(span);
  } else {
    welcome.innerHTML = `Hola,  <b> ${user.name}</b>!`;
  }

  header.appendChild(wrapper);
  account.appendChild(welcome);
  header.appendChild(account);

  if (window.innerWidth < 700) {
    header.appendChild(a);
  }

  return header;
};

export const Header = component$((props: HeaderProps) => {
  return (
    <header
      style={{
        "background-color": props.backgroundColor,
      }}
    >
      <Logo logo={props.logo} link={props.link} width={100} />

      <a
        id="menu-icon"
        class="menu-icon"
        onClick$={() => {
          onMenuClick();
        }}
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

      <div class="wrapper" id="wrapper-menu">
        {props.menus.map((menu) => (
          <a href={menu.link}>{menu.name}</a>
        ))}
      </div>

      <div class="account">
        {props.user ? (
          <span class="welcome">
            Hola, <b>{props.user.name}</b>!
          </span>
        ) : (
          <span>
            <Button size="small" label="Log in" primary />
            <p>o</p>
            <Button size="small" label="Sign up" backgroundColor="#123bac" />
          </span>
        )}
      </div>
    </header>
  );
});
