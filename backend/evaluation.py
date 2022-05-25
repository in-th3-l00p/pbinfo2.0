import os, shutil, json
from uuid import uuid4

#the sessions path
execPath = os.path.dirname(__file__)
sessionsPath = os.path.join(execPath, "sessions")
problemsPath = os.path.join(execPath, "problems")

class Session:
    def __init__(self, problem, source, compilerPath):
        print(source, compilerPath)
        self.problem = problem
        self.uuid = str(uuid4())

        self.done = False
        self.testsEvaluated = 0

        #setting up (mkdir, compiling)
        self.cwd = os.path.join(sessionsPath, self.uuid)
        sourceFile = os.path.join(self.cwd, "source.cpp")
        os.mkdir(self.cwd)
        with open(sourceFile, "w") as stream:
            stream.write(source)
            stream.close()
        os.system("{compiler} {source} -o {sessions}/{uuid}/bin".format(
            compiler=compilerPath,
            source=sourceFile,
            sessions=sessionsPath,
            uuid=self.uuid
        ))

    def evaluate(self):
        try: # see if the file compiled
            binary = open(os.path.join(self.cwd, "bin"), "r")
            binary.close()
        except FileNotFoundError:
            return json.dumps({"error": "eroare de compilare", "solved": 0})

        #getting the input and output file names
        problemPath = os.path.join(problemsPath, self.problem)
        input, output, tests = ("", "", 0)
        try:
            with open(os.path.join(problemPath, "problem.json"), "r") as stream:
                stream.seek(0, os.SEEK_END)
                size = stream.tell()
                stream.seek(0, os.SEEK_SET)

                content = json.loads(stream.read(size))
                input = content["input"]
                output = content["output"]
                tests = content["tests"]

                stream.close()
        except FileNotFoundError:
            return  json.dumps({"error": "problema nu a fost gasita", "solved": 0})

        print(input, output, tests)
        return json.dumps({"error": "", "solved": tests})

class Evaluator:
    def __init__(self, compilerPath="/usr/bin/g++"):
        self.compilerPath = compilerPath
        self.sessions = []

        #deleting every sessions that remained
        with os.scandir(sessionsPath) as directory:
            for session in directory:
                shutil.rmtree(os.path.join(sessionsPath, session.name))

    def addSession(self, problem, source):
        index = len(self.sessions)
        self.sessions.append(Session(problem, source, self.compilerPath))
        return index

    def removeSession(self, index):
        shutil.rmtree(os.path.join(sessionsPath, self.sessions[index].uuid))
        self.sessions.remove(self.sessions[index])