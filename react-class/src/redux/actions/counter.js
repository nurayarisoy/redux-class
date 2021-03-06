import {
    RESET_COUNTER,
    DECREASE_COUNTER,
    INCREASE_COUNTER,
  } from "../types/counter";
  
  export const increase = () => {
    return {
      type: INCREASE_COUNTER,
    };
  };
  export const decrease = () => {
    return {
      type: DECREASE_COUNTER,
    };
  };
  export const reset = () => {
    return {
      type: RESET_COUNTER,
    };
  };