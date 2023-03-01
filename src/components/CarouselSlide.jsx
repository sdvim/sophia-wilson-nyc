import './CarouselSlide.css';

const CarouselSlide = (props) => {
  return (
    <div classList={{'is-active': props.active, 'carousel-slide': true }}>
      <div
        class="carousel-slide-image"
        style={{ 'background-image': `url(/images/${encodeURIComponent(props.filename)})` }}
      ></div>
      <h4 class="carousel-slide-title">{props.label || ' '}</h4>
    </div>
  );
}

export default CarouselSlide;
