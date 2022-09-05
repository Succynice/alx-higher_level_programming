#!/usr/bin/node
// if (process.argv.length <= 2) {
//   console.log('No argument');
// } else {
//   console.log((process.argv.length > 3 ? 'Arguments' : 'Argument') + ' found');
// }

const argv = process.argv.length;

if (argv <= 2) {
  console.log('No arguments');
} else {
  console.log('Argument found');
}
