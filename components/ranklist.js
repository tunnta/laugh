import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

import FormGroup from '@material-ui/core/FormGroup';

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
      'right':'0',
      'position':'absolute',
      'margin-right':'5%',
      
      
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
      
    },
    title: {
      margin: theme.spacing(0, 7, 0),
    },
  }));
  
  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  
  export default function InteractiveList() {
    const classes = useStyles();
   
  
    return (
      <div className={classes.root}>
        <FormGroup row>
          
          
        </FormGroup>
        <Grid container spacing={2}>
          
          <Grid item xs={12} md={12}>
            <Typography variant="h6" className={classes.title}>
              ranking
            </Typography>
            <div className={classes.demo}>
              
                {generate(
                  <ListItem>
                    <ListItemIcon>
                      <FolderIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary="Single-line item"
                      secondary='Secondary text' 
                    />
                  </ListItem>,
                )}
              
            </div>
          </Grid>
        </Grid>
       
      </div>
    );
  }