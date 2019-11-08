import React from 'react';
import './homepage.scss';
import Directory from '../directory/Directory';

export default function HomePageContainer() {
  return (
    <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <Directory />
  </div>
  )
}
