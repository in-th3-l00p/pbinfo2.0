import os, shutil, json, subprocess, time
import posix
from uuid import uuid4

# the sessions path
execPath = os.path.dirname(__file__)
sessionsPath = os.path.join(execPath, "sessions")
problemsPath = os.path.join(execPath, "problems")


class Session:
    def __init__(self, problem, source, compilerPath):
        self.problem = problem
        self.uuid = str(uuid4())

        self.done = False
        self.testsEvaluated = 0

        # setting up (mkdir, compiling)
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

    def readContent(self, path):
        with open(path, "r") as stream:
            stream.seek(0, os.SEEK_END)
            size = stream.tell()
            stream.seek(0, os.SEEK_SET)
            content = stream.read(size)
            stream.close()
        return content

    def evaluate(self):
        try:  # see if the file compiled
            binary = open(os.path.join(self.cwd, "bin"), "r")
            binary.close()
        except FileNotFoundError:
            return json.dumps({"error": "eroare de compilare", "solved": 0})

        # getting the input and output file names
        problemPath = os.path.join(problemsPath, self.problem)
        try:
            with open(os.path.join(problemPath, "problem.json"), "r") as stream:
                stream.seek(0, os.SEEK_END)
                size = stream.tell()
                stream.seek(0, os.SEEK_SET)

                content = json.loads(stream.read(size))
                input = content["input"]
                output = content["output"]
                tests = int(content["tests"])

                stream.close()
        except FileNotFoundError:
            return json.dumps({"error": "problema nu a fost gasita", "solved": 0})

        solved = 0
        for i in range(0, tests):
            testName = os.path.join(
                problemPath, "tests", "test{}.in".format(i)
            )

            # copying and renaming the test
            shutil.copy(
                os.path.join(problemPath, "tests", "test{}.in".format(i)),
                self.cwd
            )

            shutil.move(
                os.path.join(self.cwd, "test{}.in".format(i)),
                os.path.join(self.cwd, input)
            )

            # running the program
            process = subprocess.Popen([os.path.join(self.cwd, "bin")], shell=False, cwd=self.cwd)
            time.sleep(1)
            if process.poll() is None:
                process.kill()
                continue

            # verifying if the output is correct
            userOutput, testOutput = (
                self.readContent(
                    os.path.join(self.cwd, output)
                ),
                self.readContent(
                    os.path.join(problemPath, "tests", "test{}.out".format(i))
                )
            )

            if userOutput == testOutput:
                solved += 1

        return json.dumps({"error": "", "solved": solved})


class Evaluator:
    def __init__(self, compilerPath="/usr/bin/g++"):
        self.compilerPath = compilerPath
        self.sessions = []

        # deleting every sessions that remained
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
