import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { cakeReducer } from "./reducers/cakeReducer.js";
import { combineReducers } from "redux";
import { iceCreamReducer } from "./reducers/iceCreamReducer.js";
import { thunk } from 'redux-thunk'
import axios from "axios"
import { transferableAbortController } from "util";

export const initialCakeState = {
    numOfCakes: 10
}

export const initialIceCreamState = {
    numOfIceCreams: 20
}

export const initialDataFetchingState = {
    isLoading: false,
    data: null,
    error: null
}

const loggerMiddleware = (store) => next => action => {
    console.log("logging action:", action);
    console.log("state before each action:", store.getState());
    return next(action)
}

const fetchDataStartAction = () => {
    return { type: "FETCH_DATA_REQUEST" }
}

const fetchDataSuccessAction = (data) => {
    return {
        type: "FETCH_DATA_SUCCESS", payload: data
    }
}

const fetchDataFailureAction = (data) => {
    return {
        type: "FETCH_DATA_FAILURE", payload: data
    }
}

const fetchData = () => {
    return async (dispatch) => {
        dispatch(fetchDataStartAction());
        console.log("fetching...");
        try {
            console.log("try");
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?id=1`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            dispatch(fetchDataSuccessAction(data));
        } catch (error) {
            console.error('Error in fetchData:', error);
            dispatch(fetchDataFailureAction(error));
        }
    };
};

const arr = "dkwdwlk"

const dataReducer = (state = initialDataFetchingState, action) => {
    console.log('Action received by reducer:', action.payload);  // Debugging log
    console.log('Reducer state after:', state);
    switch (action.type) {
        case "FETCH_DATA_SUCCESS":
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        case "FETCH_DATA_REQUEST":
            return {
                ...state,                
                isLoading: true,
            }
        case "FETCH_DATA_FAILURE":
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

const store = createStore(dataReducer, applyMiddleware(thunk));
const unsubscribe = store.subscribe(() => console.log("updated state:", store.getState()));
store.dispatch(fetchData());
console.log(store.getState())
unsubscribe();

/* const fetchData = async () => {
    axios.get(`https://jsonplaceholder.typicode.com/comments?id=1`).then((data)=>{
        console.log(data.data);
    })
}
fetchData()
  */
