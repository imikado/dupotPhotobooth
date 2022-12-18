import { Button, ButtonGroup, Grid } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import storeApi from "../Apis/storeApi";
import { Box } from "@mui/system";

const url_api = "http://127.0.0.1:5000";

export default function PreviewPicturePage() {
  const [pictureShooted, setPictureShooted] = useState(null);

  const [backgroundSelected, setBackgroundSelected] = useState(null);

  const [styleBackground, setStyleBackground] = useState({
    background: "green",
  });

  const backgroundList = ["01", "02", "03"];

  useEffect(() => {
    return () => {
      setPictureShooted(storeApi.getData("picture"));
    };
  }, []);

  const setBackground = (background) => {
    setStyleBackground({
      backgroundImage: `url("${url_api}/Background/${background}")`,
    });

    setBackgroundSelected(background);
  };

  const getColor = (backgroundLoop) => {
    if (backgroundLoop === backgroundSelected) {
      return "success";
    }
    return "error";
  };

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <img style={styleBackground} src={pictureShooted} />
        </Grid>

        <Grid item xs={1}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              color="error"
              to="/takeAPicture"
              href="#takeApicture"
              component={Link}
              startIcon={<CancelIcon />}
            >
              Retour
            </Button>

            <Button
              color="success"
              startIcon={<CheckCircleIcon />}
              component={Link}
            >
              Validez
            </Button>
          </ButtonGroup>
        </Grid>

        <Grid item xs={12}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            {backgroundList.map((backgroundLoop) => (
              <Button
                color={getColor(backgroundLoop)}
                onClick={() => setBackground(backgroundLoop)}
                key={backgroundLoop}
              >
                {backgroundLoop}
              </Button>
            ))}
          </ButtonGroup>
        </Grid>
      </Grid>
    </>
  );
}
