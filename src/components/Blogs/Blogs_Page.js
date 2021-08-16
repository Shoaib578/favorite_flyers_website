import React, { Component } from 'react'
import Blog from './Blog'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
export default class Blogs_Page extends Component {
    render() {
        return (
            <div>
               <Header />
                

                <Sidebar />
                    <div className="page-content-wrapper">
        <div className="page-content">

        <div className="row">

                <Blog />
                <Blog />
                <Blog />
                <Blog />



            </div>
            </div>
            </div>  

            </div>
        )
    }
}
