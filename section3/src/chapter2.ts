// Unknown타입
function unknownExam() {
    let a: unknown = 1; // 업캐스팅. 모두 허용
    let b: unknown = 'hello';
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;
    let num: number = unknownVar // error. 다운캐스팅
    let str: string = unknownVar // error
}



// never타입
function neverExam() {
    // 이 함수가 절대 값을 반환하는게 말이 안됨
    function neverFunc(): never {
        while (true) { }
    }

    let num: number = neverFunc(); // 업캐스팅
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    let never1: never = 10; // error. 다운캐스팅
    let never2: never = 'hello';
    let never3: never = true;
}



// void타입
function voidExam() {
    function voidFunc(): void {
        console.log('hi');
        return undefined; // void는 undefined를 반환하는 함수로 정의됨
    }

    let voidVar: void = undefined; // void는 undefined의 슈퍼타입이여서 가능.
}



// any타입
function anyExam() { 
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar; // 원래 안되야 하는데, any 한정해서 unknown도 any로 다운캐스팅 가능
    undefinedVar = anyVar; // 원래 안되야 하는데, any 한정해서 자기한테 다운캐스팅하는거 가능
    neverVar = anyVar // any가 다되지만, 딱하나 - never로 다운캐스팅은 안됨
}   