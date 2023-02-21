import "./header.css";
// import { createButton } from "../Button/Button";
import { component$ } from "@builder.io/qwik";

export interface HeaderProps {
  user?: { name: string };
  // onLogin: () => void;
  // onLogout: () => void;
  // onCreateAccount: () => void;
  menus?: {
    name: string;
    link: string;
    img?: string;
  }[];
  logo: string | object;
}

export const createHeader = ({
  user,
}: // onLogout,
// onLogin,
// onCreateAccount,
// logo,
// menus,
HeaderProps) => {
  const header = document.createElement("header");

  const wrapper = document.createElement("div");
  wrapper.className = "wrapper";

  const wrapperMenu = document.createElement("div");
  wrapperMenu.className = "wrapper-menu";

  wrapperMenu.insertAdjacentHTML("beforeend", `<ul></ul>`);
  const logo = `<div>
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path
          d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
          fill="#FFF" />
        <path
          d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
          fill="#555AB9" />
        <path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8" />
      </g>
    </svg>
    <h1>Acme</h1>
  </div>`;

  wrapper.insertAdjacentHTML("afterbegin", logo);
  const account = document.createElement("div");
  // if (user) {
  //   account.appendChild(
  //     createButton({ size: "small", label: "Log out", onClick: onLogout })
  //   );
  // } else {
  //   account.appendChild(
  //     createButton({ size: "small", label: "Log in", onClick: onLogin })
  //   );
  //   account.appendChild(
  //     createButton({
  //       size: "small",
  //       label: "Sign up",
  //       onClick: onCreateAccount,
  //     })
  //   );
  // }

  // menus.forEach((menu) => {
  //   wrapper.insertAdjacentHTML(
  //     "beforeend",
  //     `<li key=${menu.name} style={{ padding: "5px" }}>${menu.name}</li>`
  //   );
  // });
  //wrapper.appendChild(account);
  // header.appendChild(wrapper);
  // header.appendChild(wrapperMenu);

  const welcomeMessage = `<span class="welcome">Welcome, <b>${
    user!.name
  }</b>!</span>`;
  account.innerHTML = welcomeMessage;
  wrapper.appendChild(account);
  header.appendChild(wrapper);
  return header;
};

export const Header = component$((props: HeaderProps) => {
  return (
    <header>
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank">
          <img
            src={props.logo as string}
            alt="Logo"
            style={{ width: "100px", height: "100px" }}
          />
        </a>
      </div>
      {props.menus && (
        <ul>
          {props.menus!.map((menu) => (
            <li key={menu.name} style={{ padding: "5px" }}>
              {menu.img && <img src={menu.img} alt="Logo" />}
              <a
                href={menu.link}
                // target="_blank"
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
});
