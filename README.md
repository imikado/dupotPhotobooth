# dupot Photobooth
Photobooth project 
- UI (reactjs) 
- API (Flask) 
- Scripts (Python)

# to launch

## react ui
    cd react_ui
    ./run.sh

## flask api (other terminal)
    cd flask_api
    ./run.sh


# requirements

## react ui
    npm install @mui/material @emotion/react @emotion/styled
    npm install react-router-dom
    npm install react-webcam
    npm install axios


## flask api
    apt install python3.10-venv
    python3 -m venv venv
    . venv/bin/activate

    pip install Flask
    pip install -U flask-cors


## scripts
    apt install imagemagick
