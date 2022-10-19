const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});


app.get("/sol1", function (req, res) {
    let arr= [1,2,3,5,6,7]
 let sumofArr=arr.reduce((a,b)=>a+b);
 console.log(sumofArr);
//  //24+4=28

let n=arr.length+1
console.log(n);
let ab=arr.length
console.log(ab);
let cd=(n*(n+1))/2
// //(7*(7+1))/2=====7*8=56/2===28
console.log(cd);
let missingNumber=cd-sumofArr
console.log(missingNumber);

res.send( { data: missingNumber } );

})

app.get("/sol2", function (req, res) {
    let array= [33, 34, 35, 37, 38];
    let sumOfArray=array.reduce((a,b)=>a+b)
    console.log(sumOfArray)
    //177
let N=array.length+1
console.log(N);
 let AB=array.length
 console.log(AB);
 let first=33
 let last=38
 let CD= N * (first + last) / 2
console.log(CD);
//6(33+38)/2====213
//213-177===36
let missedNumber=CD-sumOfArray
console.log(missedNumber);

  
    res.send( { data: missedNumber } );
    });











