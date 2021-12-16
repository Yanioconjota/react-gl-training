const GifItem = ({title, url}) => {
  return (
    <>
      <img src={url} alt={title} className="w-100" />
      <h4>{title}</h4>
    </>
  );
}

export default GifItem;