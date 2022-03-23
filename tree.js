/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let totalVal = 0;
    let visitStack = [this.root];
    while (visitStack.length){
      let current = visitStack.pop()

      if (current === null){
        return 0;
      }
    
        if (typeof current.val === "number"){
          totalVal += current.val
        }


      for (let child of current.children){
        visitStack.push(child)
      }

    }
    return totalVal;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let numEvens = 0;
    let visitStack = [this.root];
    while (visitStack.length){
      let current = visitStack.pop()

      if (current === null){
        return 0;
      }
    
        if (typeof current.val === "number" && current.val % 2 === 0){
          numEvens += 1
        }


      for (let child of current.children){
        visitStack.push(child)
      }

    }
    return numEvens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let numGreater = 0;
    let visitStack = [this.root];
    while (visitStack.length){
      let current = visitStack.pop()

      if (current === null){
        return 0;
      }
    
        if (typeof current.val === "number" && current.val > lowerBound){
          numGreater += 1
        }


      for (let child of current.children){
        visitStack.push(child)
      }

    }
    return numGreater;
  }
}

module.exports = { Tree, TreeNode };
