// object
let user: {
    id?: number; // optional property
    name: string;
} = {
    id: 1,
    name: "박연주"
};

user = {
    name: "홍길동"
};

let config: {
    readonly apiKey: string;
} = {
    apiKey: "MY API KEY",
}

// config.apiKey = "hacked" // readonly 속성은 값을 변경할 수 없음