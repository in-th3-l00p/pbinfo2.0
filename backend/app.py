from flask import Flask, request
from uuid import uuid4

app = Flask(__name__)

@app.route("/")
def index():
    return "hello world!"

@app.route("/evaluate", methods=["POST"])
def evaluate():
    id = uuid4()
    print(request.args)
    return id.hex