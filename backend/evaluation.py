class Session:
    def __init__(self, problem, sourceCode):
        self.problem = problem
        self.souceCode = sourceCode

        self.done = False
        self.testsEvaluated = 0

class Evaluator:
    def __init__(self):
        self.sessions = {}