{
  //static
  // when i want to make in single source we have to remove this.
  class Counter {
    static count: number = 0;

    static increment() {
      return (Counter.count += 1);
    }
    static decrement() {
      return (Counter.count -= 1);
    }
  }

  //   const instance1 = new Counter();
  console.log(Counter.increment());
  //   const instance2 = new Counter();
  console.log(Counter.increment());
  //   const instance3 = new Counter();
  console.log(Counter.decrement());
}
