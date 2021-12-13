import Paper from '@material-ui/core/Paper';
import IconButton from '@mui/material/IconButton';
import RecommendIcon from '@mui/icons-material/Recommend';
import { useUser } from '@auth0/nextjs-auth0';
import React,{useRef,useState,useEffect} from 'react'


function AnswerPaper(props) {

    const paperstyle = {'position':'relative',height:'40vh',width:820,padding:90,fontSize:30,'backgroundImage':'url(/f1391_2.png)',"backgroundRepeat":"noRepeat",'backgroundSize':'100% 100%',"backgroundPosition":"center center",'textAlign': 'center'}
    const goodstyle = {'position':'absolute',bottom: 0,marginBottom:20}
    const ref = useRef([]);
    
    const [colstate , setState] = useState(props.data);
    
    //同じデータだとuseStateの再描画が起こらないため、空のarrayを追加
    const array = []
    const onemom = props.data.concat(array);

    
    props.data.forEach((prop) => {
      ref.current[prop.id] = React.createRef();
    });
    

    const { user } = useUser();
    const ChangeColor = (i,good,index) => {
      
      if (good == "gray")
         ref.current[i].current.style.Color = "blue"
          
      if (good == "blue")
        ref.current[i].current.style.Color = "gray"  
        onemom[index].good = ref.current[i].current.style.Color;
        setState(onemom);
        console.log(colstate[index].good)
      }

    const goodPost = (id,good) => {

     if (good == "gray")
        fetch('https://kakkowarai.herokuapp.com/good_users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          
          answer_id: id,
          sub:user.sub,
                 
        })
      })

     else
     fetch('https://kakkowarai.herokuapp.com/good_users', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        
        answer_id: id,
        sub:user.sub,
               
      })
    })
    }

//以下三択　

    if (props.data && user) return (
        <div>  
            {props.data.map((prop,index) => (  
            
            <Paper key ={prop.id} elevation={0} style = {paperstyle}>{prop.answer}
              <div style = {goodstyle} >
                <IconButton 
                  aria-label="recommend"
                  onClick = {() => {goodPost(prop.id,ref.current[prop.id].current.style.Color),ChangeColor(prop.id,ref.current[prop.id].current.style.Color,index)}}
                >
                  <div id = {prop.id}>
                 
                    <RecommendIcon ref = {ref.current[prop.id]} style = {{color: colstate[index].good}}/>
                 
                  </div>
                </IconButton>
              </div>
            </Paper>
            ))}
        </div>
    )

    if (props.data) return (
      <div>  
          {props.data.map((prop) => (  
             <Paper key ={prop.id} elevation={0} style = {paperstyle}>{prop.answer}
             </Paper>
          ))}
      </div>
  )

    if (!props.data) return(
        <div>  
          
        </div>
    )

           
}
export default AnswerPaper;