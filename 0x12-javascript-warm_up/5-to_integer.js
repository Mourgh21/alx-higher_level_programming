#!/usr/bin/node

const arg = process.argv.slice(2);

const num = parseInt(arg[0], 10);

if (isNaN(num)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + arg[0]);
}
