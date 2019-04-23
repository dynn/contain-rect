# contain-rect

## Install
Run `npm install contain-rect` in your project folder

## usage
The first parameter is the container, the second is the the subject rect that needs to be contained.
As third (optional) paramter you can set a offset which function as an allround padding withing the container.

## Example
```
const containRect = require('contain-rect')

const container = { x: 50, y: 40, width: 100, height: 100 } 
const subject = { x: -5, y: -40, width: 120, height: 120 }

containRect(container, subject, 1) //=> { x: 31, y: 21 }
```
