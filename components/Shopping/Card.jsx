import React from 'react';

const styles = {
  Card: {
    top: '154px',
    left: '16px',
    width: '343px',
    height: '279px',
    backgroundColor: '#1d1d1d',
    borderRadius: '12px',
  },
};

const Card = ({imageLink, name, description}) => {
  return (
    <div style={styles.Card}>
      <img src={imageLink} />
      <div>{name}</div>
      <div>{description}</div>
      <button>Add to Cart</button>
    </div>
  );
};

export default Card;