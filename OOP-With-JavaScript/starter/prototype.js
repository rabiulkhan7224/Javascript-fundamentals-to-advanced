const Computer=function(name, model){
        this.name=name
        this.model=model
        // this.aboutComputer=function(){
        //     console.log(`this computer name${name} and model ${model}`);
        // }
    
}

Computer.prototype.aboutComputer=function(){
            console.log(`this computer name${this.name} and model ${this.model}`);
        }
const dell= new Computer('dell',"dd12irie")
const hp= new Computer('hp',"hp23hh")
// console.log(dell)
// console.log(hp);

dell.aboutComputer()

//  Prototypical Chaining
// access prototypes 
console.log(Computer.prototype);
console.log(dell.__proto__);
console.log(Computer.prototype);
// check 
console.log(Computer.prototype ===dell.__proto__);
console.log(dell.hasOwnProperty('name'));
// const arr=[2,3,5,6,7,8,44,33]
// const evenNumber = arr.filter(num=> num % 2 ===0)


// console.log(Array.prototype);
// create a array instance
// console.log(new Array);

//  modify array filter method 

// Array.prototype.filter=function(){
//     let arr= []
//     for(let i=0; i< this.length; i++){
//         if(this[i] % 2 === 0){
//             arr.push(this[i])
//         }
//     }
//     return arr ;
// }

// const arr=[2,3,5,6,7,8,44,33]
// const evenNumber = arr.filter(num=> num % 2 ===1)
// console.log(evenNumber);
// console.log([2,3,5,6,7,8,44,33].filter());
