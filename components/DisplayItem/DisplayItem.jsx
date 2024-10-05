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

const defaultProps = {
  image: 'https://assets.api.uizard.io/api/cdn/stream/67e5e89a-93f9-4cd5-8f54-740626745230.png',
}

const DisplayItem = ({image}) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default DisplayItem;