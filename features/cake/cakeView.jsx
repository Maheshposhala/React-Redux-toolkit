import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './createSlice';
const CakeView = () => {
    const cake = useSelector((state) => state.cake);
    const dispatch = useDispatch();

    const orderCake = () => {
        dispatch(ordered())
    }

    const restockedCake = () => {
        dispatch(restocked(5))
    }
    return (
        <div>
            <h2>Number of cakes - {cake.numberOfCakes}</h2>
            <button onClick={orderCake}>order cake</button>
            <button onClick={restockedCake}>restocked cake</button>
        </div>
    )
}
export default CakeView;