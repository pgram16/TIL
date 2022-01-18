// filter : return 조건이 true인 데이터 전체를 추출하여 새로운 배열로 return한다.

var data = [{title : "hello",content : "간지철철", price : 12000},
            {title : "crong",content : "괜춘한 상품", price : 5500},
            {title : "codesquad",content : "쩌는상품", price : 1200}];


// 예제1. filter를 이용하여 price가 5000원 이상인 데이터만 추출
var newData = data.filter(function(value){
    return value.price > 5000;
})

console.table(newData);


//--------------------------------------------------
var str = "nice day action";

// 예제2. filter를 이용하여 day 지우기
var newStr = str.split(" ").filter(function(s){
    return s !== "day"
}).join(" ");

console.log("newStr> " , newStr);
// 결과: nice action



// 예제3. filter를 이용하여 str 에서 day를 뒤로 보내기
var newStr2 = str.split(" ").filter(function(s){
    return s !== "day"
}).concat("day").join(" ");

console.log("newStr2> " , newStr2);
// 결과 : nice action day