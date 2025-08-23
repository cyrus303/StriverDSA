class Queue {
  queueArr: number[];
  start: number;
  end: number;
  currSize: number;
  maxSize: number;

  constructor(maxSize = 3) {
    this.maxSize = maxSize;
    this.queueArr = new Array(maxSize);
    this.start = -1;
    this.end = -1;
    this.currSize = 0;
  }

  push(ele: number): void {
    if (this.currSize === this.maxSize) {
      console.log("Queue is full, exiting...");
      return;
    }
    console.log("element pushed is", ele);
    if (this.currSize === 0) {
      this.start = 0;
      this.end = 0;
      this.queueArr[this.end] = ele;
      this.currSize++;
    } else {
      this.end = (this.end + 1) % this.maxSize;
      this.queueArr[this.end] = ele;
      this.currSize++;
    }
  }

  pop() {
    if (this.start === -1) {
      console.log("Queue is empty, exiting...");
      return;
    }
    const popped = this.queueArr[this.start];
    console.log("element to be deleted is", popped);

    if (this.currSize === 1) {
      this.start = -1;
      this.end = -1;
      this.currSize = 0;
    } else {
      this.start = (this.start + 1) % this.maxSize;
      this.currSize--;
    }
    return popped;
  }

  top() {
    if (this.queueArr.length === 0) return undefined;
    console.log(
      "the peek of the queue before deleting any element",
      this.queueArr[this.start],
    );
  }

  size() {
    console.log(this.currSize);
  }

  display() {
    console.log(this.queueArr.slice(this.start));
  }
}

const queue = new Queue();

queue.push(4);
queue.push(14);
queue.push(24);
queue.push(34);
queue.push(54);

queue.pop();
queue.display();

export {};
