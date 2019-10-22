import {SET_MIN_VALUE} from './setMinValue'
import {SET_MAX_VALUE} from './setMaxValue'

const setMaxValue = (value) => ({
  type: SET_MAX_VALUE,
  max: value
});

const setMinValue = (value) => ({
  type: SET_MIN_VALUE,
  min: value
});

export {
  setMaxValue,
  setMinValue
}
