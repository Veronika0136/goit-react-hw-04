import React from 'react';

const ImageCard = ({ url, alt }) => {
  return (
    <div>
      <img src={url} alt={alt} width={320} height={300} />
    </div>
  );
};

export default ImageCard;
