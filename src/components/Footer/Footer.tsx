/* eslint-disable @typescript-eslint/no-unused-vars */
import "./footer.css";
import { component$ } from "@builder.io/qwik";
import { Logo } from "../Logo/Logo";
import { Divider } from "../Divider/Divider";

//Only accept up to 3 arrays of options
//The first option is the title of the option
export interface FooterProps {
  name: string;
  logo: string | object;
  link: string;

  address?: string;
  phone?: string;
  email?: string;

  //The arrays represent a hierarchy
  firstOption?: { name: string; link?: string }[];
  secondOption?: { name: string; link?: string }[];
  thirdOption?: { name: string; link?: string }[];

  socialMedia?: { name: string; link?: string }[];

  //Styles
  backgroundColor?: string;
  fontColor?: string;
}

/**
 * Primary UI component with Qwik
 */
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
          {props.phone && <a href={props.phone || "#"}> {props.phone}</a>}
          {props.email && <a href={`mailto--${props.email}`}> {props.email}</a>}
          {props.address && <p>{props.address}</p>}
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
