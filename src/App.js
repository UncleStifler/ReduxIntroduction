import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCashAC, getCashAC} from "./store/cashReducer";
import {addCustomerAC, removeCustomerAC} from "./store/customerReducer";

function App() {
    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash.cash);
    const customer = useSelector(state => state.customers.customers);

    const addCashHandler = (cash) => {
        dispatch(addCashAC(cash));
    };
    const getCashHandler = (cash) => {
        dispatch(getCashAC(cash));
    };

    const addClientHandler = (name) => {
        const customer = {
            name,
            id: Date.now()
        };
        dispatch(addCustomerAC(customer));
    };

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAC(customer.id));
    };

    return (
        <div className="App">
            <div style={{fontSize: "3rem"}}>{cash}</div>
            <div>
                <div>
                    <button
                        onClick={() => addCashHandler(Number(prompt('Write the number')))}>
                        Add money
                    </button>
                    <button
                        onClick={() => getCashHandler(Number(prompt('Write the number')))}>
                        Get money
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => addClientHandler(prompt('Customer name'))}>
                        Add a customer
                    </button>
                    {/*<button onClick={() => removeClientHandler(prompt('Customer name to remove'))}>Remove a customer</button>*/}
                </div>
            </div>
            <div>
                {customer.length > 0 ?
                    <div>
                        {customer.map(customer =>
                            <div onClick={() => removeCustomer(customer)}
                                 style={{fontSize: "2rem", padding: "10px", marginTop: "5px"}}>
                                {customer.name}
                            </div>)}
                    </div>
                    :
                    <div>
                        <h4>No customers</h4>
                    </div>}
            </div>

        </div>
    );
}

export default App;
