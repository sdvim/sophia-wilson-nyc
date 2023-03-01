import './CarouselSlide.css';

const CarouselSlide = (props) => {
  const img = `/images/${encodeURIComponent(props.filename)}?nf_resize=fit&h=`;
  return (
    <div classList={{'is-active': props.active, 'carousel-slide': true }}>
      <img
        class="carousel-slide-image"
        style={{ 'background-image': `url(${img}30)` }}
        srcset={`${img}480, ${img}720 1.5x, ${img}1440 2x`}
        src={`${img}720`}
      />
      <h4 class="carousel-slide-title">{props.label || ' '}</h4>
    </div>
  );
}

export default CarouselSlide;
