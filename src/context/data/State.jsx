import React from 'react'
import { useState } from 'react'
import Context from './Context';

const State = (props) => {

    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = "rgb(17, 24, 39)"
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = "white"
        }
    }

  return (
    <Context.Provider value={{
        mode, toggleMode
    }}>
        {props.children}
    </Context.Provider>
  )
}

export default State