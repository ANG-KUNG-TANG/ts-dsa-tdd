class MinHeap {
    private heap: number[] = [];

    insert(value: number): void {
        // Step 1: Add the new value at the end
        this.heap.push(value);

        // Step 2: Get the index of the new value
        let index = this.heap.length - 1;

        // Step 3: Bubble up while the item has a parent
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            // Step 4: Stop if the heap property is satisfied
            if (this.heap[index] >= this.heap[parentIndex]) {
                break;
            }

            // Step 5: Swap child and parent
            [this.heap[index], this.heap[parentIndex]] =
                [this.heap[parentIndex], this.heap[index]];

            // Step 6: Move up to the parent's position
            index = parentIndex;
        }
    }

    // Return a copy of the heap for testing
    getHeap(): number[] {
        return [...this.heap];
    }

    extractMin(): number | undefined {
    if (this.heap.length === 0) {
        return undefined;
    }

    const min = this.heap[0];

    // Remove the last item
    const last = this.heap.pop();

    // If items remain, move the last item to the root
    if (this.heap.length > 0) {
        this.heap[0] = last!;

        let index = 0;

        // Bubble down
        while (true) {
            let smallest = index;

            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;

            // Check the left child
            if (
                leftChildIndex < this.heap.length &&
                this.heap[leftChildIndex] < this.heap[smallest]
            ) {
                smallest = leftChildIndex;
            }

            // Check the right child
            if (
                rightChildIndex < this.heap.length &&
                this.heap[rightChildIndex] < this.heap[smallest]
            ) {
                smallest = rightChildIndex;
            }

            // Stop if the current item is already smallest
            if (smallest === index) {
                break;
            }

            // Swap with the smallest child
            [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

            // Continue from the child's position
            index = smallest;
        }
    }

    return min;
}
}


// function findKthLargest(nums: number[], k: number): number {
//     const heap = new MinHeap();

//     for (const num of nums) {
//         heap.insert(num);

//         // Keep only the k largest numbers
//         if (heap.getHeap().length > k) {
//             heap.extractMin();
//         }
//     }

//     return heap.extractMin();
// }

const heap = new MinHeap();

heap.insert(2);
heap.insert(6);
heap.insert(4);
heap.insert(10);
heap.insert(8);
heap.insert(9);

console.log(heap.extractMin()); // 2
console.log(heap.getHeap());   // [4, 6, 9, 10, 8]