#
import sys, os, pickle

oliveDir = "/home/dima/git/olive/"
currentDir = os.getcwd()

if not (oliveDir + "../") in sys.path:
    sys.path.append(oliveDir + "../")

os.chdir(oliveDir)
import olive.model
os.chdir(currentDir)


class Node:


    def __init__(self):
	    self.depth = 0
	    self.childIsThreat = False
	    self.comments = []
		

    def setv(self, k, v):
        setattr(self, k, v)
        return self


    def unflatten(self, nodes, offset):

		self.children = []

		while offset < nodes.length:

			# case 1: nodes[offset] is a direct child of this --> add to children and recurse
			if (self.depth + 1 == nodes[offset].depth) {
				self.children.push(nodes[offset])
				offset = nodes[offset].unflatten(nodes, offset + 1)
				
			# case 2: nodes[offset] is a grand-child of this --> create intermediate null-nodes
			elif this.depth + 1 < nodes[offset].depth:
				var nn = NullNode(this.depth + 1, self.childIsThreat)
				self.children.append(nn)
				offset = nn.unflatten(nodes, offset)
				
			# case 3: nodes[offset] is not a child of this
			else:
				return offset


    def linkContinuedTwins(self) {
        for i in xrange(1, len(self.children)):
            if self.children[i].isContinued:
                self.children[i].anticipator = self.children[i-1]

				
    def make(self, board):
        board.flip()


    def unmake(self, board):
        board.flip()


class NullNode(Node):


    def __init__(self, depth, isThreat):
        super(NullNode, self).__init__()
        self.depth = depth
        self.isThreat = isThreat


class TwinNode(Node):


    def __init__(self, twinId, isContinued):
        super(TwinNode, self).__init__()
	    self.depth = 1

	    self.twinId = twinId
	    self.isContinued = isContinued
	    self.anticipator = None
	    self.commands = []


	def make(self, board) {

		self.oldBoard = pickle.dumps(board)

		b.flip()

		if not self.anticipator is None:
			self.anticipator.make(board)
			
		for command in self.commands:
		    command.exec(board)


	def unmake(self, board):
	    board = pickle.loads(self.oldBoard)
	    

class VirtualTwinNode(TwinNode): pass


class TwinCommand:


    def __init__(self, name, args):
	    self.name = name
	    self.args = args


	def exec(self, b):
		if 'Move' == self.name:
			b.move(this.args[0], this.args[1])
		elif 'Exchange' == self.name:
			b.board[self.args[0]], b.board[self.args[1]] = \
                   b.board[self.args[1]], b.board[self.args[0]]
		elif 'Remove' == self.name:
			b.drop(self.args[0])
		elif 'Add' == self.name:
			b.add(self.args[0], self.args[1])
		elif 'Rotate' == self.name:
			b.rotate(self.args[0])
		case 'Mirror' == self.name:
			b.mirror(this.args[0], this.args[1])
		case 'Shift' == self.name:
			b.shift(this.args[0], this.args[1])
		case 'PolishType' == self.name:
			b.polishTwin()
		case 'Imitator' == self.name:
			b.imitators = args


