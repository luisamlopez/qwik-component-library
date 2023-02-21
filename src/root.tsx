import { Avatar } from "./components/Avatar/Avatar";
import { Button } from "./components/Button/Button";
import { Counter } from "./components/Counter/counter";
import { Logo } from "./components/Logo/Logo";
import { Header } from "./components/Header/Header";
import { Dropdown } from "./components/Dropdown/Dropdown";

export default () => {
  // function click() {
  //   console.log("click");
  // }

  const menuOptions = [
    {
      name: "Docs",
      link: "https://qwik.builder.io/docs/components/overview/",
      img: "https://raw.githubusercontent.com/BuilderIO/qwik/main/.github/assets/qwik-logo.svg",
    },
    {
      name: "Examples",
      link: "https://qwik.builder.io/examples/introduction/hello-world/",
      img: "https://raw.githubusercontent.com/BuilderIO/qwik/main/.github/assets/qwik-logo.svg",
    },
    {
      name: "Tutorials",
      link: "https://qwik.builder.io/tutorial/welcome/overview/",
      img: "https://raw.githubusercontent.com/BuilderIO/qwik/main/.github/assets/qwik-logo.svg",
    },
  ];

  const dropdownOptions = [
    {
      key: "Rojo",
      value: "red",
    },
    {
      key: "Azul",
      value: "blue",
    },
    {
      key: "Verde",
      value: "green",
    },
  ];

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body>
        <Header logo="https://raw.githubusercontent.com/BuilderIO/qwik/main/.github/assets/qwik-logo.svg" />
        <Header
          logo="https://raw.githubusercontent.com/BuilderIO/qwik/main/.github/assets/qwik-logo.svg"
          menus={menuOptions}
        />
        <Logo
          logo="https://raw.githubusercontent.com/BuilderIO/qwik/main/.github/assets/qwik-logo.svg"
          link="https://qwik.builder.io"
        />
        <Counter />
        <Avatar size={100} url="https://placekitten.com/200/300" alt="Kitten" />
        <Button
          label="primary"
          primary
          condensed
          onClick$={() => console.log("click")}
        />
        <Button
          label="secondary-large"
          fullWidth
          size="large"
          condensed
          onClick$={() => console.log("click")}
        />

        <Button
          label="Custom"
          backgroundColor="#ab123b"
          size="medium"
          onClick$={() => console.log("click")}
          margin="5px"
        />

        <Dropdown
          options={dropdownOptions}
          label="Dropdown de colores"
          fullWidth
          size="large"
        />
      </body>
    </>
  );
};
