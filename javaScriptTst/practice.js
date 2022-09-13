// [1] 변수 선언/자료형 
//변수는 다양한 데이터를 담는 공간으로 다양한 방법으로 선언하는 방법이 있다.
var num = 1;
var num = 10;

// let vs const 재할당과 재선언 차이 
// 재선언이 불가능하다. 
// const에는 재선언이 불가능하다. ;;;;;
let num2 = 2;
const num3 = 3;

// 데이터 타입: 숫자, 문자 , 객체 , 배열 , 논리형 
//1. 문자형 자료 선언 
let string = "안녕"; //문자의 맨앞과 뒤에 ""을 사용하면 됨
//2. 논리형 자료 TRUE/FALSE
let t = 100 > 10;
console.log(t)


//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
// [2] JS 연산자 
// 1. 산술연산자 
// === 데이터 자료형까지 비교를 한다. 1 , "1"은 다른것까지 체크 
// == 1, "1" 값만 비교한다. 
// || 주어진 조건이 하나라도 참이면 true를 반환한다
// && 앞뒤로 주어진 조건이 참이여야만 true를 반환한다
// ! 부정연산으로 true가 나오면 false, false가 나오면 true를 반환한다. 

//적정체중 구하기문제: (키-100) * 0.9
function test (height) {
    let fixed = 100
    let prettyWeight = (height - fixed) * 0.9
    return "your pretty weight is " + prettyWeight + "!"
}
console.log(test(155))

//백틱을 사용하기 `${}` 변수가 들어가는 자리에 ${)넣어주기 
const heigth = 181;
const goodWeight = (heigth - 100) * 0.9;
console.log(`당신의 키는 ${heigth}이며, 정상체중은 ${goodWeight}입니다.`)


//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
// [3] JS 조건문
// 코드를 분석할때는 위에서 아래로 (참,거짓,undefined)
// num이라는 변수에 원하는 숫자형 자료를 대입하고 
// 2로 나누면 나머지가 1이면 홀수, 0이면 짝수다. 
let numTst = 4
if (numTst % 2 === 1) {
    console.log("홀수")
}else{
    console.log("짝수")
}

//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
// [4] JS 배열
// 컨테이너 자료형으로 새로운 자료형을 배울때 CRUD를...create, read, delete, update 생성조회수정삭제! 
// 1. 배열 create
const arr = [1,2,3,4];
// 2. 배열 read: 원하는 요소만 끄집어내기 index번호로 끄집어내기 
// index는 배열의 주소값으로 첫번째 0 으로 1씩 커져가면서 증가한다. 
arr[0]
console.log(arr[3])
// 3. slice()
// 한번에 여러개의 요소를 read하고 싶으면 slice함수로(시작, 끝)을 가져온다. 
// slice는 마지막 요소를 포함하지 않는다. 하나를 더해서 slice를 사용해야 원하는 요소를 가져온다. 
const wantValue = arr.slice(1,2)
console.log(wantValue) //슬라이스 요소에는 마지막 idnexfmf 
// 4. 배열 update
arr[2] = 100; //원하는 요소에 update
console.log(arr)
//5. 배열 delete
arr.splice(0, 2); // (index, 몇 개를 지울지) 
console.log(arr)

//문제 
const nameList = ["짱구", "철수"];
nameList.push("훈이")
console.log(nameList)
nameList[1] = "유리"
console.log(nameList)
nameList.splice(0,1);
console.log(nameList)

//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
// [5] JS 객체
/* 객체 create: { key : value } 사이에 선언한다. 
let userInfo = {
    email: "dkdkd",
    pwd: "123"
} 
 객체조회: 표현방식 
userInfo.email;
userInfo["email"]; 
 객체 update
userInfo.email = "jaeble@gmail.com"
 객체삭제 
delete userInfo.email; */


// ***** 새로운 데이터 타입의 CRUD를 알면좋다 ******


//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
// [5] JS 반복문 
// - for / while 문이 있다
// 문제: 5의 배수를 찍어내라 1~50사이에서 
//5의 배수는 % 5로 나누었을때 나머지가 0인 상태를 이야기한다 
// let i = 1;
// while(i <= 50) {
//     if(i % 5 === 0) {
//         console.log(i)
//     }
// }
// for(let n=1; i <= 10; i++) {
//     console.log("안녕")
// }
for(let k=1; k <= 50; k++) {
    if (k % 5 === 0) {
        console.log("또다시 안녕", k)
    }
}

// 반복문은 container와 함께 잘 활용된다. 
// for in : 반복을 돌때마다 index를 대입을 한다. 0 1 2 3 .. (객체에서 지원)
// for of : 배열안에 존재하는 값 자체를 대입하고 출력한다. (객체에서는 지원안함 X)

// 반복문이 container자료형들과 함께 사용되는지 예시 
//반복을 돌떄마다 key를 대입하게 된다. 
const jsonArr = {email: "dummy", password: "123"};
for(let key in jsonArr) {
    console.log(jsonArr[key])
}
// 반복문안에서 break / continue 
// - break: 빠져나옴
// - continus: 건너뛰고 빠져나옴


//= = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
// [6] JS 함수 
// 함수안으로 전달된 target값을 반복문에서 돌리고 싶은 만큼 돌릴 수 있다. 
function sum (target) {
    let result = 0;
    for(let i=1; i <= target; i++) {
        result = result + i;
    }
    return result;
}
console.log(sum(10))
console.log(sum(50))

//함수 생성하는 정의하는 방법 (사용법)
// - function ,함수이름, 함수재료 등이 필요하다
// 함수 안에서 사용될 파라미터가 여러개면 ,로 나열해주면된다. 

//익명 함수 (변수에 넣어서 사용)
// - 기본형함수: 기본형함수는 함수를 호출하기 전으로 보자면, "호이스팅"을 통해 최상단으로 끌어올림
// - 익명함수: 정의되기 전에 사용못함(호이스팅문제! 호이스팅 지원안함)
// ES6의 화살표함수로 익명함수이다 ! ! ! 호이스팅이 지원되지않음! ! ! !      
const sun = (start, target) => {
    
}
// BMI지수 
// function bmi(height, weight) {
//     const goodWeight = weight / height
//     return goodWeight
// }
function BMI(height, weight) {
    const meterHeight = height / 100;
    const result = weight / (meterHeight * meterHeight);
    return result
}
console.log("멈무게는여 ", BMI(170, 70))