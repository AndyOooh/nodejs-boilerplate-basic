import { testFunction } from './helpers.js';

const run = async () => {
  const res = await testFunction();
  console.log(res);
};

run();
