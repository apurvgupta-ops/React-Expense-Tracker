import React,{useContext} from 'react'
import {Card,CardHeader,CardContent,Grid ,Typography ,Divider} from '@material-ui/core';
import {ExpenseTrackerContext} from '../../Contaxt/Contaxt'
import useStyles  from './styles'
import Form from './Form/Form'
import List from './List/List'
const Main = () => {
    const styles = useStyles();
    const {balance} =  useContext(ExpenseTrackerContext);
    return (

        <Card className = {styles.root}>
            <CardHeader title = 'Expense Tracker' subheader = 'Powered by speechly' ></CardHeader>
            <CardContent>
                <Typography align = 'center' variant = 'h5' >Total Balance is ₹{balance}</Typography>
                <Typography variant = 'subtitle1' style = {{lineHeight: '1.5em', marginTop:'20px'}}>
                    Try saying : Add Income for 100 Rupees in category salary for monday, You can customize your amount,category or date by saying.
                </Typography>
                <Divider/>
                <Form/>
            </CardContent>
            <CardContent className = {styles.CardContent}>
                <Grid container spacing = {2}>
                    <Grid item xs={12}>
                    <List/>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
            
        
    )
}

export default Main;
