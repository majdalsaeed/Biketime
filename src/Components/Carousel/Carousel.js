import React from 'react';
import { Button } from '../Buttons/Buttons';
import '../Carousel/Carousel.css';

function Carousel() {
  return (
    <div className='carousel-container'>
      <h1>Riding2RIDE AWAITS YOU</h1>
      <p>What are you waiting for?</p>
      <div className='carousel-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Free Trial
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Carousel;
