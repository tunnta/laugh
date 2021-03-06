import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@material-ui/core/Typography';


export default function FolderList(props) {


  return (
    
    <List sx={{'boxShadow': '0 0 1.5px rgba(0,0,0,0.3)', 'borderRadius': '4px', width: 220,height: 280, bgcolor: 'background.paper','position':'relative','marginLeft':'1%' }}>
      <Typography variant="h5" style ={{"textAlign":"center"}} noWrap>Ranking</Typography>
      <ListItem sx={{"margin-left": "20%"}}>
        <ListItemAvatar>
          <Avatar src='/crown1.png' >
          
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary = {props.rank[0].name} secondary={"good" + props.rank[0].count} />
      </ListItem>
      <ListItem sx={{"margin-left": "20%"}}>
        <ListItemAvatar>
          <Avatar src='/crown2.png'>
            
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary = {props.rank[1].name} secondary={"good" + props.rank[1].count} />
      </ListItem>
      <ListItem sx={{"margin-left": "20%"}}>
        <ListItemAvatar>
          <Avatar src='/crown3.png'>
            
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary = {props.rank[2].name} secondary={"good" + props.rank[2].count} />
      </ListItem>
    </List>
    
  );
}