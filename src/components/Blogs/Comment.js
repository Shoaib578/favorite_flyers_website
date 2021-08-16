import React from 'react';

class Comment extends React.Component {
    render(){
        return(
            <div style={{marginLeft:15,marginTop:20}}>
<img src="https://sleepy-gorge-75981.herokuapp.com/assets/img/logo.png" class="float-left" style={{width:100,height:100}}/>


<div style={{backgroundColor:'white',width:'70%',borderRadius:20,padding:5}}>
    
    <p><b>Shoaib </b>says :
    <p >December 2,2020</p>
     </p>
<p>Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte</p>
</div>

</div>
        )
    }
}

export default Comment