import Paper from '@material-ui/core/Paper';
import IconButton from '@mui/material/IconButton';
import RecommendIcon from '@mui/icons-material/Recommend';
import { useUser } from '@auth0/nextjs-auth0';
import React,{useRef,useState} from 'react'


export default function AnswerPaper(props) {

    const paperstyle = {height:'40vh',width:820,padding:90,fontSize:30,'backgroundImage':'url(/edge1.png)','backgroundSize':'cover'}
    const root = {'position':'absolute'}
    const ref = useRef([]);

    const [colstate , setState] = useState(props.data);
    console.log(colstate[0].good);
    
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

        fetch('http://localhost:3001/good_users', {
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

     fetch('http://localhost:3001/good_users', {
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
        <div style ={root}>  
            {props.data.map((prop,index) => (  

            <Paper key ={prop.id} elevation={0} style = {paperstyle}>{prop.answer}
            
             <IconButton 
             aria-label="recommend"
             
             onClick = {() => {goodPost(prop.id,ref.current[prop.id].current.style.Color),ChangeColor(prop.id,ref.current[prop.id].current.style.Color,index)}}
             >
               <div id = {prop.id} ref = {ref.current[prop.id]} style={{Color: colstate[index].good}}>
                    <RecommendIcon style = {{color: colstate[index].good}}/>
                    
              </div>

          </IconButton>
            
            </Paper>

            ))}

         

          

        </div>
    )

    if (props.data) return (

      <div style ={root}>  
          {props.data.map((prop) => (  

          <Paper elevation={0} style = {paperstyle}>{prop.answer}

          
          
          </Paper>

          ))}

       

        

      </div>
  )

    if (!props.data) return(
        <div>  
            
          

        </div>
    )

    
           
}