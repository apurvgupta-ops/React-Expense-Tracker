//Reducer is a  function that takes in the old state and an action to a new state.
const contextReducer = (state, action) => {
    let transaction;
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transaction = state.filter((t) => t.id != action.payload);
            localStorage.setItem('transaction', JSON.stringify(transaction))
            return transaction;
        case 'ADD_TRANSACTION':
            transaction = [action.payload, ...state]
            localStorage.setItem('transaction', JSON.stringify(transaction))
            return transaction;
        default:
            break;
    }

}




export default contextReducer;