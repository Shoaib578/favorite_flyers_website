import React, { Component } from 'react'
import Flyer from './Flyer'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

export default class Browse_flyers extends Component {
    render() {
        return (
            <div>
                 <Header />
                

                <Sidebar />
                    <div className="page-content-wrapper">
        <div className="page-content">

        <div className="row">
            
            <Flyer flyer={"https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp"} published_by={'incl safeway'}/>
            <Flyer flyer={"https://sleepy-gorge-75981.herokuapp.com/assets/img/flyer2.webp"} published_by={'incl no frills'}/>
            <Flyer flyer={"https://sleepy-gorge-75981.herokuapp.com/assets/img/flyer2.webp"} published_by={'incl no frills'}/>
            <Flyer flyer={"https://sleepy-gorge-75981.herokuapp.com/assets/img/flyer3.webp"} published_by={'incl babies rus'}/>
            <Flyer flyer={"https://sleepy-gorge-75981.herokuapp.com/assets/img/flyer4.webp"} published_by={'incl party city'}/>
            <Flyer flyer={"https://sleepy-gorge-75981.herokuapp.com/assets/img/flyer5.webp"} published_by={'incl shoppers'}/>
            



            

            </div>
            </div>
            </div>



            </div>
        )
    }
}
