import { component$, useStore } from "@builder.io/qwik";

export interface CarouselProps {
  slides: {
    name: string;
    image: string;
    phrase: string;
    short_description: string;
  }[];
}

export const CarouselLarge = component$((props: CarouselProps) => {
  const setSlideIndex = useStore({
    slideIndex: 0,
    activeIndex: -1,
    class: "",
  });

  return (
    <div class="carousel">
      <div class="relative">
        {/* <div class="image">
      <img
        src={
          props.slides[
            (setSlideIndex.slideIndex + props.slides.length - 1) %
              props.slides.length
          ].image
        }
        alt={
          props.slides[
            (setSlideIndex.slideIndex + props.slides.length - 1) %
              props.slides.length
          ].name
        }
      />
    </div> */}

        <div class="wrapper">
          <img
            class="image"
            src={props.slides[setSlideIndex.slideIndex].image}
            alt={props.slides[setSlideIndex.slideIndex].name}
          />

          {/* Gradient */}
          <div class="wrapper-gradient">
            <div class="box-gradient"></div>
            <div class="gradient"></div>
          </div>

          <div class="card">
            <div class="phrase-name">
              <span>{props.slides[setSlideIndex.slideIndex].phrase}</span>
              <h2>{props.slides[setSlideIndex.slideIndex].name}</h2>
            </div>

            <div class="description">
              <p>{props.slides[setSlideIndex.slideIndex].short_description}</p>
            </div>

            <div class="learn-more">
              <div class="marco"></div>
              <button type="button">
                Learn more
                {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 ml-2"
            >
              <path
                fillRule="evenodd"
                d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg> */}
              </button>
            </div>
          </div>
        </div>

        {/* <div class="absolute right-0  top-1/2 -translate-y-1/2">
      <img
        class=" w-[40px] h-[438px] rounded-tl-2xl rounded-bl-2xl object-cover object-right"
        src={
          props.slides[
            (setSlideIndex.slideIndex + props.slides.length - 1) %
              props.slides.length
          ].image
        }
        alt={
          props.slides[
            (setSlideIndex.slideIndex + props.slides.length - 1) %
              props.slides.length
          ].name
        }
      />
    </div> */}

        <button
          class="absolute top-1/2 right-2"
          onClick$={() =>
            (setSlideIndex.slideIndex =
              (setSlideIndex.slideIndex + props.slides.length - 1) %
              props.slides.length)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="White"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <button
          class="absolute top-1/2 left-2"
          onClick$={() =>
            (setSlideIndex.slideIndex =
              (setSlideIndex.slideIndex + 1) % props.slides.length)
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="White"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
});
