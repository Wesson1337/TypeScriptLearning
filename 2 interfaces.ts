interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: "1234",
    size: {
        width: 20,
        height: 30
    },
    color: "#ccc"
}

const rect2: Rect = {
    id: "12345",
    size: {
        width: 10,
        height: 5
    }
}

const rect3 = {} as Rect
const rect4 = {} as Rect

// ----------------

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: "123",
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

interface ILol {
    a: number
}

class Lol implements ILol {
    a: number
    constructor(name: number) {
        this.a = name
    }

}


interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: "lol"
}

