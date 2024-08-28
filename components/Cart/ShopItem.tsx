import React from 'react';

const styles = {
  Card: {
    top: '76px',
    left: '16px',
    width: '343px',
    height: '120px',
    backgroundColor: '#a9a9a9',
    borderRadius: '12px',
  },
};

const ShopItem = ({imageLink, title, price}) => {
  return (
    <div>
      <img src={imageLink}/>
      <div>
        <div>{title}</div>
        <div>{price}</div>
        <div>
            <div>quality</div>
            <button>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default ShopItem;