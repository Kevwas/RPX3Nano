import React from 'react'
import Confetti from 'react-confetti';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Confetti
    width={window.innerWidth}
    height={window.innerHeight}
  />
);
