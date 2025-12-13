class Computer {
    constructor(name, model){

        this.name=name;
        this.model=model;

    }

   aboutComputer(){
            console.log(`this computer name${this.name} and model ${this.model}`);
}

get computerName(){
    return this.name
}
set computerName (value){
    this.name=value
}
}
const dell = new Computer('dell', '78kid')
dell.computerName='lenovo'
console.log(dell);
console.log(dell.computerName);