// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입

type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
}

type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
}

type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number
}

type User = Admin | Member | Guest;


// 직관적으로 타입을 좁힐 수 있다.
function login(user: User) {
    switch (user.tag) {
        case "ADMIN": {
            console.log(`${user.name}님, 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        } case "MEMBER": {
            console.log(`${user.name}님, 현재까지 ${user.point}모았습니다.`);
            break;
        } case "GUEST" : {
            console.log(`${user.name}님, 현재까지 ${user.visitCount}번 오셨습니다.`);
            break;
        }
    }
}


// 복습 겸 한가지 사례 더
// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
    state: "LOADING";
}
type FailedTask = {
    state: "FAILED";
    error: {
        message: string;
    }
}
type SuccessTask = {
    state: "SUCCESS";
    response: {
        data: string
    }
}

type AsyncTask = LoadingTask | FailedTask | SuccessTask

// 로딩 중 => 콘솔에 로딩중 출력
// 실패 => 실패 : 에러메세지 출력
// 성공 => 성공 : 데이터 출력
function processResult(task: AsyncTask) {
    switch(task.state) {
        case 'LOADING': {
            console.log("로딩 중");
            break
        }
        case 'FAILED': {
            console.log(`에러 발생 : ${task.error?.message}`)
            break;
        }
        case 'SUCCESS': {
            console.log(`성공 : ${task.response?.data}`)
        }
    }
}