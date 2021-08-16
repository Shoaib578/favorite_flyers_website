import React from 'react'
import { Dots } from "react-activity";
import "react-activity/dist/Dots.css";

class Loading extends React.Component{
    render(){
        return(
            <div style={{justifyContent:'center',alignItems:'center',}}>
                <center >
                    
                <h1 class="font-weight-bold" style={{color:'#65e295',marginTop:250}}>
                    
                    Favorite Flyers..</h1>
                <Dots  style={{color:'#65e295',width:100,height:100,}}/>
                  
                </center>


            </div>
        )
    }
}

export default Loading