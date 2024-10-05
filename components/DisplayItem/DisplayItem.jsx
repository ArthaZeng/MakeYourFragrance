import React from 'react';

const styles = {
  ImageContainer: {
    top: '510px',
    left: '32px',
    width: '119px',
    height: '112px',
    borderRadius: '10000px',
    boxShadow: '2px 2px 4px rgba(255,255,255,0.1)',
    backgroundImage: 'url(./image.png)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};

const DisplayItem = ({image, title}) => {
  return (
    <div>
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(constants/images/${image})`,
    }} />
    <div>{title}</div>
    </div>
  );
};

export default DisplayItem;