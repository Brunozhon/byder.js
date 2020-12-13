---
layout: home
---
# Byder functions and discussions

## Discussions

You can share disscusions at [the GitHub repo](https://github.com/Brunozhon/byder.js/discussions). I've created one at the very beginning so you will konw how to use the discussions tab.

## Functions

### `add()`

Adds a equation. You can use it like this:

```javascript
alert(byder.add(10,10)); // Two parameters (minium)
```

The first 2 parameters can be numbers.

Another example:

```javascript
alert(byder.add(100,100,10)) // Three parameters
```

The third parameter must be a number. It tells how much to multiply by.

Another example:

```javascript
// This will return 0.3
alert(byder.add(0.2,0.1,10,true)) // Four parameters (maxium)
// This will not return 0.3
alert(0.1 + 0.2)
```

The fourth parameter tells you if you want to divide by the number agian.
