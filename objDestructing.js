//  ....normal arry
const friends =["hero" , "hena"]

    const element1 = friends[0];
    const element2 = friends[0];

    
// >>>>>>>>destructuring<<<<<<<
const friend2 =[ "hero" ,"alom","henna"];
const[element3,element4,element5]=friend2;
console.log(element3,element4,element5)
console.log(element4,element3,element5)




// >>>>object destructting<<<


const person ={
    name : "saif",
    age : 20,
    country: "bd"
}
const {name,country ,age }=person;
console.log(age)
