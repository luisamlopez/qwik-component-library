/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "./components/Button/Button";
import { Header } from "./components/Header/Header";
import { Dropdown } from "./components/Dropdown/Dropdown";
import { ImageBanner } from "./components/ImageBanner/ImageBanner";
import { $ } from "@builder.io/qwik";
import { Footer } from "./components/Footer/Footer";
import { CardProduct } from "./components/Cards/CardProduct/CardProduct";
import { CardService } from "./components/Cards/CardService/CardService";
import { Carousel } from "./components/Carousel/Carousel";
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

  const slides = [
    {
      name: "Delmoliton",
      image:
        "https://wordpress-873948-3215205.cloudwaysapps.com/wp-content/uploads/2023/03/concept-power-strength-healthy-lifestyle-sport-powerful-attractive-muscular-man-gym-1.webp",
      phrase: "Small text",
      short_description:
        "Lorem ipsum dolor sshort_descriptionsectetur adipisicing elit.",
      link: "https://qwik.builder.io/docs/components/overview/",
    },
    // {
    //   name: "Assmolition",
    //   image:
    //     "https://img.freepik.com/foto-gratis/flores-color-rosa-rosa_24837-301.jpg?w=826&t=st=1679967672~exp=1679968272~hmac=a68008407701633b1a3817b7311c60dd3ba459a18942eaab13297ba43b0f5bb5",
    //   phrase: "Really small text",
    //   short_description:
    //     "Labore ducimus quos quam est eaque aliquid magnam! Ut",link: "https://qwik.builder.io/docs/components/overview/",
    // },
    // {
    //   name: "Milmolition",
    //   image:
    //     "https://img.freepik.com/foto-gratis/flores-color-rosa-rosa_24837-301.jpg?w=826&t=st=1679967672~exp=1679968272~hmac=a68008407701633b1a3817b7311c60dd3ba459a18942eaab13297ba43b0f5bb5",
    //   phrase: "Not so small text",
    //   short_description:
    //     "similique eum optio odit eius voluptatem error placeat cupiditate inventore facere nemo voluptas",link: "https://qwik.builder.io/docs/components/overview/",
    // },
    // {
    //   name: "Delmoliton",
    //   image:
    //     "https://img.freepik.com/foto-gratis/flores-color-rosa-rosa_24837-301.jpg?w=826&t=st=1679967672~exp=1679968272~hmac=a68008407701633b1a3817b7311c60dd3ba459a18942eaab13297ba43b0f5bb5",
    //   phrase: "Small text",
    //   short_description:
    //     "Lorem ipsum dolor sshort_descriptionsectetur adipisicing elit.",link: "https://qwik.builder.io/docs/components/overview/",
    // },
    // {
    //   name: "Assmolition",
    //   image:
    //     "https://img.freepik.com/foto-gratis/flores-color-rosa-rosa_24837-301.jpg?w=826&t=st=1679967672~exp=1679968272~hmac=a68008407701633b1a3817b7311c60dd3ba459a18942eaab13297ba43b0f5bb5",
    //   phrase: "Really small text",
    //   short_description:
    //     "Labore ducimus quos quam est eaque aliquid magnam! Ut",link: "https://qwik.builder.io/docs/components/overview/",
    // },
    // {
    //   name: "Milmolition",
    //   image:
    //     "https://img.freepik.com/foto-gratis/flores-color-rosa-rosa_24837-301.jpg?w=826&t=st=1679967672~exp=1679968272~hmac=a68008407701633b1a3817b7311c60dd3ba459a18942eaab13297ba43b0f5bb5",
    //   phrase: "Not so small text",
    //   short_description:
    //     "similique eum optio odit eius voluptatem error placeat cupiditate inventore facere nemo voluptas",link: "https://qwik.builder.io/docs/components/overview/",
    // },
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

        <Carousel slides={slides} />

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
