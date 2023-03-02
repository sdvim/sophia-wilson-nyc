import LazyImage from './LazyImage';
import './Slide.css';

const Slide = (props) => {
  return (
    <div classList={{'is-active': props.active, 'slide': true }}>
      <LazyImage src={props.filename} />
      <h4>{props.label}</h4>
    </div>
  );
}

export default Slide;
