import { useSelector, useDispatch} from 'react-redux';
import { ordered, restocked } from './iceCreamSlice';
const IceCreamView = ()=>{
    const icecream=useSelector((state)=> state.icecream);
    const dispatch=useDispatch()
    const orderIceCream = ()=> {
        dispatch(ordered())
    }

    const restockedIceCream = ()=> {
        dispatch(restocked(3))
    }
    return(
        <div>
            <h2>Number of ice creams - {icecream.numberOfIceCreams}</h2>
            <button onClick={orderIceCream}>Order IceCream</button>
            <button onClick={restockedIceCream}>Restocked IceCream</button>
        </div>
    )
}

export default IceCreamView