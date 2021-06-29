import React from 'react';
import './Cards.css';

import CardItem from '../Cards/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>READY2RIDE!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='Images/city-bike.jpeg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='Images/e-bike.jpeg'
              text='Travel through the Europe in Bike Holidays'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='Images/mountain-santa.jpeg'
              text='Make unforgetable ride in Austrian Mountains'
              label='Hiking'
              path='/services'
            />
            <CardItem
              src='Images/mountain.jpeg'
              text='Experience ride next to Kiel shores'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='Images/city-tour.jpeg'
              text='Ride through Berlin wall'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
