import React, { useContext } from 'react'; // Importing the useContext hook, passing the AppContext. 
// It is a component to connect the context, in order to get the values from global state
import { AppContext } from '../context/AppContext'; // Importing AppContext from Context

const CartValue = () => {
    const { expenses, Location } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Cart Value: {Location}{totalExpenses}</span>
        </div>
    );
};

export default CartValue;