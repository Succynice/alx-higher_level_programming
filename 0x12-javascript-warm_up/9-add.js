#!/usr/bin/node

function add (a, b) {
  console.log(a + b);
}

const entry = process.argv;
const valueA = Math.floor(entry[2]);
const valueB = Math.floor(entry[3]);

if (isNaN(valueA) && isNaN(valueB)) {
  console.log('Missing size');
} else {
  add(valueA, valueB);
}
