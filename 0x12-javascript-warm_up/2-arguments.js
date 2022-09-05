#!/usr/bin/node

const argv = process.argv.length;

if (argv <= 2) {
  console.log('No arguments');
} else {
  console.log('Argument found');
}
