//console.log('hello world');
//document.write('hello world');
//document.addEventListener("click", myFunction);
// myFunction.addEventListener("")
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }
//console.log("hello world");
// fetch("http://localhost:3000/characters").then
// (function (response) {
//   console.log(response.json);
// })
// .then(function(data){
//   console.log(data);
// }).catch (function(err) {
//   console.log(err);
// })
// function exampleLinear(n) {
//   for (var i = 0 ; i < n; i++ ) {

//    console.log(i);
//    }
//    }
// function a(n){
//    var count =0;
//    for (var i=0;i<n;i++){
//    count+=1;
//   }
//   for (var i=0;i<5*n;i++){
//   count+=1;
//   }
//   return count;
//  }
//const mySample=[1,2,3,4,5]

//let txt="";
//mySample.forEach(myExample)
//function myExample(value,index,array){
//txt+=answer;
//console.log(mySample)

//}
//console.log(mySample)
let language = [{"id":"Elspeth","first_name":"Werrit","last_name":"Brydone","email":"ebrydone0@furl.net","gender":"Female","ip_address":"188.192.19.203"},
{"id":"Flint","first_name":"Cully","last_name":"Schechter","email":"fschechter1@taobao.com","gender":"Male","ip_address":"184.125.7.73"},
{"id":"Hanna","first_name":"Pennino","last_name":"Depke","email":"hdepke2@patch.com","gender":"Female","ip_address":"215.153.239.59"},
{"id":"Felicio","first_name":"Danes","last_name":"MacDermot","email":"fmacdermot3@wisc.edu","gender":"Male","ip_address":"172.160.29.125"}]

//{ fname: "JavaScript", sName: "PHP", tname: "Python" };

let arr = [
  {
    id: "Elspeth",
    first_name: "Werrit",
    last_name: "Brydone",
    email: "ebrydone0@furl.net",
    gender: "Female",
    ip_address: "188.192.19.203",
  },
  {
    id: "Flint",
    first_name: "Cully",
    last_name: "Schechter",
    email: "fschechter1@taobao.com",
    gender: "Male",
    ip_address: "184.125.7.73",
  },
  {
    id: "Hanna",
    first_name: "Pennino",
    last_name: "Depke",
    email: "hdepke2@patch.com",
    gender: "Female",
    ip_address: "215.153.239.59",
  },
  {
    id: "Felicio",
    first_name: "Danes",
    last_name: "MacDermot",
    email: "fmacdermot3@wisc.edu",
    gender: "Male",
    ip_address: "172.160.29.125",
  },
];
arr.foo = "hello";

let text = "";
for (let x in language) {
  text += language[x];
  console.log(x);
}
console.log(text);
console.log(language);
//let language = {fname: "JavaScript", sName: "PHP", tname: "Python"};

//let arr = [3, 5, 7];
//arr.foo = 'hello';

//let text = "";
// "for...of" loop is used to iterate over the values of an iterable, not its keys.
// As "language" is an object, we need to use "for...in" loop instead.
//for(let x in language){
// To access the value of a property using its key, we need to use square brackets notation.
//text += language[x];
//console.log(x);
//};
//console.log(text);
