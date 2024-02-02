import "./cardService.css";
import { component$ } from "@builder.io/qwik";

export interface CardServiceProps {
  name: string;
  description: string;
  onClick: () => void;
}

//Function to get the initials of the name just with the first 2 words
export const getInitials = function (name: string) {
  const parts = name.split(" ");
  let initials = "";
  let count = 0;
  for (let i = 0; i < parts.length; i++) {
    if (parts[i].length > 0 && parts[i] !== "") {
      initials += parts[i][0];
      count++;
    }
    if (count === 2) {
      break;
    }
    //If the name has more than 2 words, and want every initial, just remove the break
  }
  return initials;
};

//Functions to get random color and match the proper font color with the background color
export const randomColor = (): string => {
  const letters = "0123456789ABCDEF";
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return `#${color}`;
};

export const getRGB = function (c: any) {
  return parseInt(c, 16) || c;
};

export const getsRGB = function (c: any) {
  return getRGB(c) / 255 <= 0.03928
    ? getRGB(c) / 255 / 12.92
    : Math.pow((getRGB(c) / 255 + 0.055) / 1.055, 2.4);
};

export const getLuminance = function (hexColor: string) {
  return (
    0.2126 * getsRGB(hexColor.substr(1, 2)) +
    0.7152 * getsRGB(hexColor.substr(3, 2)) +
    0.0722 * getsRGB(hexColor.substr(-2))
  );
};

export const getContrast = function (f: any, b: any) {
  const L1 = getLuminance(f);
  const L2 = getLuminance(b);
  return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
};

export const getTextColor = function (bgColor: string) {
  const whiteContrast = getContrast(bgColor, "#ffffff");
  const blackContrast = getContrast(bgColor, "#000000");

  return whiteContrast > blackContrast ? "#ffffff" : "#000000";
};
//End of functions to get random color and match the proper font color with the background color

/**
 * Primary UI component with Qwik
 */
export const CardService = component$((props: CardServiceProps) => {
  const bgColor = randomColor();
  return (
    <div class="service-card">
      <div
        class="icon"
        style={{
          backgroundColor: bgColor,
          color: getTextColor(bgColor),
        }}
      >
        {getInitials(props.name).toUpperCase()}
      </div>
      <div class="service-info">
        <div>
          <p class="service-name">{props.name}</p>
          <p class="service-description">{props.description}</p>
        </div>
      </div>
      <div class="button" onClick$={props.onClick}>
        ⇾
      </div>
    </div>
  );
});
