var person={
    firstName:'Jan',
    lastName:'Kowalski',
    introduce: function (){
        console.log('Nazuwam się '+this.firstName,this.lastName)
    }
}

person.introduce()

person.firstName='Adam';
person.introduce();

function Car(brand,model){
    this.brand=brand;
    this.model=model;
    this.showDetails=function (){
        console.log('Car: '+brand+model)
    }
}

var fiat=new Car('Fiat ','125p');
fiat.showDetails();


class House{
    constructor(windows,doors) {
        this.windows=windows;
        this.doors=doors;
    }
    showDetails(){
        console.log('Dom maL '+ this.windows+' okien i '+this.doors);
    }
}

var house=new House(2,8);
house.showDetails();