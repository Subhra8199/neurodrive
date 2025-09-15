import React from 'react'
import { increment,decrement} from './CounterSlice'
import { useDispatch,useSelector } from 'react-redux'
import { fetchData } from './CounterSlice'

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector((state=>state.counter.value))
    return (
        <div>
        <button onClick={()=>dispatch(decrement())}>-</button>
            <h3>{value}</h3>
        <button onClick={()=>dispatch(increment())}>+</button>

        <button onClick={()=> dispatch(fetchData())}>fetchData Bitch</button>
        </div>
    )
}

export default Counter
