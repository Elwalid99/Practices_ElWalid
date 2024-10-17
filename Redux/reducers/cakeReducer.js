import { BUY_CAKE } from "../actions/action.js";
import { initialCakeState } from "../store.js";

export const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                numOfCakes: state.numOfCakes - 1,
            }
        default:
            return state;
    }
}
