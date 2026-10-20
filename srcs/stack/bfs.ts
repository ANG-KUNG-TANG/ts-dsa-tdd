// 1. Create an empty queue
// 2. Create an empty visited set
// 3. Add the starting node to the queue
// 4. Mark the starting node as visited

// 5. While the queue is not empty:
//    a. Remove the first node
//    b. Visit that node
//    c. For each neighbor:
//       - If not visited:
//         - Mark as visited
//         - Add to queue

function bfs(
    graph: Map<string, string[]>,
    start: string
): string[] {
    const queue: string[] = [];
    const visited = new Set<string>();
    const result: string[] = [];

    // Your first task: initialize the queue and visited set.
    queue.push(start)
    
    visited.add(start)

    while ( queue.length > 0) {
        const current = queue.shift()!;
        result.push(current)
        
        
        for (const neighbor of graph.get(current) ?? []) {
            if ( !visited.has(neighbor)){
                visited.add(neighbor)
                queue.push(neighbor)
            }
    }
    }

    return result;
}

const graph = new Map<string, string[]>([
    ["A", ["B", "C"]],
    ["B", ["A", "D"]],
    ["C", ["A"]],
    ["D", ["B"]],
]);

console.log(bfs(graph, "A"));
// ["A", "B", "C", "D"]