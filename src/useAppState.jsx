import { useReducer } from 'react'
import CalcStuff from './Stuff'

const useAppState = () => {
  const initialState = {
    displayValue: '0',
    baseValue: '',
    operator: ''
  }
  const reducer = (state, action) => {
    console.log(state);
    const actions = {
      'number': (value) => {
        let newVal = state.displayValue + value
        return {...state, displayValue: newVal.replace(/^0/, '')}
      },
      'operator': (value) => {
        const calculate = () => {
          CalcStuff.Operations[state.operator](state.baseValue, state.displayValue)
        }
        return !state.operator
          ? {...state, operator: value}
          : {
              baseValue: calculate(),
              displayValue: calculate(),
              operator: value
            }
      },
      '=': () => {

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
