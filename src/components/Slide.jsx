import './Slide.css';

const Slide = (props) => {
  const img = `/images/${encodeURIComponent(props.filename)}?nf_resize=fit&h=`;
  return (
    <div classList={{'is-active': props.active, 'slide': true }}>
      <img
        class="slide-image"
        style={{ 'background-image': `url(${img}30)` }}
        srcset={`${img}480, ${img}720 1.5x, ${img}1440 2x`}
        src={`${img}720`}
      />
      <h4 class="slide-title">{props.label || ' '}</h4>
    </div>
  );
}

export default Slide;
