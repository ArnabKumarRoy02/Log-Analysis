#Package import
from flask import Flask, render_template, send_file, make_response, url_for, Response, redirect, request 
import script
#initialise app
app = Flask(__name__)

#decorator for homepage 
@app.route('/' )
def index():
    return render_template('index.html',
                           PageTitle = "Landing page")


@app.route('/', methods=["POST"])
def run_script():
    uploaded_file = request.files['txt_file']
    #if the file is not empty
    data = ""
    if uploaded_file.filename != '':
        data = script.calculate(uploaded_file.filename)
        return data
    else:
        return render_template('index.html',PageTitle = "Landing Page")
    print(data)

if __name__ == '__main__':
    app.run(debug = True)