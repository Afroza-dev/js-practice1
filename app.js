document.write("hello world!")
console.log("HELLO");
alert("HELLO")
var first = "hello";
console.log(first)
const x = 20
alert(x)
let y = 50
document.write(y)
let oneTwo = null
console.log(typeof oneTwo)
let z = ["one", 10, true]
console.log(z)
console.log(z [0])
let a = {
    name:"Afroza",
    age: 30,
    year: 2024,
}
console.log(a)


// Checking result

 let n = prompt('Enter your result please');
n = Number(n);

if ( n>= 80 && n<= 100){
console.log("GPA : A+");
} else if ( n>= 70 && n<= 79 ){
console.log("GPA : A");
} else if ( n>= 60 && n <= 69 ){
console.log("GPA : A-");}



// convert celsius to farenheit
let c = prompt("enter the value of celsius");
let f = c*9/5+32;
document.write("farenheit=",f);

// convert farenheit to celsius 
let farenheit = prompt("enter the value of farenheit");
let celsius = (f - 32)*5/9;
document.write("celsius=",c)

