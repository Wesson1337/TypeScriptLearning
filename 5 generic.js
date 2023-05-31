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
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: "Lol"
};
console.log(getObjectValue(person, "name"));
// ========
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
