import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useUser } from '@auth0/nextjs-auth0';
import {useState} from 'react'

function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [answer, setAnswer] = useState('')
  const handleChange = (e) => setAnswer(e.target.value) 
  const { user } = useUser();

  const doReload=()=>{
    window.location.reload();
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePost = () => {
    fetch('https://kakkowarai.herokuapp.com/answer', {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify({
          answer: answer,
          content_id: props.title.id,
          user_sub: user.sub,
          name: user.name,           
        })
      })
      setTimeout(doReload, 1000);
  };

  if (user && props.title == "presence") return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>  
          <TextField
            autoFocus
            margin="dense"
            id="name"
            InputProps={{
              readOnly: true,
              }}
              defaultValue="ログイン後のみ投稿可能です"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>閉じる</Button>
          <Button onClick={handlePost}>投稿</Button>
        </DialogActions>
      </Dialog>
    </div>
    );

  if (user) return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle></DialogTitle>
        <DialogContent>  
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="回答"
            value = {answer}
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>閉じる</Button>
          <Button onClick={handlePost}>投稿</Button>
        </DialogActions>
      </Dialog>
    </div>
    );

    if(!user) return(
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle></DialogTitle>
          <DialogContent>

            <TextField
              autoFocus
              margin="dense"
              id="name"
              InputProps={{
              readOnly: true,
              }}
              defaultValue="ログイン後のみ投稿可能です"
              fullWidth
              variant="standard"
            />
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>閉じる</Button>
        </DialogActions>
      </Dialog>
    </div>
    );
  
}

export default FormDialog;