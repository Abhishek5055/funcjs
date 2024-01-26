// //functions
// function ab(){
//     console.log("Hi")
// }
// ab();

// //ex:2
// function name(){
//     console.log("Abhishek")
//     console.log("Ok")
// }
// name()

// //ex:3
// function print(){
//     for(i=0;i<=5;i++)
//     {
//         console.log(i)
//     }
// }
// print();

// //ex:4
// function isadult(){
//     let age = 19;
//     if(age>=18)
//     {
//         console.log("Adult")
//     }
//     else{
//         console.log("Not Adult")
//     }
// }
// isadult();

// // writee a function to print a poem
// function printpoem(){
//     console.log("Twinke twinke little star");
//     console.log("How i wonder what you are:");
// }
// printpoem()

// // create a function to roll a dice & display the value of the dice (1 to 6)
// function rolldice(){
//     console.log(Math.floor(Math.random()*6)+1);
// }
// rolldice()

// //functions with arguments
// function printname(name){
//     console.log(name)
// }
// printname("Abhi");

// // print name and age as taking the argument
// function printInfo(name,age){
//     console.log(`Name is ${name} and age is ${age}`)
// }
// printInfo("Abhi",20) // in functions order is important

// //function to add two numbers by taking arguments
// function sum(a,b){
//     console.log(a+b)
// }
// sum(2,4);

// // create a function to give a average of three numbers
// function average(a,b,c){
//     let avg = (a+b+c)/3
//     console.log(avg)
// }
// average(5,6,7);

// //create a function to print multiplication table of a number
// var n = prompt("Enter a number");
// n = parseInt(n);
// function table(n){
//     for(var i=1;i<=10;i++)
//     {
//         console.log(`${n} * ${i} = ${n*i}`)
//     }
// }
// table(n);

// // return keyword //  if we try to print anything after return keyword in function it is not ossible to print
// function sum(a,b){
//     return a+b;
// }

// console.log(sum(2,3));

// //ex:2
// function isAdult(age){
//     if(age>=18)
//     {
//         return "Adult"
//     }
//     else
//     {
//         return "not adult";
//     }

// }
// console.log(isAdult(18));

// // create a function that returns sum of numbers from 1 to n
// var n = prompt("Enter a number:")
// n = parseInt(n);
// var sum = 0
// function add(n){
//     for(var i=0;i<=n;i++)
//     {
//         sum += i;
//     }
//     return sum
// }
// console.log(add(n));

// // reate a function that returns the concatenation of all strings in an array
// let str = ["hi","hello",2, "you"]
// function concat(str){
//     let result = "";
//     for(i=0; i<str.length; i++)
//     {
//         result += str[i]
//     }
//     return result
// }
// console.log(concat(str));

// Scope
//global scope - accessible everywhere
//function scope- accessible inside function only


// //function scope and global scope
// let sum = 54; // global Scope
// function calSum(a,b){
//     sum = a+b; //function scope
//     console.log(sum)
// }
// calSum(2,6);


// Block scope
// block scope is applicable for only let and const keyword
// {
//     let a = 10; //Block Scope
// }
// console.log(a); // Here it will give error becaause we cannot access a blick scope outside the vurly bracket

// // ex:2
// for(let i=0;i<=5;i++)
// {
//     console.log(i) // block scope
// }
// console.log(i); // error

// // Lexical scope
// // it's like a nested function inside another function
// function outerfunc(){
//     let x = 10;
//     let y =20;
//     function innerfunc(){
//         console.log(x); // 10 // it's possible because of lexical scope
//     }
//     innerfunc()
// }
// outerfunc()

// // usage of all scopes
// let greet = "hello"
// function outergreet(){
//     let greet = "namaste"
//     console.log(greet)
//     function innergreet(){
//         console.log(greet)
//     }
//     innergreet()
// }
// console.log(greet);
// outergreet();

// // function expression or nameless function
// let add = function(a,b){
//     sum = a+b
//     console.log(sum)
// }
// add(2,3);

// // High order functions
// // A function that accepts as an argument another function and executes that function with some data

// function multiplegreet(func,count){ // higher order function
//     for(i=0; i<count ;i++)
//     func()
// }
// let greet = function(){
//     console.log("greet");
// }
// multiplegreet(greet , 10);

// // // Return a function using higher order function
// function oddOrEvenFactory(request){
//     if(request == "odd")
//     {
//         return function(n){
//             console.log(!(n%2 == 0));
//         }
//     }
//     else if(request == "even")
//     {
//         return function(n){
//             console.log(n%2 == 0);
//         }
//     }
//     else{
//         console.log("Wrong request")
//     }
// }

// let request = "odd"; //even

// Methods
// // Actions that can be performed on an object
// let calculator = {
//     sum: function(a,b){
//         return a+b;
//     },
//     sub: function(a,b){
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     },
//     div: function(a,b){
//         return a/b;
//     }
// }

// // Methods(Shorthand)
// const calculator ={
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b){
//         return a-b;
//     }
// }

// Practice Questions
//  // Question 1
//  let arr = [2,3,4,5,,6,7,8,9,10]
//  let num = 5
//  function large(arr, num)
//  {
//     for(i=0; i<arr.length;i++)
//     {
//         if(num<arr[i]){
//             console.log(arr[i]);
//         }
//     }
//  }
//  large(arr,num);

// // Question 2
// let str = "abcdefghabcdefgh"

// function  unique(str){
//     let ans = "";
//     for(let i=0;i<str.length;i++)
//     {
//         let currchar = str[i];
//         if(ans.indexOf(currchar) == -1){
//             ans += currchar;
//         }
//     }
//     return ans
// }
// console.log(unique(str));

// //Question 3
// let country = ["Australia","Germany","United States of America"];

// function longestName(country){
//     let ansIdx = 0;
//     for(let i=0; i<country.length; i++)
//     {
//         let ansLen = country[ansIdx].length;
//         let currLen = country[i].length;
//         if(currLen > ansLen)
//         {
//             ansIdx = i;
//         }
//     }
//     return country[ansIdx];
// }
// longestName(country);
// console.log(longestName(country))

// //Question 4
// let str = "Abhishek"
// function vowel(str){
//     str = str.toLowerCase();
//     let count = 0;
//     for (let i=0; i<str.length; i++)
//     {
//         if(["a","e","i","o","u"].indexOf(str[i]) !== -1)
//         {
//             count++;
//         }
//     }
//     return count
// }
// console.log(vowel(str)) 

// //Question 5
// let a = 200;
// let b = 300;
// function generateRandom(a,b){
//     console.log(Math.floor(Math.random() * (b-a+1))+a);
// }
// generateRandom(a,b)
