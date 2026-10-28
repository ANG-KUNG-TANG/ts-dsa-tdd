// function dijkstra(graph, start):

//     distance[start] = 0
//     distance[all other nodes] = infinity

//     priorityQueue.push(start, 0)

//     while priorityQueue is not empty:

//         current = priorityQueue.extractMin()

//         for each neighbor of current:

//             newDistance =
//                 distance[current] + edgeWeight

//             if newDistance < distance[neighbor]:

//                 distance[neighbor] = newDistance

//                 priorityQueue.push(
//                     neighbor,
//                     newDistance
//                 )

//     return distance

function dijkstra(graph : number[], start : number): void {

    let graph = new Map<number, [number, number] []>()
    const distance[start] = 0;
   distance[NodeList] = Infinity

    priorityQueue.push(start,0)

    while ( !priorityQueue.has()){
        let current = priorityQueue.extractMin()
        for ( neighbor of current){
            let newDistance = distance[current] + edgeWeight

            if ( newDistance < distance[neighbor]){
                distance[neighbor] = newDistance

                priorityQueue.push(neighbor, newDistance)
            }
        }
    }

    return distance

}