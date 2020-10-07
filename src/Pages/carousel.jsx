import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carousel.css';
import { Button, IconButton } from '@material-ui/core';
import { Delete, CloudUpload, VerifiedUser, Home } from "@material-ui/icons";
import { useState } from "react";
import { storage } from "../firebase";
import { db } from "../firebase";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { adminCheck } from "./Login";
var React = require('react');
var Carousel = require('react-responsive-carousel').Carousel;


const DemoCarousel = (props) => {


    const form = "https://goasolutions.paperform.co/";
    const [image, setImage] = useState(null);
    const [urlArray, setUrlArray] = useState([]);
    const [progress, setProgress] = useState(0);
    const [adminCheck, setAdminCheck] = useState(props.adminCheckP);
    console.log("admin pppp check: ")
    console.log(props.adminCheckP);



    useEffect(() => {
        db.collection("imagesData").onSnapshot((snapshot) =>
            setUrlArray(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, [])

    const selectFileHandler = (event) => {
        if (event.target.files[0]) {
            setImage(event.target.files[0]);
        }

    }

    const deleteImage = (id, name) => {
        db.collection("imagesData").doc(id).delete();
        //delete from storage


        // var desertRef = storage.ref(`images/${image.name}`);
        // desertRef.delete().then(function() {
        //     // File deleted successfully
        //   }).catch(function(error) {
        //     // Uh-oh, an error occurred!
        //     console.log(error);
        //   });
    }

    const uploadFileHandler = () => {
        if (image) {
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
                        db.collection("imagesData").add({
                            imageUrl: url,
                            imageName: image.name
                        });

                    })
                }
            )
        }
    }



    return (
        true ? <div className="carousel">

            <Carousel autoPlay interval="2000" infiniteLoop swipeable emulateTouch dynamicHeight showThumbs={false} >

                {urlArray.map((url) =>
                    (<div>

                        <IconButton href={form} style={{ width: "99vw" }}>
                            <img alt="Not Loaded" src={url.data.imageUrl} height="400" width="480" />

                        </IconButton>
                        <br />
                        {props.adminCheckP ? (<Button
                            onClick={() => { deleteImage(url.id, url.data.imageName) }}
                            variant="contained"
                            color="default"
                            // className="deleteButton"
                            startIcon={<Delete />}
                            style={{ margin: "0", position: "relative", bottom: "40px" }}
                        >
                            Delete
                        </Button>) : <div> </div>}

                    </div>)
                )}

                {/* <div>
                <img alt="" src={urlArray[1]} height="400" width="480" />    
                    <p className="legend">Legend 14</p>
                </div> */}
            </Carousel>
            {props.adminCheckP ? (<div className="carousel_actions">

                <progress value={progress} max="100" />
                <br />
                <input type="file" onChange={selectFileHandler} id="upload-button" />

                <Button
                    onClick={uploadFileHandler}
                    variant="contained"
                    color="primary"
                    // className="uploadButton"
                    startIcon={<CloudUpload />}
                >
                    Upload
</Button>



                <a href="/carsousel">

                    <Button
                        variant="contained"
                        color="secondary"
                        // className="uploadButton"
                        startIcon={<Home />}
                    >
                        Home
</Button>
                </a>






            </div>) : (<div>
                <a href={"/admin"}>

                    <Button
                        // onClick={adminHandler}
                        variant="contained"
                        color="primary"
                        // className="uploadButton"
                        startIcon={<VerifiedUser />}
                    >
                        Admin Login
</Button>
                </a>

            </div>)}

        </div> : <div><h1>hi</h1></div>

    );

}
export default DemoCarousel;



