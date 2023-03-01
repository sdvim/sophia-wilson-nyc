import './CarouselSlide.css';

const CarouselSlide = (props) => {
  return (
    <div classList={{'is-active': props.active, 'carousel-slide': true }}>
      <img
        class="carousel-slide-image"
        loading="lazy"
        style={{ 'background-image': `url(/images/${encodeURIComponent(props.filename)}?nf_resize=fit&h=480)` }}
        src={`/images/${encodeURIComponent(props.filename)}?nf_resize=fit&h=1440)`}
      />
      <h4 class="carousel-slide-title">{props.label || ' '}</h4>
    </div>
  );
}

export default CarouselSlide;
