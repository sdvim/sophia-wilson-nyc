import './LazyImage.css';

const LazyImage = (props) => {
  const img = `/images/${encodeURIComponent(props.src)}?nf_resize=fit`;
  
  return (
    <div class="lazy-image" style={{ 'background-image': `url(${img}&h=64)` }}>
      <img src={`${img}&h=916`} loading="lazy" />
    </div>
  );
}

export default LazyImage;