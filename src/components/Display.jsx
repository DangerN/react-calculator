import React from 'react'

const Display = props => {

  return (
    <div className='display'>
      <div className='base'> {props.state.baseValue} </div>
      <div className='displayValue'> {props.state.displayValue} </div>
      <div className='operator'> {props.state.operator} </div>
    </div>
  )
}

export default Display
