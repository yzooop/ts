// void
// 아무것도 없음을 의미하는 타입

function func1(): string {
    return "hello"
}

function func2(): void { // 아무것도 반환하고 있지 않으므로
    console.log("This function does not return anything");
}


// never
// 불가능한 타입
function func3(): never {
    while (true) {} // 종료가 되지 않는 .불가능한 -> never
}

function func4(): never {
    throw new Error();
}
