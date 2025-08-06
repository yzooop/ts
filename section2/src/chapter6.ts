// any
// 특정 변수의 타입을 윌가 확실히 모를 때
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => { };

anyVar.toUpperCase(); // 오류
anyVar.toFixed();

let num: number = 10;
num = anyVar;



// unknown
let unknownVar: unknown;
unknownVar = 10;
unknownVar = "hello";
unknownVar = true;
unknownVar = {};
unknownVar = () => { };

if (typeof unknownVar === "string") {
    unknownVar.toUpperCase();
}