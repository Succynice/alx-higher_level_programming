#!/usr/bin/node

const argv = process.argv.length;

if (argv < 3) {
  console.log('No arguments');
} else if (argv === 3) {
  console.log('Argument found');
}
else {
  console.log('Arguments found');
}
