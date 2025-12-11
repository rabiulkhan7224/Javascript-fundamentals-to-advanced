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