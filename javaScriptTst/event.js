// [ 함수 직접 인자 전달 ]
/* const clickBtn = document.querySelector("#btn")
clickBtn.addEventListener("click", function(){
    document.getElementById("text").innerHTML = "클릭시 이벤트 텍스트 추가";
}); */

// [ 이벤트 핸들러 호출]
const clickBtn = document.querySelector("#btn")
clickBtn.addEventListener("click", clickEvent)

function clickEvent(event) {
   console.log('확인', event.target);
    document.getElementById("text").innerHTML = "이벤트 핸들러 호출"
}