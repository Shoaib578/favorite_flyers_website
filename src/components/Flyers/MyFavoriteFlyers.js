import React, { Component } from 'react'
import Flyer from './Flyer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'



export default class MyFavoriteFlyers extends Component {
    render() {
        return (
            <div>
                 <Header />
                

                <Sidebar />
                    <div className="page-content-wrapper">
        <div className="page-content">

        <div className="row">
            
            <Flyer />
            <Flyer />
            <Flyer />
            <Flyer />
            <Flyer />
            <Flyer />



            

            </div>
            </div>
            </div>
            </div>
        )
    }
}
