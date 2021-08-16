import React, { Component } from 'react'

export default class Blog extends Component {
    render() {
        return (
            <div className="col-lg-3 col-md-6 col-12 col-sm-6"> 
            <div className="blogThumb">
              <div className="thumb-center"><img className="img-responsive" alt="user" src="https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp" /></div>
              <div className="course-box">
                <h4 style={{color:'black'}}>Blog About This Website</h4>
                <div className="text-muted"><span className="m-r-10">August 15</span> 
                  <a className="course-likes m-l-10" href="#"><i className="fa fa-heart-o" /> </a>
                </div>
                <p><span><i className="ti-user" /> Published By: Favorite Flyers</span></p>
            
  
  
                <a href="/blog/2" type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-success">Read More</a>
              </div>
            </div>	
          </div>
        )
    }
}
