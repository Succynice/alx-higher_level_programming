#!/usr/bin/node

const entry = process.argv;

const toNumber = Math.floor(entry[3]);
if (isNaN(toNumber)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${toNumber}`);
}
