const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// map()は、対象の配列の要素一つ一つを加工した新しい配列を作る
console.log(arr.map(n => n * 2));                 // [ 2, 4, 6, 8, 10, 12, 14, 16 ]

// filter()は、条件に適合する要素だけを抽出して、新しい配列を作る
console.log(arr.filter(n => n % 3 === 0));        // [ 3, 6 ]

// find()は、条件に適合した要素を一つだけ取り出す。見つからない場合は、undefindを返す
console.log(arr.find(n => n > 4));                // 5

// every()は、すべての要素が条件を満たすかを真偽値で返す
console.log(arr.every(n => n !== 0));             // true

// some()は、条件を満たす要素が一つでもあるかを真偽値で返す
console.log(arr.some(n => n > 8));                // false

// includes()は、指定した要素が含まれるかを真偽値で返す
console.log(arr.includes(5));                     // true

// reduce()は、配列の要素を、与えた式で畳み込んだ値を返す
console.log(arr.reduce((n, m) => n + m));         // 36

// sort()は各要素を、与えた条件によって並び替えた新しい配列を返す
console.log(arr.sort((n, m) => n > m ? -1 : 1));  // [ 8, 7, 6, 5, 4, 3, 2, 1 ]

