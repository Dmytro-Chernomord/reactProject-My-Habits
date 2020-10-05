import React from 'react';
import Countdown from 'react-countdown';

const Timer = ({ changeSubcrtp }) => {
  return (
    <>
      <Countdown date={Date.now() + 5000} onComplete={changeSubcrtp} />

      {/* <Countdown date={Date.now() + 432000000} onComplete={console.log('hi');}/> */}
    </>
  );
};

export default Timer;
