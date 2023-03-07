import "./footer.css";
import { component$ } from "@builder.io/qwik";
import { Logo } from "../Logo/Logo";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
  BsPinterest,
} from "@qwikest/icons/bootstrap";

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

export const Footer = component$((props: FooterProps) => {
  const year = new Date();
  return (
    <footer>
      <div class="footer-info">
        <Logo logo={props.logo} link={props.link} width={100} />
        <address>
          {props.contact.map((item) => (
            <a href={item.link}> {item.name} </a>
          ))}
        </address>
        {props.firstOption && (
          <div class="fistOption">
            <h3>{props.firstOption![0].name}</h3>

            {props.firstOption!.map((item) => (
              <a href={item.link}> {item.name} </a>
            ))}
          </div>
        )}
        {props.secondOption && (
          <div class="fistOption">
            <h3>{props.secondOption![0].name}</h3>

            {props.secondOption!.map((item) => (
              <a href={item.link}> {item.name} </a>
            ))}
          </div>
        )}
        {props.thirdOption && (
          <div class="fistOption">
            <h3>{props.firstOption![0].name}</h3>

            {props.thirdOption!.map((item) => (
              <a href={item.link}> {item.name} </a>
            ))}
          </div>
        )}
        {props.socialMedia && (
          <div class="grid">
            <h3>Follow us</h3>
            <div class="social-media">
              {props.socialMedia.map((item) => (
                <a href={item.link}>
                  {/* Search the icon according to the name  */}
                  {item.name.toLowerCase() === "facebook" && <BsFacebook />}
                  {item.name.toLowerCase() === "instagram" && <BsInstagram />}
                  {item.name.toLowerCase() === "linkedin" && <BsLinkedin />}
                  {item.name.toLowerCase() === "twitter" && <BsTwitter />}
                  {item.name.toLowerCase() === "youtube" && <BsYoutube />}
                  {item.name.toLowerCase() === "pinterest" && <BsPinterest />}
                  {/* Show only name
                  {item.name} */}
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
