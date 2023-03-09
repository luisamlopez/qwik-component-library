/* eslint-disable @typescript-eslint/no-unused-vars */
import { component$ } from "@builder.io/qwik";
import { CardProduct } from "../..";

export interface GridProps {
  spacing?: number;
  columns?: number;
  rows?: number;
  items: (typeof CardProduct)[];
}

export const Grid = component$((props: GridProps) => {
  return (
    <div
      class="grid"
      style={{
        gridTemplateColumns: `repeat(${props.columns}, 1fr)`,
        gridTemplateRows: `repeat(${props.rows}, 1fr)`,
        gap: `${props.spacing}px`,
      }}
    >
      {props.items.map((item) => {
        return <item />;
      })}
    </div>
  );
});
