import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../Images/1.png';
import './carousel.css';
import { Button } from '@material-ui/core';
import { Delete, CloudUpload, DomainDisabled } from "@material-ui/icons";
import axios from 'axios';
import { useState } from "react";
import { storage } from "../firebase";
import {db} from "../firebase";
import { useEffect } from "react";
var React = require('react');
var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

const DemoCarousel = () => {
   
    const [image, setImage] = useState(null);
    const [urlArray, setUrlArray] = useState([]);
    const [progress, setProgress] = useState(0);
    
    useEffect(()=>{
        db.collection("imagesUrl").onSnapshot((snapshot)=>
        setUrlArray(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
        )
        );
    },[] )

    const selectFileHandler = (event) => {
        if (event.target.files[0]) {
            setImage(event.target.files[0]);
        }

    }

    const uploadFileHandler = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            error => {
                console.log(error);
            },
            () => {
                storage.ref("images").child(image.name).getDownloadURL().then(url => {
                    urlArray.push(url);
                    console.log(urlArray);
                    db.collection("imagesUrl").add({
                        imageUrl: url
                    });

                })
            }
        )
    }

{/* <img alt="" src={urlArray[1]} height="400" width="480" /> */}
    return (
        <div className="carousel">

            <Carousel autoPlay  interval="2000" infiniteLoop swipeable emulateTouch dynamicHeight showThumbs={false} >

               { urlArray.map((url)=>
                  ( <div>

                       <img alt="No Image Loaded" src={url.data.imageUrl} height="400" width="480" />
                   </div>)
                )}

                {/* <div>
                <img alt="" src={urlArray[1]} height="400" width="480" />    
                    <p className="legend">Legend 14</p>
                </div> */}
            </Carousel>
            <div className="carousel_actions">

                <progress value={progress} max="100" />
                <br />
                <input type="file" onChange={selectFileHandler} />

                <Button
                    onClick={uploadFileHandler}
                    variant="contained"
                    color="default"
                    // className="uploadButton"
                    startIcon={<CloudUpload />}
                >
                    Upload
    </Button>


                <Button
                    variant="contained"
                    color="red"
                    // className="deleteButton"
                    startIcon={<Delete />}
                    style={{ margin: "55px" }}
                >
                    Delete
    </Button>


            </div>
        </div>

    );



}
export default DemoCarousel;
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page 
// <link rel="stylesheet" href="carousel.css"/>


