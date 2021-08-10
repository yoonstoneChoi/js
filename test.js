console.log('메메롱');

console.log('작은따옴표와 큰 따옴표를 구분하지 않는다. %d',10);
// %d는 스트링 및 플롯 포매팅의 역할을 한다. 

console.log('안녕 %s', '윤석');

// 문자열은 %s다 

var person = {
    name:'소녀시대',
    age:20
}; 
// var 변수명 {속성 값} 자바스크립트 객체

console.log('json 객체입니다. %j', person);

// console.log log를 출력하는 함수
console.dir(person);
//자바스크립트 객체를 바로 출력
// 다른 사람이 만든 라이브러리를 쓸 경우, 객체가 어떤 속성을 가지고 있는지 모름
// 객체가 가지고 있는 속성을 알고 싶을 때 사용한다. 

console.time('time'); //여기부터 
// 함수에는 소괄호가 들어간다. 

var result = 0;
for (var i = 0; i < 10000; i ++) {
    result += i;
}

console.timeEnd('time') //여기 까지 걸린 시간을 체크해줌
console.log(result);

console.log('파일 이름 : %s', __filename); // 실행되고 있는 파일 __filename
console.log('path : %s', __dirname); //파일 경로 __dirname
// 전역변수라 칭한다. 전역객체
// 어디서든 사용할 수 있는 것이 console이다. 

//