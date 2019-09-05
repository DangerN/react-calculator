import React from 'react'
import CalcStuff from '../Stuff'

const Buttons = props => {
  return (
    <div>
      {CalcStuff.MakeButtons(props.dispatch)}
    </div>
  )
}


export default Buttons
