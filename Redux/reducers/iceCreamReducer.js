import { BUY_ICECREAM } from "../actions/action.js";
import { initialIceCreamState } from "../store.js";

export const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                numOfIceCreams: state.numOfIceCreams - 1,
            }
        default:
            return state
    }
}
