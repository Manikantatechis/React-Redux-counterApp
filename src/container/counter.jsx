import React, { useState, useEffect } from 'react';
import { increment, decrement, incValue } from '../redux/count/action';
import { getCount } from '../redux/count/selectors'
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    const [count, setCount] = useState(0)
    const [temp, setTemp] = useState(0)
    const [countInput, setCountInput]= useState(0)
    useEffect(() => {
      const count = getCount(selector)
      setCount(count)
    }, [temp,selector ])
  
    const inc = () => {
      dispatch(increment())
      let temp = Math.random(0)
      setTemp(temp)
    }
    const dec = () => {
      dispatch(decrement())
      let temp = Math.random(0)
      setTemp(temp)
    }
  
  
    const custom = () => {
  
      console.log('count', countInput);
      dispatch(incValue(parseInt(countInput)))
      let temp = Math.random(0)
      setTemp(temp)
  
  
    }
  return (
    <div>
      <p>{count}</p>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
      <input type="text" onChange={(e) => setCountInput(e.target.value)} />
      <button onClick={custom}>add</button>
    </div>
  )
}

export default Counter
