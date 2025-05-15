import React from 'react';

const ImageCard = ({ url, alt }) => {
  return (
    <div>
      <img src={url} alt={alt} width={280} height={280} />
    </div>
  );
};

export default ImageCard;
