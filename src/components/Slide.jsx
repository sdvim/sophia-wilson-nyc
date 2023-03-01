import './Slide.css';

const Slide = (props) => {
  const img = `/images/${encodeURIComponent(props.filename)}?nf_resize=fit&h=`;
  return (
    <div
      classList={{'is-active': props.active, 'slide': true }}
      style={{ 'background-image': `url(${img}64)` }}
    >
      <img
        class="slide-image"
        loading="lazy"
        src={`${img}916`}
        srcset={`${img}640 640w, ${img}916 916w, ${img}1030 1030w`}
      />
      <h4>{props.label || ' '}</h4>
    </div>
  );
}

export default Slide;
