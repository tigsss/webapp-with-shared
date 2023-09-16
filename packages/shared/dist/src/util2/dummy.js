"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "testFunction", {
    enumerable: true,
    get: function() {
        return testFunction;
    }
});
const _add = require("../util1/add");
function testFunction(num1, num2) {
    return (0, _add.add1)(num1, num2);
}
