import React, { Component } from 'react';
import './directory.scss';
import MenuItem from '../menu/MenuItem';
import { sections } from '../../variable';

export default class Directory extends Component {
  render() {
    return (
      <div className='directory-menu'>
        {sections.map(item => (
          <MenuItem item={item} key={item.id} />
        ))}
      </div>
    )
  }
}
