import { PropTypes as propTypes } from "prop-types";

const GifItem = ({ title, url }) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <img src={url} alt={title} className="w-100" />
      <h4>{title}</h4>
    </div>
  );
};

GifItem.propTypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired
}

export default GifItem;
