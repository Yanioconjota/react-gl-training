import PropTypes from 'prop-types';
import { FunctionComponent } from 'react';
import { IGifItem } from '../modules/exports';

const GifItem: FunctionComponent<IGifItem> = ({ title, url }) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <img src={url} alt={title} className="w-100" />
      <h4>{title}</h4>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default GifItem;
