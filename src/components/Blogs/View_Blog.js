import React, { Component } from 'react'
import Header from '../Header/Header'
import Comment from './Comment'

export default class View_Blog extends Component {
    render() {
        return (
            <div style={{backgroundColor: '#65e295'}}>
                <Header />

                <div class="blog-img">
            <img src="https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp"
                style={{width: '100%',height:450}}
                 alt="Blog"/>
             </div>


            {/* Description Start */}
             <div style={{width:'100%',padding:20,backgroundColor:'white',borderRadius:20,}}>
                 <div class="blog-text">
                 <p class="float-right">
                                March 13,2020 -favorite flyer -21 Comments
                                </p>

                                
                                    <h3 style={{color:'black'}}>This is the Way of Title</h3>
                               

                                <br/>
                                
                                


                                
                                    <p >
                                        
                                        Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte liqum metus tortor. Lorem ipsum dolor sit amet elit. Neca pretim miura bitur facili ornare velit non vulpte
                                    </p>
                                   
                     </div>
                     
                 </div>

            {/* Description End */}


 {/* Create new Comment Start */}
             <div style={{marginTop:50}}>
                <h5 style={{marginLeft:15}}><b>Leave a Reply</b></h5>
                <h7 style={{marginLeft:15}}>Your email address will not be published. Required fields are marked *</h7>
                <br />
                <br />

                <h6 style={{marginLeft:15}}> Comment : </h6>

                <div class="form-group" style={{marginLeft:15,width:'80%',borderRadius:20}}>
                   
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>



                <h6 style={{marginLeft:15}}> Email : </h6>

                <div class="form-group" style={{marginLeft:15,width:'80%',borderRadius:20}}>
                   
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                   
                </div>
                <h6 style={{marginLeft:15}}> Name : </h6>

                <div class="form-group" style={{marginLeft:15,width:'80%',borderRadius:20}}>
                    
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name"/>
                </div>
               
                <br />
              

                <button style={{marginLeft:15}} className="btn btn-success  ">Post Comment</button>

             </div>
 {/* Create new Comment End */}





  <br />
  <br />
  <hr />  
  <br /> <br />


 {/* Comments Start */}
 <h5 style={{marginLeft:15}}><b>All the Comments</b></h5>
 <br /> <br />
<Comment />
<Comment />




 {/* Comments End */}


 <br />

            </div>
        )
    }
}
