const cars: string[] = ["Ford", "Audi"]
const cars2: Array<string> = ["Ford", "Audi"]

const promise: Promise<string> = new Promise(resolve => {
    setTimeout(() => {
        resolve('Promise resolved')
    }, 2000)
})

promise.then(data => {
    console.log(data)
})


function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

const merged = mergeObjects({name: "Lol"}, {age: "kek"})
console.log(merged.name)
console.log(merged.age)
// const merged2 = mergeObjects("a", "a") -- error

// ===================

interface ILength {
    length: number
}


function withCount<T extends ILength>(value: T): {value: T, count: string} {
    return {
        value,
        count: `в этом объекте ${value.length} символов`
    }
}

console.log(withCount("with count"))

// =======