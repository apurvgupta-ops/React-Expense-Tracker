import React ,{useContext} from 'react'
import {List as MUIList,ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryAction,IconButton,Slide} from '@material-ui/core'
import { Delete ,MoneyOff} from '@material-ui/icons'
import {ExpenseTrackerContext} from '../../../Contaxt/Contaxt'
import useStyles from './styles'

const List = () => {
    const styles = useStyles();
    const { deleteTransaction , transaction }= useContext(ExpenseTrackerContext);
    // const transactions =[
    //     {id:1,type:'income' ,category : 'Salary' , amount:50 , date: new Date()},
    //     {id:2,type:'income' ,category : 'Salary' , amount:50 , date: new Date()},
    //     {id:3,type:'income' ,category : 'Salary' , amount:50 , date: new Date()},
    //     {id:4,type:'income' ,category : 'Salary' , amount:50 , date: new Date()}
    // ];
    return (
        <MUIList dense={false} className ={styles.list}>
            {transaction.map((transaction)=>(
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar> 
                            <Avatar className={transaction.type==='income' ? styles.avatarIncome : styles.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`₹${transaction.amount} - ${transaction.date}`}/>
                        <ListItemSecondaryAction>
                            <IconButton edge= 'end' aria-label = 'delete' onClick ={()=>deleteTransaction(transaction.id)}>
                                <Delete/>
                            </IconButton> 
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
            
        
    )
}

export default List;
