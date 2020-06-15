  const multi = n => m => n * m;
console.log(multi(3)(5));   // 15

const triple = multi(3);
console.log(triple(5));     // 15