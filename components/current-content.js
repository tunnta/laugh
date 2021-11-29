import {React,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

const backgraoundStyle = {'position':'relative', padding:20,'left': "3%",height:'112vh',width:920,textAlign:"center"}
const arrow = {'position':'relative','left':'85%'}
const arrowhidden = {'visibility':'hidden'}

export default function AutoGrid(props) {
  const classes = useStyles();
  const[Np , setP] = useState(0);
  let array = [];
  let arrayAll = [];

  {props.title.map((prop,index) => (
    arrayAll[index] = [prop.title,prop.size,prop.id]
  ))}

  //emptyのときでもデータは一つ飛んでくるので別に0でもok
  let max = 0;
  max = arrayAll.length % 9

  if (arrayAll.length > 9){
     max = 9
  }

  for ( let i = 0 ; i < max ; i++ ){
    array[i] = [arrayAll[i][0],arrayAll[i][1],arrayAll[i][2]]
  };

  const[Array , setArray] = useState(array);

  const ChangePage = (Np) => {
     array = []
     max = arrayAll.length % 9

     if (arrayAll.length - (Np+1) * 9 > 9){
      max = 9
     }

     let cou = 0;
     
    for ( let i = 0 ; i < max ; i++ ){
      cou = (Np + 1) * 9 + i ;
      array[i] = [arrayAll[cou][0],arrayAll[cou][1],arrayAll[cou][2]];
    };

    setP(Np + 1);
    setArray(array);
  };

  const ChangePageBack = (Np) => {
    array = []

    for ( let i = 0 ; i < 9 ; i++ ){
      let cou = 0;
      cou = (Np - 1) * 9 + i ;
      array[i] = [arrayAll[cou][0],arrayAll[cou][1],arrayAll[cou][2]];
    };

    setP(Np - 1);
    setArray(array);
  }

  if (max < 9 && arrayAll.length < 9)return (
      <Paper style={backgraoundStyle}>
        <div className={classes.root}>
          <Grid container spacing={4}>

            {Array.map((array) => (
                <Link key = {array[2]} href={{pathname:'/[id]', query: { id: array[2] }}}>
                  <Grid item >
                    <Paper className={classes.paper} style = {{fontSize:array[1] + '%'}} >{array[0]}</Paper>
                  </Grid>
                </Link>
            ))}
          </Grid>
        </div>
      </Paper>
  );

  

if (max == 9 && Np == 0)return (
  <Paper style={backgraoundStyle}>
  <div className={classes.root}>

    <Grid container spacing={4}>

    {Array.map((array) => (
      
      <Link key = {array[2]} href={{pathname:'/[id]', query: { id: array[2], content: 1 }}}>

      <Grid item >
      
      <Paper className={classes.paper} style = {{fontSize:array[1] + '%'}} >{array[0]}</Paper>
      
    </Grid>

    </Link>
     
    ))}

          <IconButton 
           aria-label="recommend"
           onClick = {() => ChangePage(Np)}
           
           >
             <ArrowForwardIcon/>
          </IconButton>


    </Grid>
   
  </div>
  </Paper>
);

if (Np > 0 && arrayAll.length - Np * 9 <= 9)return (
  <Paper style={backgraoundStyle}>
  <div className={classes.root}>

    <Grid container spacing={4}>

    {Array.map((array) => (
      
      <Link key = {array[2]} href={{pathname:'/[id]', query: { id: array[2] , content: 1}}}>

      <Grid item >
      
      <Paper className={classes.paper} style = {{fontSize:array[1] + '%'}} >{array[0]}</Paper>
      
    </Grid>

    </Link>
     
    ))}


          <IconButton 
           
           onClick = {() => ChangePageBack(Np)}
           
           >
             <ArrowBackIcon/>
          </IconButton>


    </Grid>
   
  </div>
  </Paper>
);

if (Np > 0 && arrayAll.length - Np * 9 > 9)return (
  <Paper style={backgraoundStyle}>
  <div className={classes.root}>

    <Grid container spacing={4}>

    {Array.map((array) => (
      
      <Link key = {array[2]} href={{pathname:'/[id]', query: { id: array[2] , content: 1}}}>

      <Grid item >
      
      <Paper className={classes.paper} style = {{fontSize:array[1] + '%'}} >{array[0]}</Paper>
      
    </Grid>

    </Link>
     
    ))}

          <IconButton style = {arrowhidden}>
          <ArrowBackIcon/>
             
          </IconButton>

          <IconButton 
           
           onClick = {() => ChangePageBack(Np)}
           
           >
             <ArrowBackIcon/>
          </IconButton>

          <IconButton 

           style = {arrow}
           onClick = {() => ChangePage(Np)}
           
           >
             <ArrowForwardIcon/>
          </IconButton>


    </Grid>
   
  </div>
  </Paper>
);

}