// 계산기 객체를 만들어보자. 

// 객체는 {} 중괄호다
// var 변수 선언
// var 뒤에 변수 명 지정

var calc = {}; // calc 변수에 객체 생성?

calc.add = function(a, b) {
    return a + b;
};
// 함수또한 중괄호로 표시한다. 
// calc에 add속성을 만들고, 그 안에 함수를 할당하는 경우, 변수에 할당하는 경우
// 이름이 필요 없다. 

console.log('모듈로 분리하기 전 calc.add ' + calc.add(10,10));

// 함수 실행은 소괄호다. 
