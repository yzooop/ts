// array
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["Hello", "World"];
let boolArr: Array<boolean> = [true, false]; // 제네릭 타입


// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "Hello"];


// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]


// 튜플 (고정된 길이와 타입을 가지는 배열)
let tup1: [number, number] = [1, 2]; // 길이가 2이고, 각 요소가 number 타입인 배열
// tup1 = [1, 2, 3] // 길이가 넘어서는 배열을 저장할 수 없음
// tup1 = ["1", "2"] // 타입이 맞지 않는 요소를 저장할 수 없음

let tup2: [number, string, boolean] = [1, "Hello", true]; // 길이가 3이고, 각 요소가 number, string, boolean 타입인 배열    

tup1.push(1); // 튜플은 "배열"이기 때문에 배열 메서드를 사용할 수 있음
tup1.pop(); // 그러면 튜플의 길이제한이 발동하지 않음

const users: [string, number][] = [
    ["김땡땡", 1],
    ["이땡땡", 2],
    ["박땡땡", 3],
    // [4, "최땡땡"]
]