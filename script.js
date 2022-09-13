// [ 1. 지도에 컨트롤 올리기: 지도 생성, 확대 축소 컨트롤러 ] 
//**********************************************************
var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
var options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(37.54, 126.96), //지도의 중심좌표 (위도 경도 데이터를 바꾸면됨)
  level: 6, //지도의 레벨(확대, 축소 정도) 3에서 8레벨로 확대
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

// [ 지도 확대 축소 제어 ] * * * * 
// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// [ 2. 더미데이터: 음식점, 주소, url(영상링크), 카테고리 ] 
//**********************************************************

const dataSet = [
	{
	  title: "희락돈까스",
	  address: "서울 영등포구 양산로 210",
	  url: "https://www.youtube.com/watch?v=1YOJbOUR4vw&t=88s",
	  category: "양식",
	},
	{
	  title: "즉석우동짜장",
	  address: "서울 영등포구 대방천로 260",
	  url: "https://www.youtube.com/watch?v=1YOJbOUR4vw&t=88s",
	  category: "한식",
	},
	{
	  title: "아카사카",
	  address: "서울 서초구 서초대로74길 23",
	  url: "https://www.youtube.com/watch?v=1YOJbOUR4vw&t=88s",
	  category: "일식",
	},
  ];

  // 주소-좌표 변환 객체를 생성합니다
var geocoder = new kakao.maps.services.Geocoder();
   
async function setMap() {
	// [3. 여러개 마커찍기]
	for (var i = 0; i < dataSet.length; i ++) {
		//인덱싱 해줘야함 for문안에 도는 요소를 넣어주기
		let coords = await getCoordsByAddress(dataSet[i].address)
		// 마커를 생성합니다
		var marker = new kakao.maps.Marker({
			map: map, // 마커를 표시할 지도
			position: coords, // 마커를 표시할 위치 (dataset에서 주소가 한글이여서..:"카카오맵 주소 좌표 변환"을 추가해야함. 위도, 경도 형태로 변환해서 넣어줘야함 )
			});
	}
}

//주소좌표 변환 함수 : 새로운 promise로 반환하는 함수형태로 만듬 
function getCoordsByAddress(address) {
	return new Promise((resolve, reject) => {
		// 주소-좌표 변환 객체를 생성합니다
		var geocoder = new kakao.maps.services.Geocoder();
		// 주소로 좌표를 검색합니다
		geocoder.addressSearch(address, function(result, status) {
			// 정상적으로 검색이 완료됐으면 
			if (status === kakao.maps.services.Status.OK) {
				var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
				//정상적으로 진행되면 resolcve
				resolve(coords);
				return ;
			} else {
				reject(new Error("좌표 오류 getCoordsByAddress !!!! not valid address !!!!"))
			}
		});  
	})
}

setMap();

// // [ 4. 주소 좌표 변환  ]
// // 주소로 좌표를 검색합니다
// geocoder.addressSearch(dataSet[i].address, function(result, status) {
// 	// 정상적으로 검색이 완료됐으면 
// 	if (status === kakao.maps.services.Status.OK) {
// 		var coords = new kakao.maps.LatLng(result[0].y, result[0].x);


// 	} 
// });