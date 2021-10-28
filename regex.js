let pattern = /xyz/;
let value = 'This is xyz a test';

/* console.log(pattern.test(value));
console.log(value.replace(pattern, 'just')); */
let match = value.match(pattern);
console.log(match.index);

