import React from 'react';
import Countdown from 'react-countdown';

const Timer = ({ changeSubcrtp }) => {
  return (
    <>
      <Countdown date={Date.now() + 5000} onComplete={changeSubcrtp} />
    </>
  );
};

export default Timer;
