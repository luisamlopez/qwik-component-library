import { Button } from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { ImageBanner } from "./components/ImageBanner/ImageBanner";
import { $ } from "@builder.io/qwik";
import { Footer } from "./components/Footer/Footer";
import { CardProduct } from "./components/Cards/CardProduct/CardProduct";
import { CardService } from "./components/Cards/CardService/CardService";
// import { Grid } from "./components/Grid/Grid";

export default () => {
  const menuOptions = [
    {
      name: "Docs",
      link: "https://qwik.builder.io/docs/components/overview/",
    },
    {
      name: "Examples",
      link: "https://qwik.builder.io/examples/introduction/hello-world/",
    },
    {
      name: "Tutorials",
      link: "https://qwik.builder.io/tutorial/welcome/overview/",
    },
  ];

  const socialMedia = [
    { name: "Facebook", link: "https://www.facebook.com/BuilderIO/" },
    { name: "Twitter", link: "https://twitter.com/builder_io" },
    { name: "Instagram", link: "https://www.instagram.com/builder_io/" },
    {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UC0ZQZ1X0XZ1X0XZ1X0XZ1X0",
    },
    { name: "Pinterest", link: "https://www.pinterest.com/builderio/" },
    { name: "Linkedin", link: "https://www.linkedin.com/company/builder-io/" },
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

  const onClick = $(() => {
    const dropdown = document.getElementById("color") as HTMLSelectElement;
    const selection = dropdown.selectedIndex;
    const option = dropdown.options[selection];
    alert("Value: " + option.value + " Text: " + option.text);
  });

  const onClickCard = $(() => {
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

        <Button
          label="primary"
          primary
          condensed
          onClick={$(() => {
            alert("click");
          })}
        />
        <Button
          label="Controlar dropdown"
          condensed
          onClick={onClick}
          backgroundColor="#ab123b"
        />
        <Button
          label="Custom"
          backgroundColor="#ab163b"
          size="medium"
          onClick={onClickButton}
          margin="5px"
          primary
        />
        <Dropdown
          options={dropdownOptions}
          label="Dropdown de colores"
          fullWidth
          size="small"
          color="#ab163b"
          id="color"
        />
        <ImageBanner
          title="Hello World"
          message="lorem impsum dolor sit amet lorem impsum dolor sit amet lorem impsum dolor sit amet  "
          onClick={onClickButton}
          backgroundImage="https://goodlifebotanicals.com/wp-content/uploads/2019/03/gl-blue-white-branch.png"
        />
        <CardService
          name="Servicio 1"
          description="Lorem impsum dolor sit amet lorem impsum dolor sit amet lorem impsum dolor sit amet  "
          onClick={onClickCard}
        />

        <h1>Grid</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 240px);",
            gridGap: "20px",
            padding: "0",
            margin: "10px",
          }}
        >
          <CardProduct
            image="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            description="Bicicleta de montaña"
            name="Bicicleta"
            link="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            price={100}
            onClick={$(() => {
              alert("click");
            })}
          />

          <CardProduct
            image="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            description="Bicicleta de montaña"
            name="Bicicleta 2"
            link="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            price={200}
            onClick={onClickCard}
            backgroundColor="#afafaf"
            fontColor="#2bff28"
          />
          <CardProduct
            image="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            description="Bicicleta de montaña"
            name="Bicicleta"
            link="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            price={100}
            onClick={onClickCard}
          />

          <CardProduct
            image="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            description="Bicicleta de montaña"
            name="Bicicleta 2"
            link="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            price={200}
            onClick={onClickCard}
            backgroundColor="#afafaf"
            fontColor="#2bff28"
          />
          <CardProduct
            image="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            description="Bicicleta de montaña"
            name="Bicicleta"
            link="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            price={100}
            onClick={onClickCard}
          />
        </div>

        <h1>Grid servicios</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, 260px);",
            gridGap: "20px",
            padding: "0",
            margin: "10px",
          }}
        >
          <CardService
            name="Servicio 1"
            description="Lorem impsum dolor sit amet lorem impsum dolor sit amet lorem impsum dolor sit amet  "
            onClick={onClickCard}
          />
          <CardService
            name="Servicio 1"
            description="Lorem impsum dolor sit amet lorem impsum dolor sit amet lorem impsum dolor sit amet  "
            onClick={onClickCard}
          />
          <CardService
            name="Servicio 1"
            description="Lorem impsum dolor sit amet lorem impsum dolor sit amet lorem impsum dolor sit amet  "
            onClick={onClickCard}
          />
          <CardService
            name="Servicio 1"
            description="Lorem impsum dolor sit amet lorem impsum dolor sit amet lorem impsum dolor sit amet  "
            onClick={onClickCard}
          />
          <CardService
            name="Servicio 1"
            description="Lorem impsum dolor sit amet lorem impsum dolor sit amet lorem impsum dolor sit amet  "
            onClick={onClickCard}
          />
        </div>
        <Footer
          logo="https://web-opentech.pages.dev/svg/ot-icon.svg"
          link="https://lccopen.tech/"
          name="Opentech"
          phone="+584249511377"
          email="mail@mail.com"
          address="Dirección"
          firstOption={menuOptions}
          secondOption={menuOptions}
          thirdOption={menuOptions}
          socialMedia={socialMedia}
        />
      </body>
    </>
  );
};
