import "./cardProduct.css";
import { component$ } from "@builder.io/qwik";
import { Avatar, createAvatar } from "../../Avatar/Avatar";

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

export const createCardProduct = (props: CardProductProps) => {
  const productCard = document.createElement("div");
  const productInfo = document.createElement("div");
  const productName = document.createElement("p");
  const productDescription = document.createElement("p");
  const productPrice = document.createElement("p");

  productCard.className = "product-card";
  productInfo.className = "product-info";
  productName.className = "product-name";
  productDescription.className = "product-description";
  productPrice.className = "product-price";

  productCard.style.backgroundColor = props.backgroundColor || "#fff";
  productCard.style.color = props.fontColor || "#000";

  productName.innerText = props.name;
  productDescription.innerText = props.description;
  productPrice.innerText = "$ " + props.price.toString();

  productCard.appendChild(
    createAvatar({ url: props.image, alt: props.name, size: "240px" })
  );

  productCard.onclick = props.onClick;

  const div = document.createElement("div");
  div.append(productName, productDescription, productPrice);

  productInfo.appendChild(div);

  productCard.appendChild(productInfo);

  return productCard;
};

export const CardProduct = component$((props: CardProductProps) => {
  return (
    <div
      class="product-card"
      onClick$={props.onClick}
      style={{ backgroundColor: props.backgroundColor, color: props.fontColor }}
    >
      <Avatar url={props.image} alt={props.name} size="240px" />
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
