const str: string = 'Hello'

const stringArray: string[] = ['1', '2', '3']
const numberArray: Array<number> = [1, 2, 3, 4, 5, 6, 7]
console.log(str)

// funcs
function sayMyName(name: string): void {
    console.log(name)
}

sayMyName("123")

// never
function infinite(): never {
    while (true) {
    }
}

// Type
type Login = string

const login: Login = 'lol'

type ID = string | number
const id1: ID = 1234
const id2: ID = "1234"

type SomeType = string | null | undefined