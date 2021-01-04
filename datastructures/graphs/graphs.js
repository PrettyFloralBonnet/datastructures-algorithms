const graph = [[0, 2], [2, 3], [2, 1], [1, 3]];  // edge list

const graph2 = [[2], [2, 3], [0, 1, 3], [1, 2]]  // adjacency list

const graph3 = [  // adjacency matrix
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
        this.numberOfNodes++;
    }

    addEdge(vertex, connectingVertex) {
        this.adjacencyList[vertex].push(connectingVertex);
        this.adjacencyList[connectingVertex].push(vertex);
    }

    showConnections() {
        const allVertices = Object.keys(this.adjacencyList);

        for (let vertex of allVertices) {
            let vertexConnections = this.adjacencyList[vertex];
            let connections = "";

            let vertexConnection;
            for (vertexConnection of vertexConnections) {
                connections += vertexConnection + " ";
            }
            
            console.log(vertex + " --> " + connections);
        }
    }
}