class Node(object):

  # creating a new node
  def __init__(self, data, leftChild=None, rightChild=None):
    # self is a variable name
    # each method receives the current instance as the first parameter when it is called
    self.data = data 
    self.leftChild = leftChild
    self.rightChild = rightChild

def traverseTree(root):
  # sets the current level to the root node
  currentlevel = [root]
  # while on a level of the tree, execute the instructions
  while currentlevel:
    nextlevel = list()
    # for each node on the current level print the data contained in the node 
    for node in currentlevel:
      print node.data,
      if node.leftChild:
        nextlevel.append(node.leftChild)
      if node.rightChild:
        nextlevel.append(node.rightChild)
    print
    currentlevel = nextlevel

tree = Node(3, Node(9, Node(2, Node(8))), Node(4, Node(10), Node(5)))

traverseTree(tree)
