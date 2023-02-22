import { createSignal, createEffect, onCleanup } from 'solid-js';
import CarouselSlide from './CarouselSlide';
import './Carousel.css';

const Carousel = (props) => {
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

  const handleSwipe = (e) => {
    if (e.deltaX > 50) {
      handlePrevious();
    } else if (e.deltaX < -50) {
      handleNext();
    }
  };

  const startTimer = () => {
    setTimer(setInterval(handleNext, 8000));
  };

  const resetTimer = () => {
    if (timer()) {
      clearInterval(timer());
      startTimer();
    }
  };

  createEffect(() => {
    startTimer();
    onCleanup(() => clearInterval(timer()));
  });

  return (
    <div class="carousel">
      <Index each={props.slides}>{(slide, index) =>
        <CarouselSlide
          active={index === currentIndex()}
          filename={slide().filename}
          ontouchend={handleSwipe}
        />
      }</Index>
      <div class="carousel-prev-button" onclick={handlePrevious}></div>
      <div class="carousel-next-button" onclick={handleNext}></div>
    </div>
  );
};

export default Carousel;
