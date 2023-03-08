import { createSignal, createEffect, onCleanup } from "solid-js";
import "./LazySlider.css";

const LazySlider = (props) => {
  const [currentIndex, setCurrentIndex] = createSignal(0);
  const [timer, setTimer] = createSignal(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % props.slides.length);
    resetTimer();
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev + props.slides.length - 1) % props.slides.length);
    resetTimer();
  };

  const handleClick = (e) => {
    if (e.pageX < window.innerWidth / 2 ) {
      handlePrevious();
    } else {
      handleNext();
    }
  }

  const startTimer = () => {
    setTimer(setInterval(handleNext, 8000));
  };

  const resetTimer = () => {
    if (timer()) {
      clearInterval(timer());
      startTimer();
    }
  };

  const inRange = (x, y, range) => Math.abs(x - y) < range;

  createEffect(() => {
    startTimer();
    onCleanup(() => clearInterval(timer()));
  });

  return (
    <div class="lazy-slider" onclick={handleClick}>
      <Index each={props.slides}>{(slide, index) => {
        const loading = () => inRange(index, currentIndex(), 2) ? "eager" : "lazy";
        const isActive = () => index === currentIndex();
        const img = `https://sophiawilson.netlify.app` +
          `/images/${encodeURIComponent(slide().filename)}?nf_resize=fit`;  
        return (
          <div classList={{"is-active": isActive(), "slide": true}}>
            <div
              class="lazy-image"
              style={{"background-image": `url(${img}&h=64)`}}
            >
              <img
                src={`${img}&h=3000`}
                loading={loading()}
                alt={slide().label || "A photograph by Sophia Wilson"}
              />
            </div>
            <p class="lazy-slide-title">{slide().label}</p>
          </div>
        );
      }}</Index>
      <div class="lazy-slider-cursor-left"></div>
      <div class="lazy-slider-cursor-right"></div>
    </div>
  );
};

export default LazySlider;
