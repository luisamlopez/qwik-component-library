import "./cardProduct.css";
import { component$ } from "@builder.io/qwik";
import { Logo } from "../../Logo/Logo";

export interface CardProductProps {
  name: string;
  price: number;
  image: string;
  link: string;
  description: string;
  onClick: () => void;
  //Styles
  backgroundColor?: string;
  fontColor?: string;
}

/**
 * Primary UI component with Qwik
 */
export const CardProduct = component$((props: CardProductProps) => {
  return (
    <div
      class="product-card"
      onClick$={props.onClick}
      style={{ backgroundColor: props.backgroundColor, color: props.fontColor }}
    >
      <Logo
        link={props.image}
        logo={props.image}
        width={240}
        borderRadius="4px"
      />
      <div class="product-info">
        <div>
          <p class="product-name">{props.name}</p>
          <p class="product-description">{props.description}</p>
          <p class="product-price">${props.price}</p>
        </div>
      </div>
    </div>
  );
});
