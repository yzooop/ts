// 인터페이스

interface Person {
  name: string;
  age: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "박연주",
  age: 27,
  sayHi: () => {
    console.log("안녕하세요")
  }
}

person.sayHi();
person.sayHi(1, 2);