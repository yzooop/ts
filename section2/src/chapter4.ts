// 타입 별칭
type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

let user1: User = {
    id: 1,
    name: "박연주",
    nickname: "veronica",
    birth: "1999.04.04",
    bio: "hello",
    location: "seoul",
}

let user2: User = {
    id: 2,
    name: "홍길동",
    nickname: "robin",
    birth: "1998.05.05",
    bio: "hi",
    location: "busan",
}

// 인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
} // key, value를 기준으로 타입을 지정해준다.

type CountryNumberCodes = {
    [key: string]: number;
};

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
}

let countryNumberCodes: CountryNumberCodes = {
    Korea: 82,
    UnitedState: 1,
    UnitedKingdom: 44,
}