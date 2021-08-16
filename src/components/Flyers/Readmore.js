import React, { Component } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: "https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp",
    thumbnail: "https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp",
  },
  {
    original: "https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp",
    thumbnail: "https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp",
  },
  {
    original: "https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp",
    thumbnail: "https://sleepy-gorge-75981.herokuapp.com/assets/img/flyers.webp",
  },
];
export default class Readmore extends Component {
    render() {
        return (
            <div >
                <Header />
               
                 <div >
                     <br />
                     <br />
                     <br />

                 <ImageGallery items={images} />;

                 </div>
                
            </div>
        )
    }
}
