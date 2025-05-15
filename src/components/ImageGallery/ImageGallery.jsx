import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ arr }) => {
  return (
    <div>
      {arr.length > 0 && (
        <ul className={s.flex}>
          {arr.map(item => (
            <li key={item.id}>
              <ImageCard url={item.urls.small} alt={item.alt_description} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageGallery;
