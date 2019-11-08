import React from 'react';
import './menu-item.scss';

const MenuItem = ({ item }) => (
  <div className='menu-item'>
    <div className='content'>
      <div className='title'>{item.title}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;