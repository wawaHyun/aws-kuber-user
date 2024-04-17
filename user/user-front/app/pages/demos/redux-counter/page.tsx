'use client'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {useSelector,useDispatch} from 'react-redux'
import {handlePlus,handleMinus, getCount} from '@/app/component/counter/counter.slice'
import { NextPage } from 'next';

const CounterPage:NextPage =() =>{

    const count = useSelector(getCount);
    const dispatch = useDispatch();

    return (<body className="b">    
    <div>
        <h1>Redux Counter : {count}</h1>

        <AddCircleOutlineIcon onClick={()=>dispatch(handlePlus())} color="secondary" fontSize="large"/>

        <RemoveCircleOutlineIcon onClick={()=>dispatch(handleMinus())} color="secondary" fontSize="large"/>

    </div>
    </body>
    )
}

export default CounterPage;