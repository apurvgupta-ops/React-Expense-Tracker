import { RestaurantRounded } from '@material-ui/icons';
import React ,{createContext , useReducer} from 'react';
import contextReducer from './contextReducer'



const initialstate =JSON.parse(localStorage.getItem('transaction'));
export const ExpenseTrackerContext = createContext(initialstate);
export const Provider =({children})=>{
    const [transaction, dispatch] = useReducer(contextReducer, initialstate);
    //ACTION CREATOR....
    const deleteTransaction = (id)=>{
        dispatch({ type: 'DELETE_TRANSACTION' , payload: id})
    }

    const addTransaction =(transaction)=>{
        dispatch({ type: 'ADD_TRANSACTION' , payload :transaction   })
    }

    const balance = transaction.reduce((acc,currval)=> currval.type === 'Expense' ? acc- currval.amount : acc + currval.amount,0) 
    return(
        <ExpenseTrackerContext.Provider value = {{deleteTransaction,addTransaction,transaction,balance}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
} 

 