import {ITimerOptions} from "./interface";
import {TIMER_DURATION} from "../../core/config";

export const getTimerOptions = (participatorsCount: number, startedAt: number): ITimerOptions => {
  const roundProgress = (Date.now() - startedAt) % (TIMER_DURATION * participatorsCount);
  let currentIndex = Math.trunc(roundProgress / TIMER_DURATION);
  if (currentIndex === participatorsCount) currentIndex--;

  return {
    currentParticipatorIndex: currentIndex,
    timerValue: roundProgress - currentIndex * TIMER_DURATION,
  };
};


