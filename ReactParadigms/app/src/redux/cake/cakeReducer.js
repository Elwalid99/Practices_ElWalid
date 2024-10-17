const initialCakeState = {
    numOfCake: 10
}

export const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case "BUY_CAKE":
            return {
                numOfCake: state.numOfCake - 1
            }
        default:
            return state
    }
}
