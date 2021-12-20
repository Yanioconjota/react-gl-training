const GifItem = ({title, url}) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <img src={url} alt={title} className="w-100" />
      <h4>{title}</h4>
    </div>
  );
}

export default GifItem;