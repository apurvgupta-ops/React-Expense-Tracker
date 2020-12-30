import React from 'react'
import {Grid } from '@material-ui/core'
import Details from './components/Details/Details'
import Main from './components/Main/Main'
import useStyles from './styles'
import {PushToTalkButton,PushToTalkButtonContainer ,ErrorPanel} from '@speechly/react-ui'
const App = () => {
    const styles  = useStyles();
    const func =()=>{
        var context = new AudioContext();

    context.resume().then(()=>{
        console.log('Playback resumed successfully')
    })
    }
    return (
        <div>
        <Grid className = {styles.grid} container spacing = {0} alignItems = 'center' justify = 'center' style = {{height:'100vh'}}>
            <Grid item xs ={12} sm ={4} className = {styles.mobile}><Details title = 'Income'/></Grid>
            <Grid item xs ={12} sm ={3} className = {styles.main}><Main/></Grid>
            {/* <Grid item xs ={12} sm ={4} className = {styles.mobile}><Details title = 'Income'/></Grid> */}
            <Grid item xs ={12} sm ={4} className = {styles.last}><Details title = 'Expense'/></Grid>
        </Grid>
        <button onClick = {func}>test </button>

        <PushToTalkButtonContainer>
            <PushToTalkButton/>
            <ErrorPanel/>
        </PushToTalkButtonContainer>
    
            
        </div>
    )
}

export default App;
