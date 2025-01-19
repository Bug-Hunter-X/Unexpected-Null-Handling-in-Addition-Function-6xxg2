function foo(a, b) {
  // Handle null or undefined inputs by coercing them to 0
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;

  //Perform type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Inputs must be numbers.');
  }

  return a + b; 
}

console.log(foo(1, null)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(1, 2)); // 3
console.log(foo('a', 1)); // Throws an error