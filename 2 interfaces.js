"use strict";
const rect1 = {
    id: "1234",
    size: {
        width: 20,
        height: 30
    },
    color: "#ccc"
};
const rect2 = {
    id: "12345",
    size: {
        width: 10,
        height: 5
    }
};
const rect3 = {};
const rect4 = {};
const rect5 = {
    id: "123",
    size: {
        width: 20,
        height: 20
    },
    getArea() {
        return this.size.width * this.size.height;
    }
};
class Lol {
    constructor(name) {
        this.a = name;
    }
}
const css = {
    border: "lol"
};
