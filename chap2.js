console.log('argv 속성의 파라미터 수: ' + process.argv.length)
// +가 되면서 문자열로 붙여짐 
// argv라는 객체안에 length라는 것이 있다. 
console.dir(process.argv)
// 배열로 구성되어 있다. 리스트로 
// 우리가 노드.exe와 실행할 파일의 전체 경로가 들어가 있음을 확인할 수 있다. 
// 프로세스도 전역 객체이다. 콘솔처럼
process.argv.forEach(function(element, index) {
    console.log(index + ' : ' + element)
});

// 자바스크립트는 함수를 변수에 할당할 수 있다. 
// 함수를 일급 객체로 다룬다.(중요하게)
