// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

const user1 = {
    name: "A",
    role: 0 // 0 <-- 관리자
}
const user2 = {
    name: "B",
    role: 1 // 1 <-- 사용자
}
const user3 = {
    name: "C",
    role: 2 // 2 <-- 게스트
}
//---- enum 타입
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2
}

enum Language {
    korean = "ko",
    english = "en",
}

const user4 = {
    name: "D",
    role: Role.ADMIN,
    language: Language.korean
}
const user5 = {
    name: "E",
    role: Role.USER,
    language: Language.english
}
const user6 = {
    name: "F",
    role: Role.GUEST,
    language: Language.korean
}