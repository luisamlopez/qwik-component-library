import {
  component$,
  useStore,
  useSignal,
  useClientEffect$,
  useTask$,
} from "@builder.io/qwik";

export interface CarouselProps {
  slides: {
    name: string;
    image: string;
    phrase: string;
    short_description: string;
    link: string;
  }[];
}

export const Carousel = component$(({ slides }: CarouselProps) => {
  const setSlideIndex = useStore({
    slideIndex: 0,
    activeIndex: 0,
    class: "",
  });

  useTask$(({ track }) => {
    track(() => setSlideIndex.activeIndex);
    if (setSlideIndex.activeIndex >= 0) {
      setSlideIndex.class = "active";
    } else {
      setSlideIndex.class = "";
    }
  });

  const containerRef = useSignal<any | null>(null);
  useClientEffect$(({ track }) => {
    track(() => setSlideIndex.activeIndex);
    track(() => setSlideIndex.class);
    const container = containerRef.value;
    if (container) {
      const scrollLeft = 301 * setSlideIndex.activeIndex;
      setTimeout(() => {
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }, 510);
    }
  });

  return (
    <>
      <div class="hidden lg:inline">
        <div
          ref={containerRef}
          class="carousel relative flex space-x-[36px] overflow-x-scroll snap-x-mandatory whitespace-nowrap px-20"
        >
          {slides.map((item: any, index: any) => (
            <div
              key={index}
              class={`${
                index === setSlideIndex.activeIndex
                  ? setSlideIndex.class + " w-[807px]"
                  : "w-[265px]"
              } relative h-[478px] mx-auto whitespace-normal rounded-2xl transition-all duration-500 ease-in-out`}
              onClick$={() => (setSlideIndex.activeIndex = index)}
            >
              <img
                src={item.image}
                alt={item.name}
                class={`${
                  index === setSlideIndex.activeIndex
                    ? "min-w-[807px]"
                    : "min-w-[265px]"
                } h-full object-cover rounded-2xl`}
              />

              {/* ---Shadow on top of the image--- */}
              <div
                class={`lg:${
                  index === setSlideIndex.activeIndex ? "flex" : ""
                } hidden absolute w-[807px] h-[478px] top-0 rounded-2xl`}
              >
                <div class="min-w-[250px] h-full bg-Black rounded-l-2xl"></div>
                <div class="bg-gradient-to-r from-Black h-full w-full"></div>
              </div>

              <div
                class={`${
                  index === setSlideIndex.activeIndex ? "w-[265px] left-0" : ""
                } text-center absolute top-0 text-White rounded-t-2xl h-full flex flex-col`}
              >
                <div
                  class={`${
                    index === setSlideIndex.activeIndex
                      ? "bg-Transparent pt-14"
                      : "bg-Black rounded-t-2xl pt-9"
                  }`}
                >
                  <div
                    class={`${
                      index === setSlideIndex.activeIndex ? "" : "hidden"
                    }`}
                  >
                    {item.phrase}
                  </div>
                  <div class="text-4xl leading-10 tracking-[-0.55px]">
                    {item.name}
                  </div>
                </div>
                <div
                  class={`${
                    index === setSlideIndex.activeIndex
                      ? "pt-9"
                      : "pt-2 bg-gradient-to-b from-Black"
                  } text-lg font-ppneuemontrealMedium text-[#cbcbcb] text-center`}
                >
                  {item.short_description}
                </div>
                <div class="relative mt-auto pb-32">
                  <div class="border-freetrial border-2 border-White w-[141px] h-42"></div>

                  <button
                    type="button"
                    class="CenterAbsolute flex whitespace-nowrap border border-transparent bg-CarouselBttnColor px-4 py-2 text-sm font-medium shadow-sm hover:bg-CarouselBttnColor focus:outline-none font-PPNeueMontreal-Book text-Black"
                  >
                    Learn more
                    <svg
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
                    </svg>
                  </button>
                </div>
              </div>
              {/* ................................ */}
            </div>
          ))}
        </div>
      </div>
      <div class="lg:hidden">
        <div class="carousel">
          <div class="relative">
            <div class="absolute left-0 top-1/2 -translate-y-1/2">
              <img
                class="w-[40px] h-[438px] rounded-tr-2xl rounded-br-2xl object-cover object-left"
                src={
                  slides[
                    (setSlideIndex.slideIndex + slides.length - 1) %
                      slides.length
                  ].image
                }
                alt={
                  slides[
                    (setSlideIndex.slideIndex + slides.length - 1) %
                      slides.length
                  ].name
                }
              />
            </div>

            <div class="w-[265px] h-[478px] sm:w-[80vw] mx-auto">
              <img
                class="w-full h-full rounded-2xl object-cover mx-auto"
                src={slides[setSlideIndex.slideIndex].image}
                alt={slides[setSlideIndex.slideIndex].name}
              />

              <div class="hidden absolute w-[807px] h-[478px] top-0 rounded-2xl lg:flex">
                <div class="min-w-[250px] h-full bg-Black rounded-l-2xl"></div>
                <div class="bg-gradient-to-r from-Black h-full w-full"></div>
              </div>

              <div class="absolute flex flex-col top-0 min-w-[265px] max-w-[265px] w-[265px] sm:max-w-[80vw] sm:min-w-[80vw] sm:w-[80vw] lg:min-w-[265px] lg:max-w-[265px] lg:w-[265px] h-full text-White text-center">
                <div class="bg-Black pt-8 rounded-t-2xl lg:rounded-none lg:bg-transparent">
                  <span class="text-xl font-semibold font-ppneuemontrealMedium px-2">
                    {slides[setSlideIndex.slideIndex].phrase}
                  </span>
                  <h2 class="text-4xl font-montserrat break-words text-center px-4 pt-2">
                    {slides[setSlideIndex.slideIndex].name}
                  </h2>
                </div>
                <div class="bg-gradient-to-b from-Black pb-6 pt-2 lg:from-transparent">
                  <p class="text-lg font-ppneuemontrealMedium text-[#cbcbcb] px-2">
                    {slides[setSlideIndex.slideIndex].short_description}
                  </p>
                </div>
                <div class="relative mt-auto pb-32">
                  <div class="border-freetrial border-2 border-White w-[141px] h-42"></div>
                  <button
                    type="button"
                    class="CenterAbsolute flex whitespace-nowrap border border-transparent bg-CarouselBttnColor px-4 py-2 text-sm font-medium shadow-sm hover:bg-CarouselBttnColor focus:outline-none font-PPNeueMontreal-Book text-Black"
                  >
                    Learn more
                    <svg
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
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div class="absolute right-0  top-1/2 -translate-y-1/2">
              <img
                class=" w-[40px] h-[438px] rounded-tl-2xl rounded-bl-2xl object-cover object-right"
                src={
                  slides[
                    (setSlideIndex.slideIndex + slides.length - 1) %
                      slides.length
                  ].image
                }
                alt={
                  slides[
                    (setSlideIndex.slideIndex + slides.length - 1) %
                      slides.length
                  ].name
                }
              />
            </div>

            <button
              class="absolute top-1/2 right-2"
              onClick$={() =>
                (setSlideIndex.slideIndex =
                  (setSlideIndex.slideIndex + slides.length - 1) %
                  slides.length)
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
                  (setSlideIndex.slideIndex + 1) % slides.length)
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
      </div>
    </>
  );
});
