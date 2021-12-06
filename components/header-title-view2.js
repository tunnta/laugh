import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useUser } from '@auth0/nextjs-auth0';
import FormDialog from './dialog';
import AnswerPaper from './answer-paper';
import AnswerPaper0 from './answer-paper0';

const useStyles = makeStyles(() => ({
    
    paper: {
    
        height:'49.3vh',
        width:365,
        margin:'0% 0% 0% 0%',
        padding:'1% 1% 1% 1%',
        'position':'absolute',
        wordBreak:'break-all',
        border: `3px solid #808080`,
        'textAlign': 'center'
      },
      paper2: {
    
        height:'51.5vh',
        width:400,
        margin:'25.06% 0% 0% 0%',
        padding:'1% 1% 1% 1%',
        'position':'absolute',
        wordBreak:'break-all',
        border: `3px solid #808080`,
        'backgroundImage':'url(donut.png)',
        'backgroundSize':'contain',
        "background-position":"left bottom",
        "backgroundRepeat":"no-repeat",
      },
      paper3: {
        'position':'absolute',
        'overflow-y':'scroll',
        
        height:'100.5vh',
        width:900,
        margin:'0% 0% 0% 0%',
        padding:'1% 1% 1% 1%',
        right:0,
        wordBreak:'break-all',
        border: `3px solid #808080`,
    
      },

}));

function PromAppBar(props) {

    const classes = useStyles();
    
    const { error, isLoading } = useUser();

if (isLoading) return <div>Loading...</div>;
if (error) return <div>{error.message}</div>;  

if(props.title[0].answer === "emp")  return (
  <div> 

  </div>
  )

  if(props.count === 1)  return (
      <div >  
  
  <Paper style ={{"height":"100%","width":"100%","position":"relative"}}>
                <Paper elevation={0} className={classes.paper} style = {{fontSize:props.title[0][0].size + 150 +'%','textAlign': 'center'}}>{props.title[0][0].title}</Paper>

               <Paper elevation={0} className={classes.paper2} ><FormDialog title = {props.title[0][0]}/></Paper>
               <Paper elevation={0} className={classes.paper3} ><AnswerPaper data = {props.title[1]}/></Paper>
  </Paper>
      </div>
    );

    if(props.count === 0)  return (
      <div >  
  
            <Paper style ={{"height":"100%","width":"100%","position":"relative"}}>
                <Paper elevation={0} className={classes.paper} style = {{'textAlign': 'center',fontSize:props.title[0][0].size + 150 +'%'}}>{props.title[0][0].title}</Paper>

               <Paper elevation={0} className={classes.paper2} ></Paper>
               <Paper elevation={0} className={classes.paper3} ><AnswerPaper0 data = {props.title[1]}/></Paper>
            </Paper>
      </div>
    );
  }

  export default PromAppBar;