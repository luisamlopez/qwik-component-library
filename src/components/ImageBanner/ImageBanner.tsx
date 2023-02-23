import { HTMLAttributes, QRL, component$ } from "@builder.io/qwik";
import "./imageBanner.css";
import { Button, createButton } from "../Button/Button";

export interface ImageBannerActions {
  onClick: QRL<() => void>;
}

export type ImageBannerProps = HTMLAttributes<HTMLDivElement> & {
  backgroundImage: string;
  title: string;
  message: string;
} & ImageBannerActions;

//Arrow function to hide component
export const onClickExit = () => {
  document.getElementById("image-banner")!.style.display = "none";
};

export const createImageBanner = (props: ImageBannerProps) => {
  const wrapper = document.createElement("div");
  const div = document.createElement("div");
  const overlay = document.createElement("div");
  const title = document.createElement("div");
  const message = document.createElement("div");
  const exit = document.createElement("div");
  const button = document.createElement("div");

  div.className = "image-banner";
  overlay.className = "image-banner__overlay";
  title.className = "image-banner__title";
  message.className = "image-banner__message";
  exit.className = "image-banner__exit";
  button.className = "image-banner__button";

  div.style.backgroundImage = `url(${props.backgroundImage})`;

  title.innerHTML = props.title;
  message.innerHTML = props.message;
  exit.innerHTML = "X";

  exit.onclick = onClickExit;

  button.appendChild(
    createButton({
      label: "Ir al sitio",
      primary: true,
      backgroundColor: "transparent",
      onClick: props.onClick,
    })
  );

  div.appendChild(overlay);
  div.appendChild(title);
  div.appendChild(message);
  div.appendChild(exit);
  div.appendChild(button);

  wrapper.appendChild(div);

  return wrapper;
};

export const ImageBanner = component$((props: ImageBannerProps) => {
  return (
    <div
      class="image-banner"
      id="image-banner"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
      }}
    >
      <div class="image-banner__overlay"></div>
      <div class="image-banner__title">
        <p>{props.title}</p>
      </div>
      <div class="image-banner__message">
        <p>{props.message}</p>
      </div>
      <div class="image-banner__button">
        {/* To pass the function, it has to   be something like  
          const onClickButton = $(() => {
              alert("click");
          });
        */}
        <Button
          label="Ir al sitio"
          primary
          backgroundColor="transparent"
          onClick$={props.onClick}
        />
      </div>
      <div class="image-banner__exit">
        <div
          onClick$={() => {
            onClickExit();
          }}
        >
          X
        </div>
      </div>
    </div>
  );
});
