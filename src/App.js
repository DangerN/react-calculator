import React, { useReducer } from 'react'
import Display from './components/Display'
import Buttons from './components/Buttons'
import { BUTTON_LIST } from './Stuff'
import './App.css'

function App() {
  const initialState = {
    currentValue: 0,
    nextValue: null,
    operator: null
  }
  const reducer = (state, action) => {
    const actions = {

    }
    return actions[action.type](action.value)
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <Display state={state}/>
      <Buttons dispatch={dispatch}/>
    </div>
  );
}

export default App
