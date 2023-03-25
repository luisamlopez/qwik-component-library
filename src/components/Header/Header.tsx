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

//Arrow function to make menu responsive
export const onMenuClick = () => {
  const navbar = document.getElementById("wrapper-menu");
  const responsive_class_name = "responsive";
  navbar!.classList.toggle(responsive_class_name);
};

/**
 * Primary UI component for user interaction on Storybook
 */
export const createHeader = (props: HeaderProps) => {
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
      logo: props.logo,
      link: props.link,
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

  for (let i = 0; i < props.menus.length; i++) {
    const a = document.createElement("a");
    a.style.color = props.fontColor!;
    a.href = props.menus[i].link;
    a.innerHTML = props.menus[i].name;
    wrapper.appendChild(a);
  }

  if (!props.user) {
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
        backgroundColor: "#fff",
        fontColor: "#fff",
      })
    );
    account.append(span);
  } else {
    welcome.innerHTML = `Hola,&nbsp; <b> ${props.user.name}</b>!`;
  }

  //Styles
  header.style.backgroundColor = props.backgroundColor!;
  wrapper.style.backgroundColor = props.backgroundColor!;

  welcome.style.color = props.fontColor!;
  wrapper.style.color = props.fontColor!;
  a.style.color = props.fontColor!;

  header.appendChild(wrapper);
  account.appendChild(welcome);
  header.appendChild(account);

  if (window.innerWidth < 800) {
    header.appendChild(a);
  }

  return header;
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
      <Logo logo={props.logo} link={props.link} width={100} />

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
