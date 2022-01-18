var data = [{title : "hello",content : "간지철철", price : 12000},
            {title : "crong",content : "괜춘한 상품", price : 5500},
            {title : "codesquad",content : "쩌는상품", price : 1200}];


// 예제1. title 앞에 hi를 붙인다.
var hiData = data.map(function(value){
    return "Hi " + value.title;
})

console.log(hiData);
// 결과: [ 'Hi hello', 'Hi crong', 'Hi codesquad' ]



// 예제2. price가 5000원 이상인 원소들을 뽑아낸다. 단, 뽑은 원소의 title의 첫번째 글자를 대문자로 변환한다.
var data2 = data.filter(function(v){
    return v.price > 5000
}).map(function(v){
    var obj = {};
    obj.title = v.title.substring(0, 1).toUpperCase() + v.title.substring(1, v.title.length);
    obj.content = v.content;
    obj.price = v.price;
    return obj;
})

console.log(data2);
/*  결과: 
[
  { title: 'Hello', content: '간지철철', price: 12000 },
  { title: 'Crong', content: '괜춘한 상품', price: 5500 }
]
*/

