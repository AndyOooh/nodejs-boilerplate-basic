import { testFunction } from './helpers.js';

const run = async () => {
  const todo = await testFunction();
  console.log('Todo 2: ', todo);
};

run();
