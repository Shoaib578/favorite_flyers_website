import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSideBar from './AdminSideBar'
class AdminHome extends React.Component{
    render(){
        return(
            <div>
                <AdminHeader />
                <AdminSideBar />
            <div className="page-content-wrapper text-dark">
        <div className="page-content">
         
          {/* start widget */}
          <div className="state-overview">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-12">
                <div className="info-box bg-b-green">
                  <span className="info-box-icon push-bottom"><i className="material-icons">group</i></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Total Users</span>
                    <span className="info-box-number">450</span>
                    <div className="progress">
                      <div className="progress-bar" style={{width: '45%'}} />
                    </div>
                    <span className="progress-description">
                      45% Increase in 28 Days
                    </span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-xl-3 col-md-6 col-12">
                <div className="info-box bg-b-yellow">
                  <span className="info-box-icon push-bottom"><i className="material-icons">person</i></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Total Flyers</span>
                    <span className="info-box-number">155</span>
                    <div className="progress">
                      <div className="progress-bar" style={{width: '40%'}} />
                    </div>
                    <span className="progress-description">
                      40% Increase in 28 Days
                    </span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-xl-3 col-md-6 col-12">
                <div className="info-box bg-b-blue">
                  <span className="info-box-icon push-bottom"><i className="material-icons">school</i></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Total Fees</span>
                    <span className="info-box-number">$52000</span>
                    <div className="progress">
                      <div className="progress-bar" style={{width: '85%'}} />
                    </div>
                   
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
              <div className="col-xl-3 col-md-6 col-12">
                <div className="info-box bg-b-pink">
                  <span className="info-box-icon push-bottom"><i className="material-icons">monetization_on</i></span>
                  <div className="info-box-content">
                    <span className="info-box-text">Fees Collection</span>
                    <span className="info-box-number">13,921</span><span>$</span>
                    <div className="progress">
                      <div className="progress-bar" style={{width: '50%'}} />
                    </div>
                    <span className="progress-description">
                      50% Increase in 28 Days
                    </span>
                  </div>
                  {/* /.info-box-content */}
                </div>
                {/* /.info-box */}
              </div>
              {/* /.col */}
            </div>
          </div>
          {/* end widget */}
          {/* chart start */}
          <div className="row">
            <div className="col-sm-8">
              <div className="card card-box">
                <div className="card-head">
                  <header>Flyers Survey</header>
                  <div className="tools">
                    <a className="fa fa-repeat btn-color box-refresh" href="javascript:;" />
                    <a className="t-collapse btn-color fa fa-chevron-down" href="javascript:;" />
                    <a className="t-close btn-color fa fa-times" href="javascript:;" />
                  </div>
                </div>
                <div className="card-body no-padding height-9">
                  <div className="row">
                    <canvas id="canvas1" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card card-box">
                <div className="card-head">
                  <header>Coupons Survey</header>
                  <div className="tools">
                    <a className="fa fa-repeat btn-color box-refresh" href="javascript:;" />
                    <a className="t-collapse btn-color fa fa-chevron-down" href="javascript:;" />
                    <a className="t-close btn-color fa fa-times" href="javascript:;" />
                  </div>
                </div>
                <div className="card-body no-padding height-9">
                  <div className="row">
                    <canvas id="chartjs_pie" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Chart end */}
          {/* start course list */}
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12 col-sm-6"> 
              <div className="blogThumb">
                <div className="thumb-center"><img className="img-responsive" alt="user" src="https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp" /></div>
                <div className="course-box">
                  <h4>Flyers</h4>
                  <div className="text-muted"><span className="m-r-10">April 23</span> 
                    <a className="course-likes m-l-10" href="#"><i className="fa fa-heart-o" /> 654</a>
                  </div>
                  <p><span><i className="ti-user" />Published By : Jane Doe</span></p>
                  <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info">Read More</button>
                </div>
              </div>	
            </div>
            <div className="col-lg-3 col-md-6 col-12 col-sm-6"> 
              <div className="blogThumb">
                <div className="thumb-center"><img className="img-responsive" alt="user" src="https://sleepy-gorge-75981.herokuapp.com/assets/img/flyer2.webp" /></div>
                <div className="course-box">
                  <h4>Flyers</h4>
                  <div className="text-muted"><span className="m-r-10">April 23</span> 
                    <a className="course-likes m-l-10" href="#"><i className="fa fa-heart-o" /> 654</a>
                  </div>
                
                  <p><span><i className="ti-user" />Published By : Jane Doe</span></p>
                  <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info">Read More</button>
                </div>
              </div>	
            </div>
            <div className="col-lg-3 col-md-6 col-12 col-sm-6"> 
              <div className="blogThumb">
                <div className="thumb-center"><img className="img-responsive" alt="user" src="https://sleepy-gorge-75981.herokuapp.com/assets/img/flyer3.webp" /></div>
                <div className="course-box">
                  <h4>Flyers</h4>
                  <div className="text-muted"><span className="m-r-10">April 23</span> 
                    <a className="course-likes m-l-10" href="#"><i className="fa fa-heart-o" /> 654</a>
                  </div>
                  <p><span><i className="ti-alarm-clock" /> Duration: 6 Months</span></p>
                  <p><span><i className="ti-user" />Published By : Jane Doe</span></p>
                  <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info">Read More</button>
                </div>
              </div>	
            </div>
            <div className="col-lg-3 col-md-6 col-12 col-sm-6">  
              <div className="blogThumb">
                <div className="thumb-center"><img className="img-responsive" alt="user" src="https://sleepy-gorge-75981.herokuapp.com/assets/img/flyer4.webp" /></div>
                <div className="course-box">
                  <h4>Flyers</h4>
                  <div className="text-muted"><span className="m-r-10">April 23</span> 
                    <a className="course-likes m-l-10" href="#"><i className="fa fa-heart-o" /> 654</a>
                  </div>
                  <p><span><i className="ti-user" />Published By :  Jane Doe</span></p>
      
                  <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-info">Read More</button>
                </div>
              </div>	
            </div>
          </div>
          {/* End course list */}
          <div className="row">
          
           
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="card-box">
                <div className="card-head">
                  <header>New Bussiness Client</header>
                  <button id="panel-button8" className="mdl-button mdl-js-button mdl-button--icon pull-right" data-upgraded=",MaterialButton">
                    <i className="material-icons">more_vert</i>
                  </button>
                  <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" data-mdl-for="panel-button8">
                    <li className="mdl-menu__item"><i className="material-icons">assistant_photo</i>Action</li>
                    <li className="mdl-menu__item"><i className="material-icons">print</i>Another action</li>
                    <li className="mdl-menu__item"><i className="material-icons">favorite</i>Something else here</li>
                  </ul>
                </div>
                <div className="card-body ">
                  <div className="table-responsive">
                    <table className="table table-striped custom-table table-hover">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                         
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>23</td>
                          <td>John Smith</td>
                          <td><div id="sparkline" /></td>
                          <td><a href="javascript:void(0)" className data-toggle="tooltip" title="Edit">
                              <i className="fa fa-check" /></a> 
                            <a href="javascript:void(0)" className="text-inverse" title="Delete" data-toggle="tooltip">
                              <i className="fa fa-trash" /></a>
                          </td>
                        </tr>
                        <tr>
                          <td>12</td>
                          <td>Sneha Pandit</td>
                          <td><div id="sparkline1" /></td>
                          <td><a href="javascript:void(0)" className data-toggle="tooltip" title="Edit">
                              <i className="fa fa-check" /></a> 
                            <a href="javascript:void(0)" className="text-inverse" title="Delete" data-toggle="tooltip">
                              <i className="fa fa-trash" /></a>
                          </td>
                        </tr>
                        <tr>
                          <td>45</td>
                          <td>Sarah Smith</td>
                          <td><div id="sparkline2" /></td>
                          <td><a href="javascript:void(0)" className data-toggle="tooltip" title="Edit">
                              <i className="fa fa-check" /></a> 
                            <a href="javascript:void(0)" className="text-inverse" title="Delete" data-toggle="tooltip">
                              <i className="fa fa-trash" /></a>
                          </td>
                        </tr>
                        <tr>
                          <td>34</td>
                          <td>John Deo</td>
                          <td><div id="sparkline3" /></td>
                          <td><a href="javascript:void(0)" className data-toggle="tooltip" title="Edit">
                              <i className="fa fa-check" /></a> 
                            <a href="javascript:void(0)" className="text-inverse" title="Delete" data-toggle="tooltip">
                              <i className="fa fa-trash" /></a>
                          </td>
                        </tr>
                        <tr>
                          <td>15</td>
                          <td>Jay Soni</td>
                          <td><div id="sparkline4" /></td>
                          <td><a href="javascript:void(0)" className data-toggle="tooltip" title="Edit">
                              <i className="fa fa-check" /></a> 
                            <a href="javascript:void(0)" className="text-inverse" title="Delete" data-toggle="tooltip">
                              <i className="fa fa-trash" /></a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* start new student list */}
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="card  card-box">
                <div className="card-head">
                  <header>New Flyers</header>
                  <div className="tools">
                    <a className="fa fa-repeat btn-color box-refresh" href="javascript:;" />
                    <a className="t-collapse btn-color fa fa-chevron-down" href="javascript:;" />
                    <a className="t-close btn-color fa fa-times" href="javascript:;" />
                  </div>
                </div>
                <div className="card-body ">
                  <div className="table-wrap">
                    <div className="table-responsive">
                      <table className="table display product-overview mb-30" id="support_table">
                        <thead>
                          <tr>
                            <th>id</th>
                            <th>Title</th>
                          
                            <th>Date Of Admit</th>
                            
                            <th>Action</th>
                          </tr>
                        </thead>
                      
                      </table>
                    </div>
                  </div>	
                </div>
              </div>
            </div>
          </div>
          {/* end new student list */}
        </div>
      </div>
      </div>
        )
    }
}

export default AdminHome