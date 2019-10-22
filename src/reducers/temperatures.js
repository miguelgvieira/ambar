import { SET_MAX_VALUE } from '../actions/setMaxValue'
import { SET_MIN_VALUE } from '../actions/setMinValue'

const initialState = {
  min: 99,
  max: -99
};

const temperaturesReducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_MAX_VALUE:
    return {
      ...state,
      max: action.max
    };
  case SET_MIN_VALUE:
    return {
      ...state,
      min: action.min
    };
  default:
    return state;
  }
}

export default temperaturesReducer
