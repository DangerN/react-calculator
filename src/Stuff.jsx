import React from 'react'

const DEFAULT_KEYS = [0,1,2,3,4,5,6,7,8,9,'+','-','*','/','=','c']

const DEFAULT_SOUNDS = ['ayy', 'lamau', 'yeet', 'yeet']

const CalcStuff = {
  Operations: {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
  },
  MakeButtons: (dispatch, keys = DEFAULT_KEYS) => {
    const keysToButtons = (keyList, buttonList=[]) => {
      if (keyList.length < 1) {return buttonList}
      let key = keyList.shift()
      buttonList.push(
        <div>{key}</div>
      )
      console.log(buttonList)
      return keysToButtons(keyList, buttonList)
    }
    return keysToButtons(keys)
  },
  Echo : (dispatch, sounds = DEFAULT_SOUNDS) => {
    const bounce = (soundsList, echo=[]) => {
      if (soundsList.length < 1) {return echo}
      let s = soundsList.shift()
      echo.push(
        <div>{s}</div>
      )
      console.log(echo);
      return bounce(soundsList, echo)
    }
    return bounce(sounds)
  }
}

export default CalcStuff
