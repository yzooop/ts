// 타입추론
let a = 10;
let b = "hello";
let c = {
  id: 1, 
  name: "veronica",
  profile: {
    nickname: "nica"
  },
  urls: "https://google.com"
}
let { id, name, profile } = c

function func() {
  return "hello"
}

let d; // any로 추론

d = 10; // 값 넣어주면 number로 추론
d.toFixed()

d = "hello"; // 값 새로 넣어주면 string으로 추론
d.toUpperCase();

const num = 10;