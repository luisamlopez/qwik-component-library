import { QRL, component$ } from "@builder.io/qwik";
import "./imageBanner.css";
import { Button } from "../Button/Button";

export interface ImageBannerActions {}

export interface ImageBannerProps {
  backgroundImage: string;
  title: string;
  message: string;
  onClick: QRL<() => void>;
}

//Arrow function to hide component
export const onClickExit = () => {
  document.getElementById("image-banner")!.style.display = "none";
};

/**
 * Primary UI component with Qwik
 */
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
          onClick={props.onClick}
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
