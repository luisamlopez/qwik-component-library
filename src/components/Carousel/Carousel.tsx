import { component$, useStore, useTask$ } from "@builder.io/qwik";
import "./carousel.css";

export interface Slide {}

export interface CarouselProps {
  slides: {
    name: string;
    image: string;
    phrase: string;
    short_description: string;
  }[];
}

export const Carousel = component$((props: CarouselProps) => {
  const setSlideIndex = useStore({
    slideIndex: 0,
    activeIndex: -1,
    class: "",
  });

  useTask$(({ track }) => {
    track(() => setSlideIndex.activeIndex);
    if (setSlideIndex.activeIndex >= 0) {
      setSlideIndex.class = "clicked";
    } else {
      setSlideIndex.class = "";
    }
  });

  return (
    <div class="carousel">
      {props.slides.map((slide) => (
        <div class="card">
          <div class="overlay"></div>
          <img src={slide.image} alt={slide.name} />

          <div class="info">
            <div class="phrase-name">
              <span>{slide.phrase}</span>
              <h2>{slide.name}</h2>
              <p>{slide.short_description}</p>
            </div>

            <div class="learn-more">
              <div class="marco"></div>
              <button type="button">Learn more →</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});
