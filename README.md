# Calculator Project

A JavaScript project from the odin project. The pupose of this project was to use all the basics of JavaScript i had learnt through out they're [Foundations path](https://www.theodinproject.com/paths/foundations/courses/foundations).

**Concepts learnt include:**

- Expressions and operators
- Loops
- Arrays(Array Methods,Higher Order Functions)
- DOM Manipulation and Events
- Objects

# Preview

![Preview](img\Preview.png)

# Links

Live Preview : [Calculator Project](icep0ps.github.io/calculator/)

The Odin Project: [The Odin Project](https://www.theodinproject.com/)

# Lessons Learned

Always as for help when you run into a bug that you really can’t fix or understand. When I was making the operator function with the reduce function, I ran into a bug I couldn't fix for hours because I had I errors in my reduce function which I didn’t even know till I sent my code in the top discord and someone pointed it out if it wasn’t for that I don’t think I would have been able to finish this project really.

**ERROR**

```js
const numbers = [2, 4];
function add(numbers) {
  numbers.reduce((a, c) => {
    const result = a + c;
    console.log(result);
  });
}
```

**FIX**

```js
const numbers = [2, 4];
function add(numbers) {
  let answer = numbers.reduce((a, c) => a + c);
  return answer;
}
```
