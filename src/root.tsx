import { Button } from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { ImageBanner } from "./components/ImageBanner/ImageBanner";
import { $ } from "@builder.io/qwik";
import { Alert } from "./components/Alert/Alert";

export default () => {
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

  const onClickButton = $(() => {
    alert("click");
  });

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Blank App</title>
      </head>
      <body
        style={{
          margin: 0,
        }}
      >
        <Header
          logo="https://web-opentech.pages.dev/svg/ot-icon.svg"
          link="https://lccopen.tech/"
          menus={menuOptions}
        />
        <div style={{ height: 5 }}> . </div>
        <Header
          logo="https://web-opentech.pages.dev/svg/ot-icon.svg"
          link="https://lccopen.tech/"
          menus={menuOptions}
          user={{ name: "Juan" }}
          fontColor="#2bff28"
          backgroundColor="#afafaf"
        />

        <Button label="primary" primary condensed onClick$={onClickButton} />
        <Button
          label="secondary-large"
          condensed
          onClick$={onClickButton}
          backgroundColor="#ab123b"
        />
        <Button
          label="Custom"
          backgroundColor="#ab123b"
          size="medium"
          onClick$={onClickButton}
          margin="5px"
          primary
        />
        <Dropdown
          options={dropdownOptions}
          label="Dropdown de colores"
          fullWidth
          size="small"
        />
        <ImageBanner
          title="Hello World"
          message="lorem impsum dolor sit amet lorem impsum dolor sit amet lorem impsum dolor sit amet  "
          onClick={onClickButton}
          backgroundImage="https://goodlifebotanicals.com/wp-content/uploads/2019/03/gl-blue-white-branch.png"
        />
        <Alert message="Ha ocurrido un error, intente de nuevo" type="error" />
        <Alert message="¡Se ha registrado exitosamente!" type="success" />
        <Alert message="Ya puede continuar navegando." type="info" />
        <Alert
          message="La contraseña debe tener al menos una mayúscula, un caracter especial y un número."
          type="warning"
        />
      </body>
    </>
  );
};
