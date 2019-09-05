import React from 'react'

const DEFAULT_KEYS = ['0','1','2','3','4','5','6','7','8','9','+','-','*','/','=','c']

const DISPATCH_TYPE = key => key.replace(/[0-9]/, 'number').replace(/\+|-|\*|\//, 'operator')

const CalcStuff = {
  Operations: {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '/': (a, b) => a / b,
    '*': (a, b) => a * b,
  },
  MakeButtons: (dispatch, keys = [...DEFAULT_KEYS]) => {
    const keysToButtons = (keyList, buttonList=[]) => {
      if (keyList.length < 1) {return buttonList}
      let key = keyList.shift()
      buttonList.push(
        <input type='button'
          className='button'
          onClick={()=>dispatch({type: DISPATCH_TYPE(key), value: key})}
          value={key}
          key={key} />
      )
      return keysToButtons(keyList, buttonList)
    }
    return keysToButtons(keys)
  },
}

export default CalcStuff
