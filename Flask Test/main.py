import os
from flask import Flask, request, session,jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS
import logging
from script import calculate

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('HELLO WORLD')

ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'F:\\For Hackathon\\Flask Test'
CORS(app, expose_headers='Authorization')


@app.route('/upload', methods=['POST'])
def fileUpload():
    target = os.path.join(app.config['UPLOAD_FOLDER'], 'test')
    if not os.path.isdir(target):
        os.mkdir(target)
    logger.info("welcome to upload`")
    file = request.files['file']

    print(file)
    filename = secure_filename(file.filename)
    destination = "/".join([target, filename])
    file.save(destination)
    session['uploadFilePath'] = destination
    response = "Whatever you wish too return"

    data = calculate(f"./test/{filename}")

    # print(type(data))
    return jsonify(data)


if __name__ == "__main__":
    app.secret_key = os.urandom(24)
    app.run(debug=True, port=5000)