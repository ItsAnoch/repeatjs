# RepeatJS
#### JS Library to remove boiler-plate from loops.
#### Exact same speed as a normal for-loop.
---

## Installation
```
npm install repeatjs
```
---
## Importing
```
import repeat from "repeatjs/index.js";
```
---

## Syntax:
```js
repeat((index, end) => { // Index and end can be renamed to anything.
    // code here
}, iterations, step, start)
```

<br>

## Example Code
> Output numbers from 0 to 10
```js
repeat((index) => {
    console.log(index)
}, 10)
```

<br>

> Output numbers from 5 to 20
```js
repeat((index) => {
    console.log(index)
}, 20, 1, 5) // 20 is the iterations, 1 is the step, and 5 is the starting.
```

<br>

> Output even numbers from 10 to 20
```js
repeat((index) => {
    console.log(index)
}, 20, 2, 10) // 20 is the iterations, 2 is the step, and 5 is the starting.
```

<br>

> If the index is equal to a random number then break the loop.
```js
const number = Math.floor(Math.random() * 20)

repeat((index, end) => {
    if (index == number) {
        end() // end() is equivalent to `break`; however end() can be used in functions unlike break; 
    }
    console.log(index)
}, 20)
```
