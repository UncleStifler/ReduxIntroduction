const defaultState = {
    customers: []
};

export const ADD_CUSTOMER = "ADD-CUSTOMER";
export const REMOVE_CUSTOMER = "REMOVE-CUSTOMER";
export const ADD_MANY_CUSTOMERS = "ADD-MANY-CUSTOMERS"

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS: {
            return {...state, customers: [...state.customers, ...action.payload]}
        }
        case ADD_CUSTOMER: {
            return {...state, customers: [...state.customers, action.payload]};
        }
        case REMOVE_CUSTOMER: {
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)};
        }

        default:
            return state;
    }
};


export const addCustomerAC = (payload) => ({type: ADD_CUSTOMER, payload})
export const removeCustomerAC = (payload) => ({type: REMOVE_CUSTOMER, payload})
export const addManyCustomersAC = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})