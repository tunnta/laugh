import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useUser } from '@auth0/nextjs-auth0';
import yellow from "@material-ui/core/colors/yellow";
import FormDialog from './dialog';
import AnswerPaper from './answer-paper';
const useStyles = makeStyles(() => ({
    
    paper: {
    
    
        height:'49.3vh',
        
        width:400,
        margin:'0% 0% 0% 0%',
        padding:'1% 1% 1% 1%',
        'position':'absolute',
        wordBreak:'break-all',
        border: `3px solid ${yellow[200]}`,
    
      },
      paper2: {
    
    
        height:'51.5vh',
        
        width:400,
        margin:'25.06% 0% 0% 0%',
        padding:'1% 1% 1% 1%',
        'position':'absolute',
        wordBreak:'break-all',
        border: `3px solid ${yellow[200]}`,
    
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
        border: `3px solid ${yellow[200]}`,
    
      },

}));

export default function PromAppBar(props) {

    const classes = useStyles();
    
    const { user, error, isLoading } = useUser();

if (isLoading) return <div>Loading...</div>;
if (error) return <div>{error.message}</div>;  

    return (
      <div >  
  
    
                <Paper elevation={0} className={classes.paper} style = {{fontSize:props.title[0][0].size + 150 +'%'}}>{props.title[0][0].title}</Paper>

               <Paper elevation={0} className={classes.paper2} ><FormDialog title = {props.title[0][0]}/></Paper>
               <Paper elevation={0} className={classes.paper3} ><AnswerPaper data = {props.title[1]}/></Paper>
  
      </div>
    );
  }