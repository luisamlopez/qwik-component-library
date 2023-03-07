import "footer.css";
import { component$ } from "@builder.io/qwik";
import { HeaderProps } from "../Header/Header";
import { Logo } from "../Logo/Logo";

//Only accept up to 3 arrays of options and 5 items per array
//The first option is the title of the option

export interface FooterProps {
  name: string;
  logo: string | object;
  link: string;
  contact: { name: string; link?: string }[];
  //The arrays represent a hierarchy
  firstOption?: [
    { name: string; link: string },
    { name: string; link: string },
    { name?: string; link?: string },
    { name?: string; link?: string },
    { name?: string; link?: string }
  ];
  secondOption?: [
    { name: string; link: string },
    { name: string; link: string },
    { name?: string; link?: string },
    { name?: string; link?: string },
    { name?: string; link?: string }
  ];
  thirdOption?: [
    { name: string; link: string },
    { name: string; link: string },
    { name?: string; link?: string },
    { name?: string; link?: string },
    { name?: string; link?: string }
  ];
  //Social media
  facebook?: string;
  instagram?: string;
  twitter?: string;
  youtube?: string;
  pinterest?: string;
  linkedin?: string;
  other?: string;
  socialMedia?: { name: string; link?: string }[];
  //Styles
  backgroundColor?: string;
  fontColor?: string;
}

export const Footer = component$((props: HeaderProps) => {
  return <footer></footer>;
});
