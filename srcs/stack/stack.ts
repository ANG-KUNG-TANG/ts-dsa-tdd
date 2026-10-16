export default class Stack {
  private items: number[] = [];

  push(value: number): void {
    // Your task: add value to the stack
    this.items.push(value)   
  }

  pop(): number | undefined {
    //remove hte lavt value
    return this.items.pop()
  }

  peek(): number | undefined{
    return this.items[this.items.length - 1]
  }

  empty(): boolean{
    if ( this.items.length === 0){
        return false
    } else {
        true
    }
    return false
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

