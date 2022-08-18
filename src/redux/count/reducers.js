import initialState from '../store/initialState'
import * as Actions from "./action";

export const countReducer = (state = initialState.counter, action) => {
    switch (action.type) {
        case Actions.INCREMENT:
            return {
                count: state.count + 1
            }
        case Actions.DECREMENT:
            return {
                count: state.count - 1
            }
        case Actions.INCVALUE: return {
            count: state.count + parseInt(action.count)
        }
        default:
            return state;

    }

}
