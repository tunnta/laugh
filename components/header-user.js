import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CreateTitle from './create';


import { useUser } from '@auth0/nextjs-auth0';

import Avatar from '@material-ui/core/Avatar';

import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';



const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  
  toolbar: {
    minHeight: 158,
    alignItems: 'flex-start',
   
    
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    marginLeft:'2%',
    marginBottom:'3%',
  },
  large: {
    
    marginLeft:'10%',
    marginTop:'5%'
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Styleset = () => {
  return useStyles();
}

const Rset = () => {
  return React.useState(0);
}

function PromAppBar(props) {

  const { user, error, isLoading } = useUser();

if (isLoading) return <div>Loading...</div>;
if (error) return <div>{error.message}</div>;

  const classes = Styleset();
  const [value, setValue] = Rset();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar className={classes.toolbar}>

        <Avatar alt="Remy Sharp" src={user.picture} className={classes.large}/>
         
          <Typography className={classes.title} variant="h5" noWrap>
            {user.name}
          </Typography>
          
          
        </Toolbar>

        

  
    
      
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      
      


      </AppBar>

      <TabPanel value={value} index={0}>
      <CreateTitle title ={props.title}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    

    </div>
  );
}
export default PromAppBar;