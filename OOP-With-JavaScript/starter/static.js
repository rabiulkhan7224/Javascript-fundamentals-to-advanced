class Computer {
    constructor(name, model){

        this.name=name;
        this.model=model;

    }

   aboutComputer(){
            console.log(`this computer name${this.name} and model ${this.model}`);
}

static sayaboutComputer(){
     console.log(`this computer name${this.name} and model ${this.model}`);
}
}
const dell = new Computer('dell', '78kid')
// console.log(dell.aboutComputer());
// not found
// console.log(dell.sayaboutComputer());
// Computer.sayaboutComputer()

// console.log(object);