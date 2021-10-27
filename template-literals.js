/* let name = 'bob';
console.log(`hi ${name}`);

 */

function getReasonCount() { return 2; }

let interpolation = `Give me ${( getReasonCount() == 1 ) ? 'one reason' : 'few reasons '} to try this`;

console.log(interpolation);