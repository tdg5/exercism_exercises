"use strict";

class HelloWorld {
  hello(name) {
    name = name || "World";
    return `Hello, ${name}!`;
  }
}

module.exports = HelloWorld;
