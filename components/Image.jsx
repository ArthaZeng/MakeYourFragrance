import React from 'react';

const styles = {
  ImageContainer: {
    width: '100px',
    height: '100px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
};



const Image = (props) => {
  return (
    <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${props.image})`,
      // borderRadius: '9999px',
    }} />
  );
};

export default Image;