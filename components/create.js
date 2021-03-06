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
import MediaQuery from "react-responsive";
function CreateTitle(props) {

    const [select, setSelect] = useState("140")
    const handleselect = (e) => setSelect(e.target.value) 

    const [title, setTitle] = useState('')
    const handleOnChange = (e) => setTitle(e.target.value) 

    const paperStyle={'position':'relative', padding :20,height:540,width:580, margin:"20px auto"}
    const paper3Style={'bottom': '15%','left':'28.5%','position':'absolute',height:180,width:250, margin:"0% 4% 2% 0%","overflow": "hidden"}
    const textfield={width:270,'bottom':'0','position':'absolute',margin:"0% 0% 55% 0%",'right':'27%'}
    const lookImage={'position':'absolute',margin:'10% 3% 0% 3%',textAlign:"center",'whiteSpace':'preLine',"fontSize":select+"%"}
    const selectStyle={'right':'10%','position':'absolute',width:60}
    const typeStyle={'marginTop':'40%','position':'absolute'}
    
    const paperMobileStyle={'position':'relative', padding :20,height:450,width:'70vw', margin:"20px auto"}
    const textfieldMobile={'bottom':'0','position':'absolute',margin:"0 0 90% 0", left: '50%',transform: 'translateX(-50%)','-webkit-transform': 'translateX(-50%)','-ms-transform': 'translateX(-50%)',}
    const paper3StyleMobile={'position':'absolute','bottom': '0%',height:'170px',width:'200px', top: '50%',left: '50%',transform: 'translateX(-50%)','-webkit-transform': 'translateX(-50%)','-ms-transform': 'translateX(-50%)',"overflow": "hidden","fontSize":select - 60 +"%"}
    const { user } = useUser();
    
    const doReload=()=>{
      window.location.reload();
    }
     
  const titlePost=()=>{

    if (title == []){alert( "????????????")}

    else{
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

      setTimeout(doReload, 3000);
    }
  }

return( 
  <div>
    <MediaQuery minWidth={415}>
      {props.title[0] == 1 &&(
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
                        defaultValue = {140}
                      >
                          <MenuItem value={180}>???</MenuItem>
                          <MenuItem value={140}>???</MenuItem>
                          <MenuItem value={100}>???</MenuItem>
                      </Select>
                  </FormControl>
                            
                        <TextField
                          style = {textfield}
                          id="standard-multiline-static"
                          label="??????"
                          multiline
                          rows={4}
                          value ={title}
                          onChange={handleOnChange}
                        />

                        <Paper elevation={2} style={paper3Style}>
                            <div style={lookImage}>{title}</div>
                        </Paper>
                </Grid>

                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      onClick={titlePost}
                      startIcon={<SaveIcon />}
                    >
                        ??????
                    </Button>              
            </Paper>
          </Grid>
        </div>
      )}

      {props.title[0] == 0&&(
          <div>
            <Grid>
              <Paper elevation={10} style={paperStyle}>
                <Typography  style={typeStyle} variant="h5" align='center' fontSize='40%' noWrap>
                  ???????????????????????????????????????????????????????????????
                </Typography> 
              </Paper>
            </Grid>
          </div>
        )}
    </MediaQuery>   
    <MediaQuery maxWidth={414}>
      {props.title[0] == 1 &&(
        <div>
          <Grid>
            <Paper elevation={10} style={paperMobileStyle}>  
                <Grid align='center'>
                  <FormControl style = {selectStyle}>
                      <InputLabel id="demo-customized-select-label">fontsize</InputLabel>
                      <Select
                        labelId="demo-customized-select-label"
                        id="demo-customized-select"
                        onChange={handleselect}
                        defaultValue = {140}
                      >
                          <MenuItem value={180}>???</MenuItem>
                          <MenuItem value={140}>???</MenuItem>
                          <MenuItem value={100}>???</MenuItem>
                      </Select>
                  </FormControl>
                            
                        <TextField
                          style = {textfieldMobile}
                          id="standard-multiline-static"
                          label="??????"
                          multiline
                          rows={4}
                          value ={title}
                          onChange={handleOnChange}
                        />

                        <Paper elevation={2} style={paper3StyleMobile}>
                            <div style={lookImage}>{title}</div>
                        </Paper>
                </Grid>

                    <Button
                      variant="contained"
                      color="secondary"
                      size="large"
                      onClick={titlePost}
                      startIcon={<SaveIcon />}
                    >
                        ??????
                    </Button>              
            </Paper>
          </Grid>
        </div>
      )}

      {props.title[0] == 0&&(
          <div>
            <Grid>
              <Paper elevation={10} style={paperMobileStyle}>
                <Typography  style={typeStyle} variant="h5"???align='center' noWrap>
                  ???????????????????????????????????????????????????????????????
                </Typography> 
              </Paper>
            </Grid>
          </div>
        )}
    </MediaQuery>
  </div>
)
}

export default CreateTitle;