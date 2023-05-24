"use strict";
const cars = ["Ford", "Audi"];
const cars2 = ["Ford", "Audi"];
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 2000);
});
promise.then(data => {
    console.log(data);
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: "Lol" }, { age: "kek" });
console.log(merged.name);
console.log(merged.age);
function withCount(value) {
    return {
        value,
        count: `в этом объекте ${value.length} символов`
    };
}
console.log(withCount("with count"));
// =======
