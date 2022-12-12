import React, {FC} from 'react';
import {StyledTimer} from './styled';
import {TIMER_DURATION} from "../../core/config";

interface ITimerProps {
  timerValue: number,
}

const Timer: FC<ITimerProps> = ({timerValue}) => {
  return (
    <StyledTimer>
      {new Date(TIMER_DURATION - timerValue).toISOString().slice(11, 19)}
    </StyledTimer>
  );
};

export default Timer;