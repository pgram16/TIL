var myCar = new Object();

var str = "name",
str2 = "year";

myCar.type = "dot syntax";
myCar[str] = "Ford";
myCar[str2] = 1969;
myCar.owner = "Grpark";

function showProps(obj, objName){
    var result = "";

    for(var i in obj){
        if(obj.hasOwnProperty(i)){
            result += objName + "." + i + " = " + obj[i] + "\n";
        }
    }

    return result;
}


var obj = {"name" : "spark" , "age" : 18, "addr" : "Hwasung"};


function Car(make, model, year, owner, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
    this.color = color;
}

function Person(name, age, sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
}

var brandi = new Person("Brandi", 23, "M");
var marry = new Person("Marry", 20, "F");

var kCar = new Car("Eagle", "Talon TSi", 2003, brandi);
var jCar = new Car("Nissan", "300ZS", 1994, marry);

jCar.color = "Black";


var Animal = {
    type : "포유류",
    displayType : function(){
        console.log("이 동물은 " + this.type +" 입니다.");
    }
}


var fish = Object.create(Animal);
fish.type = "어류";
//fish.displayType();

var bird = Object.create(Animal);
bird.type = "조류";
//bird.displayType();

var bear = Object.create(Animal);
//bear.displayType();


function displayCar(){
    var result = "A Beautiful " + this.year + " " + this.model;
    console.log(result);
}

function Car_01(make, model, year, owner, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
    this.color = color;
    this.displayCar = displayCar;
}

var new_car = new Car_01("Towwi", "Hello_mo", 1993, null, "black");
//new_car.displayCar();

//console.log("color" in new_car);





const data = {
    "debug": "on",
    "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
    },
    "image": { 
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
    },
    "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
    }
}



function loopFun(data, arr){
    for(var i in data){

        if(typeof data[i] == "number"){
            arr.push(i);
        } else if(typeof data[i] == "object"){
            loopFun(data[i], arr);
        }

    }
}

var arr = [];
loopFun(data, arr);

console.log(arr);







var data2 = [{
	"id": 1,
	"name": "Yong",
	"phone": "010-0000-0000",
	"type": "sk",
	"childnode": [{
		"id": 11,
		"name": "echo",
		"phone": "010-0000-1111",
		"type": "kt",
		"childnode": [{
				"id": 115,
				"name": "hary",
				"phone": "211-1111-0000",
				"type": "sk",
				"childnode": [{
					"id": 1159,
					"name": "pobi",
					"phone": "010-444-000",
					"type": "kt",
					"childnode": [{
							"id": 11592,
							"name": "cherry",
							"phone": "111-222-0000",
							"type": "lg",
							"childnode": []
						},
						{
							"id": 11595,
							"name": "solvin",
							"phone": "010-000-3333",
							"type": "sk",
							"childnode": []
						}
					]
				}]
			},
			{
				"id": 116,
				"name": "kim",
				"phone": "444-111-0200",
				"type": "kt",
				"childnode": [{
					"id": 1168,
					"name": "hani",
					"phone": "010-222-0000",
					"type": "sk",
					"childnode": [{
						"id": 11689,
						"name": "ho",
						"phone": "010-000-0000",
						"type": "kt",
						"childnode": [{
								"id": 116890,
								"name": "wonsuk",
								"phone": "010-000-0000",
								"type": "kt",
								"childnode": []
							},
							{
								"id": 1168901,
								"name": "chulsu",
								"phone": "010-0000-0000",
								"type": "sk",
								"childnode": []
							}
						]
					}]
				}]
			},
			{
				"id": 117,
				"name": "hong",
				"phone": "010-0000-0000",
				"type": "lg",
				"childnode": []
			}
		]
	}]
}]


var arr2 = [];

function loop2(data, arr){

    data.forEach(function(value, index){

        findSk(value, arr);

        if("childnode" in value){
            loop2(value.childnode, arr);
        }

    })
}

function findSk(data, arr){
    if("type" in data && data.type == "sk"){
        arr.push(data.name);
    }
}

loop2(data2, arr2);

console.log(arr2);