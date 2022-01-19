var healthObj = {
    name : "새나라",
    lastTime : "pm 10:12",
    showHealth: function() {
        setTimeout(function(){

            console.log( this.name + "님 안녕하세요. 오늘 운동 시간 : " + this.lastTime);
        }.bind(this), 1000);
        
    }
}

healthObj.showHealth();

/*
 bind 
 bind 함수는 새로운 함수를 반환하는 함수이다. 
 bind 함수의 첫번째 인자로 this를 주어, 그 시점의 this를 기억하고 있는 새로운 (바인드된)함수가 반환된다.

 함수뒤에 .을 붙이면 함수도 객체가 된다.(=함수객체)

*/