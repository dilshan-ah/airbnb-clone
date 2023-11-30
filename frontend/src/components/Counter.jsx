import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = ({ end }) => {

  const [counterOn, setCounterOn] = useState(false)

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={()=>setCounterOn(false)}>
      {counterOn && <CountUp end={end} />}
    </ScrollTrigger>
  );
};

export default Counter;
