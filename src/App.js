import React from 'react'
import Display from './components/Display'
import Buttons from './components/Buttons'
import useAppState from './useAppState'

function App() {
  const [state, dispatch] = useAppState()
  return (
    <div className="App">
      <Display state={state}/>
      <Buttons dispatch={dispatch}/>
    </div>
  )
}

export default App
