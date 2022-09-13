// console.log("querySelector",document.querySelector("div.welcome"))
// console.log("querySelector",document.querySelectorAll("div"))
// console.log("querySelector",document.getElementById("hi"))
// console.log("querySelector",document.getElementsByClassName("welcome"))

// const tag = document.querySelectorAll("div")
// console.log("하하",tag)

// // [ 1. 연습문제 ] js 가지고 CSS style주기 
// const divTag = document.querySelector("div")
// // 추가하기 
// divTag.innerText = "안녕하세요";
// //js로 CSS 폰트 사이즈 바꾸는 방법
// divTag.style.fontSize = "30px";
// console.log("하하",divTag)

// [ 2. 연습문제 ] container에서 출발해서 inner second 아이템을 선택 
//const containerTag = document.querySelector(".container");
// 인덱스 번호로 접근하기 
//console.log(containerTag.children[1].children[1]);

// JS 태그 생성하고 자식태그 추가하기  
// div에 hello넣겠다고 ... ES6를 사용해서 넣기 
// let inner = document.querySelector(".inner")
// console.log(inner)
// let element = document.createElement("div")
// console.log(element)
// let hello = document.createTextNode("hello");
// console.log(hello)
// element.appendChild(hello)
// console.log(element)
// inner.appendChild(element)
// console.log(inner)

// ES6문법을 사용해서 innerHTML로 추가하기 
const app = document.querySelector(".app");
const productsData = [
    {title: "감자칩", weight: 300},
    {title: "인절미", weight: 800},
    {title: "꼬북칩", weight: 200},
    {title: "빠나나", weight: 400},
];
let result = "";
for(let data of productsData) {
    result +=  `<div class="item">상품명 : ${data.title}, 무게 ${data.weight}g 입니다.</div>`
}
app.innerHTML = result;