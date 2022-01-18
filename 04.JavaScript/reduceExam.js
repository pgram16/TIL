var data = [{title : "hello",content : "간지철철", price : 12000},
            {title : "crong",content : "괜춘한 상품", price : 5500},
            {title : "codesquad",content : "쩌는상품", price : 1200}];


// 예제. price가격을 모두 누적하라.
var totalPrice = data.reduce(function(prevValue, product) { return prevValue + product.price; }, 0);

console.log(totalPrice);
//결과: 18700