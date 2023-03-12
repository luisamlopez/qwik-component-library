import "./cardService.css";
import { component$ } from "@builder.io/qwik";

export interface CardServiceProps {
  name: string;
  link: string;
  description: string;
  onClick: () => void;
}

export const randomColor = (): string => {
  let result = "";
  for (let i = 0; i < 6; ++i) {
    const value = Math.floor(16 * Math.random());
    result += value.toString(16);
  }
  return "#" + result;
};

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
  }
  return initials;
};

export const createCardService = (props: CardServiceProps) => {
  const serviceCard = document.createElement("div");
  const icon = document.createElement("div");
  const serviceInfo = document.createElement("div");
  const serviceName = document.createElement("p");
  const serviceDescription = document.createElement("p");
  const button = document.createElement("div");

  serviceCard.className = "service-card";
  serviceInfo.className = "service-info";
  icon.className = "icon";
  serviceName.className = "service-name";
  serviceDescription.className = "service-description";
  button.className = "button";

  serviceName.innerText = props.name;
  serviceDescription.innerText = props.description;

  icon.style.backgroundColor = randomColor();
  icon.innerText = getInitials(props.name).toUpperCase();

  button.innerText = "➡";
  button.onclick = props.onClick;

  serviceCard.appendChild(icon);

  const div = document.createElement("div");
  div.append(serviceName, serviceDescription);

  serviceInfo.appendChild(div);

  serviceCard.appendChild(serviceInfo);

  serviceCard.appendChild(button);

  return serviceCard;
};

export const CardService = component$((props: CardServiceProps) => {
  return (
    <div class="service-card">
      <div class="icon" style={{ backgroundColor: randomColor() }}>
        {getInitials(props.name).toUpperCase()}
      </div>
      <div class="service-info">
        <div>
          <p class="service-name">{props.name}</p>
          <p class="service-description">{props.description}</p>
        </div>
      </div>
      <div class="button" onClick$={props.onClick}>
        ➡
      </div>
    </div>
  );
});
