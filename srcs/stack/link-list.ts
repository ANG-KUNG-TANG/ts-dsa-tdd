
class Node {
    value: number;
    next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: Node | null = null;

    prepend(value: number): void {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
    }

    print(): void {
        let current = this.head;

        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    append(value: number): void {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }
}

const list = new LinkedList();

list.prepend(30);
list.prepend(20);
list.prepend(10);

list.print();
