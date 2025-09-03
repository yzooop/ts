// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// 어떤 "타입의" 매개변수를 받고, 어떤 "타입의" 결과값을 반환하는지 이야기
function func(a:number, b: number) {
  return a + b;
}



// 화살퓨 함수의 타입을 정의하는 방법
const add = (a:number, b: number) => a + b


// 함수의 매개변수
function introduce(name = "박연주", tall?: number) {
  console.log(`name: ${name}`)
  console.log(`tall: ${tall}`)
}

introduce("박연주", 163)
introduce("박연주")


function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it))
  return sum
}