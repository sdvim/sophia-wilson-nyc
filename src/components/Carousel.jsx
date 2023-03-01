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

  createEffect(() => {
    startTimer();
    onCleanup(() => clearInterval(timer()));
  });

  return (
    <div class="carousel" onclick={handleClick}>
      <Index each={props.slides}>{(slide, index) =>
        <CarouselSlide
          active={index === currentIndex()}
          filename={slide().filename}
          label={slide().label}
        />
      }</Index>
    </div>
  );
};

export default Carousel;
