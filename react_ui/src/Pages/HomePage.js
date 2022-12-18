import { Button, ButtonGroup, Grid } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { PhotoLibrary } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
      >
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            startIcon={<CameraAltIcon />}
            to="takeAPicture"
            href="#takeApicture"
            component={Link}
          >
            Prendre une photo
          </Button>
          <Button component={Link} startIcon={<PhotoLibrary />}>
            Voir les photos prises
          </Button>
        </ButtonGroup>
      </Grid>
    </>
  );
}
