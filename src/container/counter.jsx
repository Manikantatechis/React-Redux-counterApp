import React, { useState} from 'react';
import { increment, decrement, incValue } from '../redux/count/action';
import { getCount } from '../redux/count/selectors'
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    const [countInput, setCountInput] = useState(0)
    const count= getCount(selector)
    const inc = () => {
        dispatch(increment())
    }
    const dec = () => {
        dispatch(decrement())
    }


    const custom = () => {

        dispatch(incValue(countInput))
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
