import base64
import os
from flask import Flask
from flask import request
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

current_dir = os.getcwd()


@app.route("/ConvertToBackgroundTransparent", methods=["POST", "GET"])
def convert_to_background_transparent():
    if request.method == "POST":

        rawImage = request.get_data(as_text=True)

        rawImageList = rawImage.split(",")

        image = base64.b64decode(rawImageList[1])

        originFilename = current_dir + "/tmp/maPhoto.jpg"

        write_file(originFilename, image)

        filenameWithoutBackground = remove_background(originFilename)

        return "data:image/png;base64," + base64.b64encode(
            read_file(filenameWithoutBackground)
        ).decode("utf-8")


def read_file(filename):
    fileHandle = open(filename, "rb")
    content = fileHandle.read()

    return content


def write_file(filename, content):
    fileHandle = open(filename, "wb")
    fileHandle.write(content)
    fileHandle.close()


def remove_background(filename):

    filenameWithoutBackground = filename + ".transparent.png"

    command = (
        "python3 "
        + current_dir
        + "/../scripts/convertImageBackgroundToTransparent.py"
        + " "
        + filename
        + " "
        + filenameWithoutBackground
    )

    print(command)

    os.system(command)

    return filenameWithoutBackground


@app.route("/Background/<bakground>", methods=["GET"])
def get_background(bakground):
    return read_file(current_dir + "/backgrounds/background_" + bakground + ".jpg")
