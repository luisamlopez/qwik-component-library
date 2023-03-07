/* eslint-disable @typescript-eslint/no-unused-vars */
import "./footer.css";
import { component$ } from "@builder.io/qwik";
import { Logo, createLogo } from "../Logo/Logo";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
  BsPinterest,
} from "@qwikest/icons/bootstrap";
import { Divider, createDivider } from "../Divider/Divider";

//Only accept up to 3 arrays of options and 5 items per array
//The first option is the title of the option

export interface FooterProps {
  name: string;
  logo: string | object;
  link: string;
  contact: { name: string; link?: string }[];

  //The arrays represent a hierarchy
  firstOption?: { name: string; link?: string }[];
  secondOption?: { name: string; link?: string }[];
  thirdOption?: { name: string; link?: string }[];

  //Social media
  // facebook?: string;
  // instagram?: string;
  // twitter?: string;
  // youtube?: string;
  // pinterest?: string;
  // linkedin?: string;
  // other?: string;
  socialMedia?: { name: string; link?: string }[];

  //Styles
  backgroundColor?: string;
  fontColor?: string;
}

export const createFooter = (props: FooterProps) => {
  const footer = document.createElement("footer");
  const footerInfo = document.createElement("div");
  const address = document.createElement("address");
  const optionMenu = document.createElement("div");
  const optionMenu2 = document.createElement("div");
  const optionMenu3 = document.createElement("div");

  const socialMedia = document.createElement("div");
  const grid = document.createElement("div");
  const copyright = document.createElement("div");

  const year = new Date();

  footer.className = "footer";
  footerInfo.className = "footer-info";
  optionMenu.className = "optionMenu";
  optionMenu2.className = "optionMenu";
  optionMenu3.className = "optionMenu";
  socialMedia.className = "social-media";
  copyright.className = "copyright";
  grid.className = "grid";

  footer.style.background = props.backgroundColor!;
  footer.style.color = props.fontColor!;

  footerInfo.appendChild(
    createLogo({
      logo: props.logo,
      link: props.link,
      width: 100,
    })
  );

  for (let i = 0; i < props.contact.length; i++) {
    const a = document.createElement("a");
    a.href = props.contact[i].link! || "#";
    a.innerText = props.contact[i].name;
    a.style.color = props.fontColor! || "#fff";
    a.style.textDecoration = "none";
    address.appendChild(a);
  }
  footerInfo.appendChild(address);

  if (props.firstOption) {
    const h3 = document.createElement("h3");
    h3.innerText = props.firstOption[0].name;
    optionMenu.appendChild(h3);
    optionMenu.appendChild(createDivider({ color: props.fontColor! }));
    for (let i = 0; i < props.firstOption.length; i++) {
      const a = document.createElement("a");
      a.href = props.firstOption[i].link! || "#";
      a.innerText = props.firstOption[i].name;
      a.style.color = props.fontColor! || "#fff";
      a.style.textDecoration = "none";
      optionMenu.appendChild(a);
    }

    footerInfo.appendChild(optionMenu);
  }

  if (props.secondOption) {
    const h3 = document.createElement("h3");
    h3.innerText = props.secondOption[0].name;
    optionMenu2.appendChild(h3);
    optionMenu2.appendChild(createDivider({ color: props.fontColor! }));
    for (let i = 0; i < props.secondOption.length; i++) {
      const a = document.createElement("a");
      a.href = props.secondOption[i].link! || "#";
      a.innerText = props.secondOption[i].name;
      a.style.color = props.fontColor! || "#fff";
      a.style.textDecoration = "none";
      optionMenu2.appendChild(a);
    }
    footerInfo.appendChild(optionMenu2);
  }

  if (props.thirdOption) {
    const h3 = document.createElement("h3");
    h3.innerText = props.thirdOption[0].name;
    optionMenu3.appendChild(h3);
    optionMenu3.appendChild(createDivider({ color: props.fontColor! }));
    for (let i = 0; i < props.thirdOption.length; i++) {
      const a = document.createElement("a");
      a.href = props.thirdOption[i].link! || "#";
      a.innerText = props.thirdOption[i].name;
      a.style.color = props.fontColor! || "#fff";
      a.style.textDecoration = "none";
      optionMenu3.appendChild(a);
    }
    footerInfo.appendChild(optionMenu3);
  }

  if (props.socialMedia) {
    const h3 = document.createElement("h3");
    h3.innerText = "Follow us";
    grid.appendChild(h3);
    for (let i = 0; i < props.socialMedia.length; i++) {
      const a = document.createElement("a");
      a.href = props.socialMedia[i].link! || "#";
      a.innerText = props.socialMedia[i].name;
      a.style.color = props.fontColor! || "#fff";
      a.style.textDecoration = "none";
      socialMedia.appendChild(a);
    }
    grid.appendChild(socialMedia);
  }

  copyright.innerText = `© ${year.getFullYear()} ${
    props.name
  }. All rights reserved.`;

  footerInfo.appendChild(grid);
  footer.appendChild(footerInfo);
  footer.appendChild(copyright);
  return footer;
};

export const Footer = component$((props: FooterProps) => {
  const year = new Date();
  return (
    <footer
      style={{
        background: props.backgroundColor,
        color: props.fontColor,
      }}
    >
      <div class="footer-info">
        <Logo logo={props.logo} link={props.link} width={100} />
        <address>
          {props.contact.map((item) => (
            <a href={item.link || "#"} style={{ color: props.fontColor }}>
              {item.name}
            </a>
          ))}
        </address>
        {props.firstOption && (
          <div class="optionMenu">
            <h3>{props.firstOption![0].name}</h3>
            <Divider color={props.fontColor} />
            {props.firstOption!.map((item) => (
              <a href={item.link} style={{ color: props.fontColor }}>
                {item.name}
              </a>
            ))}
          </div>
        )}
        {props.secondOption && (
          <div class="optionMenu">
            <h3>{props.secondOption![0].name}</h3>
            <Divider color={props.fontColor} />
            {props.secondOption!.map((item) => (
              <a href={item.link} style={{ color: props.fontColor }}>
                {item.name}
              </a>
            ))}
          </div>
        )}
        {props.thirdOption && (
          <div class="optionMenu">
            <h3>{props.firstOption![0].name}</h3>
            <Divider color={props.fontColor} />
            {props.thirdOption!.map((item) => (
              <a href={item.link} style={{ color: props.fontColor }}>
                {item.name}
              </a>
            ))}
          </div>
        )}
        {props.socialMedia && (
          <div class="grid">
            <h3>Follow us</h3>
            <div class="social-media">
              {props.socialMedia.map((item) => (
                <a href={item.link} style={{ color: props.fontColor }}>
                  {/* Search the icon according to the name 
                  {item.name.toLowerCase() === "facebook" && <BsFacebook />}
                  {item.name.toLowerCase() === "instagram" && <BsInstagram />}
                  {item.name.toLowerCase() === "linkedin" && <BsLinkedin />}
                  {item.name.toLowerCase() === "twitter" && <BsTwitter />}
                  {item.name.toLowerCase() === "youtube" && <BsYoutube />}
                  {item.name.toLowerCase() === "pinterest" && <BsPinterest />} */}

                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <div class="copyright">
        <p>
          © {year.getFullYear()} {props.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
});
