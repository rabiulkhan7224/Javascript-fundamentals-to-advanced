// class expression
const myName= class{

}
// class declaration
class MyName {

}

class Computer {
    constructor(name, model){
        this.name=name;
        this.model=model;
    }
    aboutComputer(){
       console.log(`this computer name${this.name} and model ${this.model}`);

    }
}

const dell = new Computer('Dell',"djfkds")
console.log(dell);
dell.aboutComputer();