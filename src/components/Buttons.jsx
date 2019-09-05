import React from 'react'
import CalcStuff from '../Stuff'

const Buttons = props => {
  console.log(CalcStuff.MakeButtons(props.dispatch))
  console.log(CalcStuff.Echo(props.dispatch));
  return (
    <div>
      {CalcStuff.MakeButtons(props.dispatch)}
      {CalcStuff.Echo(props.dispatch)}
    </div>
  )
}


export default Buttons
