/**
 * Using the JavaScript language, have the function farthestNodes(strArr) read
 * strArr which will be an array of hyphenated letters representing paths
 * between those two nodes. For example: ["a-b","b-c","b-d"] means that there is
 * a path from node a to b (and b to a), b to c, and b to d. Your program should
 * determine the longest path that exists in the graph and return the length of
 * that path. So for the example above, your program should return 2 because of
 * the paths a-b-c and d-b-c. The path a-b-c also means that there is a path
 * c-b-a. No cycles will exist in the graph and every node will be connected to
 * some other node in the graph.
 *
 * https://www.coderbyte.com/results/bhanson:Farthest%20Nodes:JavaScript
 *
 * @param  {array} strArr
 * @return {number}
 */




function farthestNodes(strArr) {
    // Step 1: Build graph
    const graph = {};
    for (let edge of strArr) {
      const [u, v] = edge.split("-");
      if (!graph[u]) graph[u] = [];
      if (!graph[v]) graph[v] = [];
      graph[u].push(v);
      graph[v].push(u);
    }
  
    // Helper BFS to get farthest node + distance
    function bfs(start) {
      const visited = new Set();
      const queue = [[start, 0]];
      let farthestNode = start;
      let maxDist = 0;
  
      while (queue.length) {
        const [node, dist] = queue.shift();
        if (dist > maxDist) {
          maxDist = dist;
          farthestNode = node;
        }
        for (let nei of graph[node]) {
          if (!visited.has(nei)) {
            visited.add(nei);
            queue.push([nei, dist + 1]);
          }
        }
      }
      return { farthestNode, maxDist };
    }
  
    // Step 2: Pick any node (first key)
    const startNode = Object.keys(graph)[0];
  
    // Step 3: BFS from start → farthest node
    const { farthestNode } = bfs(startNode);
  
    // Step 4: BFS again from farthest node → max distance
    const { maxDist } = bfs(farthestNode);
  
    return maxDist;
  }
  
  // Example:
  console.log(farthestNodes(["a-b", "b-c", "b-d"])); // 2
  console.log(farthestNodes(["a-b", "b-c", "c-d", "d-e"])); // 4
  
// function farthestNodes(strArr) {
//     const nodeKeys = new Set(strArr.join('-').split('-'));

//     const map = new Map();

//     // Initialize empty nodes
//     nodeKeys.forEach(key => {
//         map.set(key, new Node(key));
//     });

//     // Connect nodes
//     strArr.forEach(connection => {
//         const [nodeA, nodeB] = connection.split('-');
//         map.get(nodeA).addEdge(map.get(nodeB));
//         map.get(nodeB).addEdge(map.get(nodeA));
//     });

//     // Try each node as a start node
//     let longestPath = 0;
//     map.forEach(node => {
//         const path = node.getFarthestPath();
//         if (path.length > longestPath) {
//             longestPath = path.length;
//         }
//     });

//     return longestPath - 1;
// }

// function Node(key) {
//     this.key = key;
//     this.edges = [];
// }

// Node.prototype.addEdge = function(node) {
//     this.edges.push(node);
// };

// Node.prototype.getFarthestPath = function(visited = []) {
//     if (visited.includes(this.key)) {
//         return visited;
//     }

//     visited = visited.slice();
//     visited.push(this.key);

//     const selfAndChildren = [];

//     this.edges.forEach(edge => {
//         const child = edge.getFarthestPath(visited);
//         selfAndChildren.push(child);
//     });

//     if (selfAndChildren.length === 0) {
//         return visited;
//     }

//     // Select longest of child paths to return
//     selfAndChildren.sort((a, b) => b.length - a.length);
//     return selfAndChildren[0];
// };

// module.exports = farthestNodes;
