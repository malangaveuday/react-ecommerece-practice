import React from 'react';
import './menu-item.scss';
import { withRouter } from 'react-router-dom';

//  match, history comes from withRouter HOF.

const MenuItem = ({ item, match, history }) => (
  <div className={`${item.size} menu-item`} onClick={() => history.push(`${match.url}${item.linkUrl}`)}>
    <div className="background-image" style={{ backgroundImage: `url(${item.imageUrl})` }} /> 
    <div className='content'>
      <div className='title'>{item.title}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);