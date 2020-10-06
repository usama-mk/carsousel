import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../Images/1.png';
import './carousel.css';
var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

function DemoCarousel()  {
  
        return (
            <div className="carousel">

            <Carousel autoPlay swipeable emulateTouch dynamicHeight showThumbs={false} >
    <div>
      <img alt="" src={img1} height="400" width="480" />
      {/* <p className="legend">Legend 1</p> */}
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
      <p className="legend">Legend 3</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
      <p className="legend">Legend 4</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
      <p className="legend">Legend 5</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
      <p className="legend">Legend 6</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
      <p className="legend">Legend 7</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
      <p className="legend">Legend 8</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
      <p className="legend">Legend 9</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
      <p className="legend">Legend 10</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg" />
      <p className="legend">Legend 11</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg" />
      <p className="legend">Legend 12</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg" />
      <p className="legend">Legend 13</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
      <p className="legend">Legend 14</p>
    </div>
  </Carousel>
            </div>
        );
    
};
export default DemoCarousel;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
 
// Don't forget to include the css in your page 
// <link rel="stylesheet" href="carousel.css"/>



