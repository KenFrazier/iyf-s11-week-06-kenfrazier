function step1() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 1000) + 500; // 500–1500ms
    console.log(`Step 1 starting, will take ${delay}ms`);
    setTimeout(() => resolve(`Step 1 done after ${delay}ms`), delay);
  });
}

function step2() {
  return new Promise((resolve) => {
    const delay = Math.floor(Math.random() * 1000) + 500;
    console.log(`Step 2 starting, will take ${delay}ms`);
    setTimeout(() => resolve(`Step 2 done after ${delay}ms`), delay);
  });
}

function step3() {
  return new Promise((resolve) => {
   const delay = Math.floor(Math.random() * 1000) + 500;
   console.log(`Step 3 starting, will take ${delay}ms`);
   setTimeout(() => resolve(`Step 3 done after ${delay}ms`), delay);
 });
}


const start = Date.now();

step1()
  .then((result) => {
    console.log(result);
    return step2();
  })
  .then((result) => {
    console.log(result);
    return step3();
  })
  .then((result) => {
    console.log(result);
    const end = Date.now();
    console.log(`Total time: ${end - start}ms`);
  });

const start2 = Date.now();
Promise.all([step1(), step2(), step3()]).then((results) => {
  results.forEach((r) => console.log(r));
  console.log(`Total time (parallel): ${Date.now() - start2}ms`);
});

async function runSequence() {
  const start = Date.now();
  const r1 = await step1();
  console.log(r1);
  // your turn: await step2 and step3
  console.log(`Total time: ${Date.now() - start}ms`);
}
runSequence();
