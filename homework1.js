// 랜덤 가위바위보 게임 만들기
// 사용자용 변수에 "가위, 바위, 보" 중 하나를 입력하면
// 컴퓨터는 Math.random()을 이용해서 하나를 랜덤 선택
// 둘을 비교해서 승/패/무 결과를 출력

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const choices = ["가위", "바위", "보"];
const computer = choices[Math.floor(Math.random() * 3)];

rl.question("가위, 바위, 보 중에서 하나를 입력하세요: ", function (user) {
  console.log(`사용자: ${user}`);
  console.log(`컴퓨터: ${computer}`);

  if (user === computer) {
    console.log("결과: 무승부!");
  } else if (
    (user === "가위" && computer === "보") ||
    (user === "보" && computer === "바위") ||
    (user === "바위" && computer === "가위")
  ) {
    console.log("결과: 당신이 이겼습니다.");
  } else if (choices.includes(user)) {
    console.log("결과: 컴퓨터가 이겼습니다!");
  } else {
    console.log("잘못된 입력입니다. '가위', '바위', '보' 중에서 입력해주세요.");
  }

  rl.close();
});
