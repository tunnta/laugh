import {React,useRef} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import 'whatwg-fetch'


const Login=()=>{


    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}

    const name_you = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const password_confirmation = useRef(null)

    const set=()=>{fetch('http://localhost:3001/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name_you.current.value,
          email: email.current.value,
          password: password.current.value,
          password_confirmation: password_confirmation.current.value,
        })
      }).then(function(response) {
        console.log(response.headers)
        console.log(response.headers.get('uid'))
        console.log(response.headers.get('provider'))
      })
    
    }

    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                
                <TextField inputRef = {name_you} label='name_you' placeholder='名前' fullWidth required/>
                <TextField inputRef = {email} label='email' placeholder='メールアドレス' fullWidth required/>
                <TextField inputRef = {password} label='password'  placeholder='パスワード' type='password' fullWidth required/>
                <TextField inputRef = {password_confirmation} label='password_confirmation'  placeholder='もう一度' type='password' fullWidth required/>
                
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' onClick = {set} color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
               
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
        
    )
}






export default Login
