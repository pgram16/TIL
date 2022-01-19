var healthObj = {
    name : "달리기",
    lastTime : "pm 10:12",
    showHealth: function() {
        console.log("오늘의 운동 : " + this.name + " & 운동 시간 : " + this.lastTime);
    }
}

healthObj.showHealth();


const obj = {
    setName(name){
        this.name = name;
    } ,
    getName(){
        return this.name;
    }
}

obj.setName("crong");
console.log(obj.getName());

/*
    this
    자바스크립트에는 전역스크립트나 함수가 실행될 때 실행문맥(execution context)이 생성된다.
    (참고로 실제 실행은 브라우저내에 stack 이라는 메모리 공간에 올라가서 실행된다.)
    모든 context에는 참조하고있는 객체(thisBinding이라 함)가 존재하는데, 
    현재 context가 참조하고있는 객체를 알기 위해서는 this를 사용할 수 있다.
*/