// 클래스
let studentA = {
  name: "박연주",
  grade: "A+",
  age: 27,
  study() {
    console.log("공부합니다.");
  },
  introduce() {
    console.log("안녕하세요, 저는 박연주입니다.");
  }
}

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("공부합니다.");
  }

  introduce() {
    console.log(`안녕하세요, 저는 ${this.name}입니다.`);
  }
}

// 클래스를 이용해서 만든 객체  -> 인스턴스
// 스튜던트 인스턴스
let studentB = new Student("xxx", "A+", 27);
console.log(studentB);
studentB.introduce();
studentB.study();





class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  develop() {
    console.log(`${this.favoriteSkill}로 개발합니다.`);
  }
}
