// 로또번호 생성기
// 1 ~ 45까지 숫자 중 중복없이 6개를 추출
// 작은 수를 앞으로 정렬(오름차순)

function generateLottoNumbers() {
  const numbers = new Set();

  while (numbers.size < 6) {
    const randomNum = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNum);
  }

  const lottoNumbers = Array.from(numbers).sort((a, b) => a - b);

  return lottoNumbers;
}

console.log("로또 번호:", generateLottoNumbers());
