from flask import render_template,redirect,session,request
from flask_app import app


@app.route('/')
def index():
    return render_template("start_page.html")

@app.route('/start')
def start():
    return render_template("index.html")
