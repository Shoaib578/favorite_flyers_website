import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Loading from '../components/Loading';

import Home from '../components/Home/Home'

import Header from '../components/Header/Header'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import Browse_flyers from '../components/Flyers/Browse_flyers';
import Profile from '../components/Profile/Profile';
import EditProfile from '../components/Profile/EditProfile'
import MyFavoriteFlyers from '../components/Flyers/MyFavoriteFlyers'
import Readmore from '../components/Flyers/Readmore'
import Blogs_Page from '../components/Blogs/Blogs_Page'
import View_Blog from '../components/Blogs/View_Blog'
import AdvertiseWithUsRegisteration from '../components/Auth/advertise_with_registeration'


//admin


import AdminLogin from '../components/Admin/AdminLogin'
import AdminHome from '../components/Admin/AdminHome'

class Routes extends React.Component {
    state = {
        isLoading:true,
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({isLoading:false})
        },2000)
    }
    render(){
        if(!this.state.isLoading){

        return(
            <Router>
         
               
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/flyers" component={Browse_flyers}/>
                    <Route exact path="/user/:id/profile" component={Profile}/>

                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/advertisement_login" component={AdvertiseWithUsRegisteration}/>

                    <Route exact path="/user/:id/edit/" component={EditProfile}/>
                    <Route exact path="/favorite_flyers/user/:id/" component={MyFavoriteFlyers}/>
                    <Route exact path="/view_flyer/:id/" component={Readmore}/>
                    <Route exact path="/blogs" component={Blogs_Page}/>
                    <Route exact path="/blog/:id" component={View_Blog}/>




                    {/* Admin */}

                    <Route exact path="/admin/login" component={AdminLogin}/>
                    <Route exact path="/admin/home" component={AdminHome}/>

                </Switch>
            </Router>
        )
    }else{
        return <Loading />
    }

    }
}

export default Routes