import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    'left':'0',
    'display': 'block',
    'position':'absolute',
    'margin-left':'5%',
    'margin-top':'2%',
  },
  paper: {
    
    
    height:'30vh',
    width:250,
    padding:'10% 10% 0% 10%',
    
    color: theme.palette.text.secondary,
    wordBreak:'break-all',
    

  },
}));

const backgraoundStyle = {'position':'relative', padding:20,'left': "3%",height:'112vh',width:920}

export default function AutoGrid(props) {
  const classes = useStyles();

  return (
    <Paper style={backgraoundStyle}>
    <div className={classes.root}>
      <Grid container spacing={4}>

      {props.title.map((prop) => (
        
        <Link key ={prop.id} href={{pathname:'/[id]', query: { id: prop.id }}}>

        <Grid item >
        
        <Paper className={classes.paper} style = {{fontSize:prop.size + '%'}} >{prop.title}</Paper>
        
      </Grid>

      </Link>
       
      ))}
        
      </Grid>
     
    </div>
    </Paper>
  );
}