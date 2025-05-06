{
  // Promise
  const createPromise = () => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data!!");
      }
    });
  };

  // calling the create promise function
  const showData = async () => {
    const res = await createPromise();
    console.log(res);
  };
  showData;

  type Todo = {
    id: number;
    title: string;
    userId: number;
    completed: boolean;
  };
  const getTodo = async (): Promise<Todo> => {
    const res = await fetch("https://jsonplaceholder.typode/todos/1");
    const data = await res.json();
    return data;
  };
  getTodo();
  //
}
