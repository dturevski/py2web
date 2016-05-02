import nodes

def p_empty(p):
    'empty :'
    pass

# lex & yacc transform the popeye output into a list of Nodes
# the final rule - BuildTree - transforms this list into a tree
def p_BuildTree(t):
	'BuildTree: Solution'
	__rootNode = t[1][0]
	__rootNode.unflatten(t[1], 1)
	__rootNode.linkContinuedTwins()
	
def p_Solution(t):
	'''Solution: MoveList							[* %1.unshift(new Node(), new VirtualTwinNode()); %% = %1; *]
		| TwinList							[* %1.unshift(new Node()); %% = %1; *]
		| Comments Solution					[* %2[0].setv('comments', %1); %% = %2; *]
		| empty ''' #							[* %% = [new Node()] /* Empty input */ *]
	pass