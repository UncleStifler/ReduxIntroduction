const defaultState = {
    cash: 0
};

export const ADD_CASH = "ADD-CASH";
export const GET_CASH = "GET-CASH";

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH: {
            return {...state, cash: state.cash + action.payload};
        }
        case GET_CASH: {
            return {...state, cash: state.cash - action.payload};
        }

        default:
            return state;
    }
};

export const addCashAC = (payload) => ({type: ADD_CASH, payload});
export const getCashAC = (payload) => ({type: GET_CASH, payload});