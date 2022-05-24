import os, shutil
from uuid import uuid4

#the sessions path
sessionsPath = os.path.join(os.path.dirname(__file__), "sessions")

class Session:
    def __init__(self, problem, source, compilerPath):
        print(source, compilerPath)
        self.problem = problem
        self.uuid = str(uuid4())

        self.done = False
        self.testsEvaluated = 0

        #setting up (mkdir, compiling)
        cwd = os.path.join(sessionsPath, self.uuid)
        sourceFile = os.path.join(cwd, "source.cpp")
        os.mkdir(cwd)
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
        return 5

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