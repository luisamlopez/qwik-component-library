import { component$, useStore, useTask$, $ } from "@builder.io/qwik";
import "./carousel.css";

export interface Slide {}

export interface CarouselProps {
  slides: {
    name: string;
    image: string;
    phrase: string;
    short_description: string;
    link: string;
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

  const nextSlide = $(() => {
    setSlideIndex.slideIndex = setSlideIndex.slideIndex =
      (setSlideIndex.slideIndex + props.slides.length + 1) %
      props.slides.length;
  });

  const prevSlide = $(() => {
    setSlideIndex.slideIndex = setSlideIndex.slideIndex =
      (setSlideIndex.slideIndex + props.slides.length - 1) %
      props.slides.length;
  });

  return (
    //Wrapper for the carousel
    <div class="carousel">
      <div class="relative">
        {/* <div class="card" onClick$={prevSlide}>
          <img
            class="prev"
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

        <div class="card" onClick$={prevSlide}>
          <div class="overlay"></div>
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

          <div class="info">
            {/* Slide info */}
            <div class="phrase-name">
              <span class="span">
                {
                  props.slides[
                    (setSlideIndex.slideIndex + props.slides.length - 1) %
                      props.slides.length
                  ].phrase
                }
              </span>
              <h2>
                {
                  props.slides[
                    (setSlideIndex.slideIndex + props.slides.length - 1) %
                      props.slides.length
                  ].name
                }
              </h2>
              <p>
                {
                  props.slides[
                    (setSlideIndex.slideIndex + props.slides.length - 1) %
                      props.slides.length
                  ].short_description
                }
              </p>
            </div>

            {/* Button to redirect to the link */}
            <div class="learn-more">
              <div class="marco"></div>
              <button
                type="button"
                onClick$={() => {
                  //Redirect to the link
                  window.location.href =
                    props.slides[
                      (setSlideIndex.slideIndex + props.slides.length - 1) %
                        props.slides.length
                    ].link;
                }}
              >
                Learn more →
              </button>
            </div>
          </div>
        </div>

        <div class="card_large">
          <div class="overlay_large"></div>
          <img
            src={
              props.slides[
                (setSlideIndex.slideIndex + props.slides.length) %
                  props.slides.length
              ].image
            }
            alt={
              props.slides[
                (setSlideIndex.slideIndex + props.slides.length) %
                  props.slides.length
              ].name
            }
          />

          <div class="info_large">
            {/* Slide info */}
            <div class="phrase-name_large">
              <span class="span">
                {props.slides[setSlideIndex.slideIndex].phrase}
              </span>
              <h2>{props.slides[setSlideIndex.slideIndex].name}</h2>
              <p>{props.slides[setSlideIndex.slideIndex].short_description}</p>
            </div>

            {/* Button to redirect to the link */}
            <div class="learn-more">
              <div class="marco"></div>
              <button
                type="button"
                onClick$={() => {
                  //Redirect to the link
                  window.location.href =
                    props.slides[setSlideIndex.slideIndex].link;
                }}
              >
                Learn more →
              </button>
            </div>
          </div>
        </div>

        {/* Show all the remain slides next to each other*/}

        <div class="card" onClick$={nextSlide}>
          <div class="overlay"></div>
          <img
            src={
              props.slides[
                (setSlideIndex.slideIndex + props.slides.length + 1) %
                  props.slides.length
              ].image
            }
            alt={
              props.slides[
                (setSlideIndex.slideIndex + props.slides.length + 1) %
                  props.slides.length
              ].name
            }
          />

          <div class="info">
            {/* Slide info */}
            <div class="phrase-name">
              <span class="span">
                {
                  props.slides[
                    (setSlideIndex.slideIndex + props.slides.length + 1) %
                      props.slides.length
                  ].phrase
                }
              </span>
              <h2>
                {
                  props.slides[
                    (setSlideIndex.slideIndex + props.slides.length + 1) %
                      props.slides.length
                  ].name
                }
              </h2>
              <p>
                {
                  props.slides[
                    (setSlideIndex.slideIndex + props.slides.length + 1) %
                      props.slides.length
                  ].short_description
                }
              </p>
            </div>

            {/* Button to redirect to the link */}
            <div class="learn-more">
              <div class="marco"></div>
              <button
                type="button"
                onClick$={() => {
                  //Redirect to the link
                  window.location.href =
                    props.slides[
                      (setSlideIndex.slideIndex + props.slides.length + 1) %
                        props.slides.length
                    ].link;
                }}
              >
                Learn more →
              </button>
            </div>
          </div>
        </div>

        {/* <div class="card" onClick$={nextSlide}>
          <img
            class="next"
            src={
              props.slides[
                (setSlideIndex.slideIndex + props.slides.length + 1) %
                  props.slides.length
              ].image
            }
            alt={
              props.slides[
                (setSlideIndex.slideIndex + props.slides.length + 1) %
                  props.slides.length
              ].name
            }
          />
        </div> */}
      </div>
    </div>
  );
});
