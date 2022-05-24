import json

from flask import Flask, request, make_response
from flask_cors import CORS, cross_origin
from evaluation import Evaluator
import os, sys

evaluator = None
app = Flask(__name__)
cors = CORS(app)

#important paths
execPath = os.path.dirname(__file__)
problemsPath = os.path.join(execPath, "problems")

@app.route("/")
@cross_origin()
def index():
    return "backendul merge forta 👍"

@app.route("/getProblemHashes")
@cross_origin()
def getProblemHashes():
    directories = "["
    with os.scandir(problemsPath) as content:
        for hash in content:
            directories += '"' + hash.name + '", '
        directories = directories[:len(directories) - 2] + "]"
    return directories

#for simplifying
def grabFile(hash, fileName):
    if not(hash): #if no hash is given
        resp = make_response("no hash", 400)
        return resp
    try: #trying to read the content of the "problem.json" of the given hash
        with open(os.path.join(problemsPath, hash, fileName), "r") as stream:
            stream.seek(0, os.SEEK_END)
            size = stream.tell()
            stream.seek(0, os.SEEK_SET)
            content = stream.read(size)
            stream.close()
            return content
    except FileNotFoundError:
        resp = make_response("bad hash", 404)
        return resp

@app.route("/getProblemInformations")
def getProblemInformations():
    hash = request.args.get("hash")
    return grabFile(hash, "problem.json")

@app.route("/getProblemStatement")
@cross_origin()
def getProblemStatement():
    hash = request.args.get("hash")
    return grabFile(hash, "statement.md")

@app.route("/evaluate", methods=["POST"])
@cross_origin()
def evaluate():
    try:
        data = json.loads(request.data)
        hash = data["hash"]
        source = data["source"]
    except:
        resp = make_response("invalid input", 400)
        return resp

    index = evaluator.addSession(hash, source)
    score = evaluator.sessions[index].evaluate()
    evaluator.removeSession(index)

    return str(score)

if __name__ == "__main__":
    #initializing the evaluator
    if (len(sys.argv) >= 2):
        evaluator = Evaluator(sys.argv[1])
    else:
        evaluator = Evaluator()
    app.run(debug=True)