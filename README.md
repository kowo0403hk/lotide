# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kowo0403hk/lotide`

**Require it:**

`const _ = require('@kowo0403hk/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: It returns the first element of an given array.
* `tail(...)`: It returns a new array with the first element removed.
* `middle(...)`: It returns the middle element of an array. If the given array has even numbers of elements, it will return the middle _two_ elements.