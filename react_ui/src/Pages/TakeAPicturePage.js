import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import Webcam from "react-webcam";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CountDown from "../Components/CountDown";

import { Navigate, redirect } from "react-router-dom";

import storeApi from "../Apis/storeApi";
import axios from "axios";

const url_api = "http://127.0.0.1:5000";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
  screenshotQuality: 1,
};

export default function TakeAPicturePage() {
  const [countDownIsVisible, showCountDown] = useState(false);

  const [pictureShooted, setPictureShooted] = useState(null);

  const [isRedirected, setRedirected] = useState(false);

  const webcamRef = React.useRef(null);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    console.log(imageSrc);

    axios
      .post(url_api + "/ConvertToBackgroundTransparent", {
        image: imageSrc,
      })
      .then(function (response) {
        console.log(response.data);

        storeApi.setData("picture", response.data);

        setRedirected(true);
      })
      .catch(function (error) {
        console.log(error);
      });

    // setPictureShooted(imageSrc);
  }, [webcamRef]);

  const takeAPicture = () => {
    showCountDown(true);
  };

  return (
    <>
      {countDownIsVisible && <CountDown handle={capture}></CountDown>}

      {isRedirected && <Navigate to="/previewPicture" replace={true} />}

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid xs={8}>
          <Webcam
            audio={false}
            height={720}
            screenshotFormat="image/jpeg"
            width={1280}
            videoConstraints={videoConstraints}
            ref={webcamRef}
          ></Webcam>
        </Grid>
        <Grid xs={5} alignItems="center">
          <Button
            startIcon={<CameraAltIcon />}
            variant="contained"
            onClick={takeAPicture}
          >
            Prendre la photo
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
