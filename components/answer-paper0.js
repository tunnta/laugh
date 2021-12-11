import Paper from '@material-ui/core/Paper';
import RecommendIcon from '@mui/icons-material/Recommend';
import React from 'react'



export default function AnswerPaper0(props) {

    const paperstyle = {'position':'relative',height:'40vh',width:820,padding:90,fontSize:30,'backgroundImage':'url(/f1391_2.png)',"backgroundRepeat":"noRepeat",'backgroundSize':'100% 100%',"backgroundPosition":"center center",'textAlign': 'center'}
    const paperstyle1 = {'position':'relative',height:'40vh',width:820,padding:90,fontSize:30,'backgroundImage':'url(/f0919_5.png)',"backgroundRepeat":"noRepeat",'backgroundSize':'100% 100%',"backgroundPosition":"center center",'textAlign': 'center'}
    const paperstyle2 = {'position':'relative',height:'40vh',width:820,padding:90,fontSize:30,'backgroundImage':'url(/f0919_52.png)',"backgroundRepeat":"noRepeat",'backgroundSize':'100% 100%',"backgroundPosition":"center center",'textAlign': 'center'}
    const paperstyle3 = {'position':'relative',height:'40vh',width:820,padding:90,fontSize:30,'backgroundImage':'url(/f0919_53.png)',"backgroundRepeat":"noRepeat",'backgroundSize':'100% 100%',"backgroundPosition":"center center",'textAlign': 'center'}
    const goodstyle = {'position':'absolute',bottom: 0,marginBottom:20}
    const array = props.data.slice( 3 );

    if (props.data.length > 3) return (
      <div> 

        <Paper elevation={0} style = {paperstyle1}>{props.data[0].answer}
          <div style = {goodstyle}>       
            <RecommendIcon/>
            {props.data[0].count} by {props.data[0].name}
          </div>
        </Paper>

        <Paper elevation={0} style = {paperstyle2}>{props.data[1].answer}
          <div style = {goodstyle}>       
            <RecommendIcon/>
            {props.data[1].count} by {props.data[1].name}
          </div>
        </Paper>

        <Paper elevation={0} style = {paperstyle3}>{props.data[2].answer}
          <div style = {goodstyle}>       
            <RecommendIcon/>
            {props.data[2].count}  by {props.data[2].name}
          </div>
        </Paper>

    {array.map((prop,index) => (  
        <Paper key ={prop.id} elevation={0} style = {paperstyle}>{prop.answer}
          <div style = {goodstyle}>
            <RecommendIcon/>
            {props.data[index + 3].count}  by {props.data[index + 3].name}
          </div>
        </Paper>
    ))} 
       </div>
    )
    
if (props.data.length === 1) return (

     <div> 

        <Paper elevation={0} style = {paperstyle1}>{props.data[0].answer}
          <div style = {goodstyle}>           
            <RecommendIcon/>
            {props.data[0].count} by {props.data[0].name}
          </div>
        </Paper>

     </div>
 )
    
if (props.data.length === 2) return (

        <div> 

           <Paper elevation={0} style = {paperstyle1}>{props.data[0].answer}
             <div style = {goodstyle}>
                <RecommendIcon/>
                {props.data[0].count} by {props.data[0].name}
             </div>
           </Paper>

           <Paper elevation={0} style = {paperstyle2}>{props.data[1].answer}
             <div style = {goodstyle}>
                <RecommendIcon/>
                {props.data[1].count} by {props.data[1].name}
             </div>
           </Paper>

        </div>
        
 )
           
if (props.data.length === 3) return (
        <div > 

           <Paper elevation={0} style = {paperstyle1}>{props.data[0].answer} 
              <div style = {goodstyle}>
                <RecommendIcon style = {{color:"black"}}/>
                {props.data[0].count} by {props.data[0].name}
              </div>
            </Paper>

            <Paper elevation={0} style = {paperstyle2}>{props.data[1].answer}
              <div style = {goodstyle}>
                <RecommendIcon/>
                {props.data[1].count} by {props.data[1].name}
              </div>
           </Paper>

           <Paper elevation={0} style = {paperstyle3}>{props.data[2].answer}
               <div style = {goodstyle}>
                 <RecommendIcon />
                 {props.data[2].count} by {props.data[2].name}
               </div> 
           </Paper>

        </div>
 )
}