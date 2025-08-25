// 타입 단언 (type assertion)
type Person = {
  name: string;
  age: number;
}

let person: Person = {} as Person // 빈값으로 초기화해도 특정타입으로 단언할 수 있다.




type Cat = {
  name: string;
  color: string;
}

let cat: Cat = {
  name: "재동",
  color: "cheese",
  breed: "코숏"
} as Cat; // 초과 프로퍼티를 이용해도 가능




// 타입 단언의 규칙
// 값 as 단언 <- 단언식
// A as B
// A가 B의 슈퍼타입이거나
// A가 B의 서브타입이어야 함
let num1 = 10 as never; // 10(number)이 never의 슈퍼타입이기 때문
let num2 = 10 as unknown; // 10(number)이 unknown의 서브타입이기 떄문
let num3 = 10 as unknown as string // 오류. number와 string은 관계가 없어서
// 다중단언은 좋지 않다. 지양하자






// const 단언
let num4 = 10 as const; // const로 선언한것과 동일한 효과
// 프로퍼티의 값을 수정할 수 없다. 프로퍼티를  read only로




// non null 단언
type Post = {
  title: string;
  author?: string;
}

let post: Post = {
  title: "게시글1",
  author: "박연주"
}

const len1: number = post.author?.length; // 오류
const len2: number = post.author!.length; // author가 null이나 undefined가 아니라고 컴파일러가 믿게 함
