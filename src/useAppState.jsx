import { useReducer } from 'react'
import CalcStuff from './Stuff'

const useAppState = () => {
  const initialState = {
    displayValue: '0',
    baseValue: '',
    operator: '',
  }
  const reducer = (state, action) => {
    console.log(state);
    const actions = {
      'number': (value) => {
        let newVal = state.displayValue + value
        return state.displayValue === state.baseValue
          ? {...state, displayValue: value, baseValue: state.displayValue}
          : {...state, displayValue: /^\d+\.?\d?\d?\d?(?=\d*$)/.exec(newVal.replace(/^0/, ''))[0]}
      },
      'operator': (value) => {
        const calculate = () => {
          return CalcStuff.Operations[state.operator](state.baseValue, state.displayValue)
        }
        return !state.operator
          ? {...state, operator: value, baseValue: state.displayValue}
          : {
              baseValue: calculate(),
              displayValue: calculate(),
              operator: value
            }
      },
      '=': () => {
        return {
          baseValue: '',
          displayValue: CalcStuff.Operations[state.operator](state.baseValue, state.displayValue),
          operator: ''
        }
      },
      'c': () => {
        return {displayValue: 0, nextValue: null, operator: null}
      },
    }
    return actions[action.type](action.value)
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return [state, dispatch]
}

export default useAppState
