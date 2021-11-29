import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import Typography from '@material-ui/core/Typography';

import { Select } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import { useUser } from '@auth0/nextjs-auth0';

import {React,useState} from 'react'
import { Grid,Paper} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

function CreateTitle(props) {

    const [select, setSelect] = useState("200")
    const handleselect = (e) => setSelect(e.target.value) 

    const [title, setTitle] = useState('')
    const handleOnChange = (e) => setTitle(e.target.value) 

    const paperStyle={'position':'relative', padding :20,height:'82vh',width:580, margin:"20px auto"}
    const paper3Style={'bottom': '15%','left':'28.5%','position':'absolute',height:'30vh',width:250, margin:"0% 4% 2% 0%", backgroundColor: "hsl(160, 100%, 75%)","overflow": "hidden"}
    const textfield={width:270,'bottom':'0','position':'absolute',margin:"0% 0% 55% 0%",'right':'27%'}
    const lookImage={'position':'absolute',margin:'10% 10% 0% 10%',textAlign:"center",'whiteSpace':'preLine',"fontSize":select+"%"}
    const selectStyle={'right':'10%','position':'absolute',width:60}
    const typeStyle={'marginTop':'40%','position':'absolute'}

    

    const { user } = useUser();
     
    const titlePost=()=>{
      
      fetch('https://kakkowarai.herokuapp.com/title', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: title,
          size: select,
          sub: user.sub,
          switch: 1,          
        })
      })

      location.reload()

    }

    
  if (props.title[0] == 1) return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>  
            <Grid align='center'>
              <FormControl style = {selectStyle}>
                  <InputLabel id="demo-customized-select-label">fontsize</InputLabel>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    onChange={handleselect}
                    defaultValue = {200}
                  >
                      <MenuItem value={250}>大</MenuItem>
                      <MenuItem value={200}>中</MenuItem>
                      <MenuItem value={100}>小</MenuItem>
                  </Select>
              </FormControl>
                         
                    <TextField
                     style = {textfield}
                     id="standard-multiline-static"
                      label="お題"
                      multiline
                      rows={4}
                      value ={title}
                      onChange={handleOnChange}
                    />

                    <Paper elevation={0} style={paper3Style}>
                        <div style={lookImage}>{title}</div>
                    </Paper>
            </Grid>

                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={titlePost}
                  startIcon={<SaveIcon />}
                >
                    作成
                </Button>              
            </Paper>
        </Grid>
    </div>
  )

  if (props.title[0] == 0) return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Typography  style={typeStyle} variant="h5"　align='center' noWrap>
            現在のお題の掲載期間終了までお待ちください
          </Typography> 
        </Paper>
      </Grid>
    </div>
  )
}

export default CreateTitle;