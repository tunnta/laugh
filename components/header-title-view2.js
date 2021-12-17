import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useUser } from '@auth0/nextjs-auth0';
import FormDialog from './dialog';
import AnswerPaper from './answer-paper';
import AnswerPaper0 from './answer-paper0';
import MediaQuery from "react-responsive";

const useStyles = makeStyles(() => ({
    
    paper: {
    
        height:'50vh',
        width:'28.5vw',
        margin:'0% 0% 0% 0%',
        padding:'1% 1% 1% 1%',
        'position':'absolute',
        wordBreak:'break-all',
        border: `3px solid #808080`,
        'textAlign': 'center',
        overflow: "hidden",
      },
      paper2: {
    
        height:'50.4vh',
        width:'28.5vw',
        bottom: '0%',
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
        right:'0%',
        height:'100vh',
        width:'71.7vw',
        margin:'0% 0% 0% 0%',
        padding:'1% 1% 1% 1%',
        right:0,
        wordBreak:'break-all',
        border: `3px solid #808080`,
    
      },
      mobile:{
        top:'9.6%',
        height:'50vh',
        width:'100vw',
        margin:'0% 0% 0% 0%',
        padding:'1% 1% 1% 1%',
        'position':'absolute',
        wordBreak:'break-all',
        border: `3px solid #808080`,
        'textAlign': 'center',
      },
      mobile1:{
        height:'10vh',
        width:'100vw',
        padding:'1% 1% 1% 1%',
        'position':'absolute',
        wordBreak:'break-all',
        border: `3px solid #808080`,
        'backgroundImage':'url(donut.png)',
        'backgroundSize':'contain',
        "background-position":"right bottom",
        "backgroundRepeat":"no-repeat",
      },
      mobile2:{
        'position':'absolute',
        'overflow-y':'scroll',
        bottom:'0',
        height:'40.9vh',
        width:"100vw",
        margin:'0% 0% 0% 0%',
        padding:'1% 1% 1% 1%',
        wordBreak:'break-all',
        border: `3px solid #808080`,
      }

}));

function PromAppBar(props) {

    const classes = useStyles();
    
    const { error, isLoading } = useUser();

if (isLoading) return <div>Loading...</div>;
if (error) return <div>{error.message}</div>;  

return(
  <div>
    
    {props.title[0].answer === "emp" &&( 
      <div> 
        loginして、お題を投稿!
      </div>
    )}

    {props.count === 1 && props.title[2] == "presence"&&(
      <div> 
        <MediaQuery minWidth={414}>
          <Paper elevation={0} className={classes.paper} style = {{fontSize:props.title[0][0].size + 90 +'%'}}>{props.title[0][0].title}</Paper>
          <Paper elevation={0} className={classes.paper2} ><FormDialog title = {props.title[2]}/></Paper>
          <Paper elevation={0} className={classes.paper3} ><AnswerPaper data = {props.title[1]}/></Paper>
        </MediaQuery>
        <MediaQuery maxWidth={414}>
          <Paper elevation={0} className={classes.mobile} style = {{fontSize:props.title[0][0].size + 90 +'%'}}>{props.title[0][0].title}</Paper>
          <Paper elevation={0} className={classes.mobile1} ><FormDialog title = {props.title[2]}/></Paper>
          <Paper elevation={0} className={classes.mobile2} ><AnswerPaper data = {props.title[1]}/></Paper>
        </MediaQuery>
      </div> 
    )}

    {props.count === 1 && props.title[2] == "nothing"&&(
      <div>
        <MediaQuery minWidth={414}>
          <Paper elevation={0} className={classes.paper} style = {{fontSize:props.title[0][0].size + 90 +'%'}}>{props.title[0][0].title}</Paper>
          <Paper elevation={0} className={classes.paper2} ><FormDialog title = {props.title[0][0]}/></Paper>
          <Paper elevation={0} className={classes.paper3} ><AnswerPaper data = {props.title[1]}/></Paper>
        </MediaQuery>
        <MediaQuery maxWidth={414}>
          <Paper elevation={0} className={classes.mobile} style = {{fontSize:props.title[0][0].size + 90 +'%'}}>{props.title[0][0].title}</Paper>
          <Paper elevation={0} className={classes.mobile1} ><FormDialog title = {props.title[0][0]}/></Paper>
          <Paper elevation={0} className={classes.mobile2} ><AnswerPaper data = {props.title[1]}/></Paper>
        </MediaQuery>
      </div>
    )}

    {props.count === 0 &&(
      <div > 
        <MediaQuery minWidth={414}>
          <Paper elevation={0} className={classes.paper} style = {{fontSize:props.title[0][0].size + 90 +'%'}}>{props.title[0][0].title}</Paper>
          <Paper elevation={0} className={classes.paper2} ></Paper>
          <Paper elevation={0} className={classes.paper3} ><AnswerPaper0 data = {props.title[1]}/></Paper>
        </MediaQuery>
        <MediaQuery maxWidth={414}>
          <Paper elevation={0} className={classes.paper} style = {{fontSize:props.title[0][0].size + 90 +'%'}}>{props.title[0][0].title}</Paper>
          <Paper elevation={0} className={classes.paper1} ></Paper>
          <Paper elevation={0} className={classes.paper2} ><AnswerPaper0 data = {props.title[1]}/></Paper>
        </MediaQuery>
      </div>
    )}
    
</div>

)
}

  export default PromAppBar;