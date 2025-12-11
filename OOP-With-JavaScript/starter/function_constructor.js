const Computer=function(name, model){
        this.name=name
        this.model=model
        this.aboutComputer=function(){
            console.log(`this computer name${name} and model ${model}`);
        }
    
}
const dell= new Computer('dell',"dd12irie")
const hp= new Computer('hp',"hp23hh")
console.log(dell)
console.log(hp);
dell.aboutComputer()

// const obj={}
// obj. name = "code ABC";
// obj. playlist = 20;
// console. Log (obj)
// 4 rules of Function Constructor
// 1. create an empty object { }
// 2. function is called this = {}
// 3. { } Linked to the prototype
//  4.{ } will return automatically