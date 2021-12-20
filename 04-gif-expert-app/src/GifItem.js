const GifItem = ({title, url}) => {
  return (
    <>
      <img
        src={url}
        alt={title}
        className="w-100 animate__animated animate__fadeInRight animate__delay-1"
      />
      <h4 className="animate__animated animate__fadeInLeft animate__delay-1s">
        {title}
      </h4>
    </>
  );
}

export default GifItem;