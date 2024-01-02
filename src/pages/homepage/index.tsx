import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../../services/redux/slices/counterSlice"
import { RootState } from "../../services/redux/store"

export default function Homepage() {
    const count = useSelector((state: RootState) => state.counterReducer.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Homepage</h1>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}
