export default class Queue{
    private items : number[] = [];

    enqueue(value: number): void{
        this.items.push(value);
    }

    dequeue(): number | undefined{
        return this.items.shift()
    }

    peek(): number | undefined {
        return this.items[0]
    }

    isEmpty(): boolean {
        if (this.items.length === 0){
            return true
        } else { 
            return false
        }
        return false
    }
}

let instance = new Queue();
instance.enqueue(10)
instance.enqueue(20)
instance.enqueue(30)
instance.enqueue(50)
instance.enqueue(60)
console.log(instance.dequeue())
console.log(instance.dequeue())
console.log(instance)
console.log(instance.peek());
console.log(instance.isEmpty())