#!/usr/bin/node

function add (a, b) {
  return(a + b);
}

const entry = process.argv;
const valueB = parseInt(entry[3]);
const valueA = parseInt(entry[2]);

console.log(add(valueA, valueB));
