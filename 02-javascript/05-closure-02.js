/*
 * クロージャの一つの利点として、
 * 変数をプライベートな変数として扱う事ができるようになります。
 */

var module = (function() {
  var count = 0;

  return {
    increment: function() {
      count++;
    },
    show: function() {
      console.log(count);
    }
  };

})();

module.show(); // 0

module.increment();
module.show(); // 1

console.log(count); // undefined