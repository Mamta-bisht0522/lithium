const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
const abc =require('../logger/logger.js')
const pqr=require('../util/helper.js')
const tmt=require('../util/helper.js')
const trim=require('../validator/formatter.js')


//importing external package
const underscore = require('underscore')
const lodash = require('lodash')



router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log("The value of the constant is ",xyz.myUrl)
    console.log("calling my function",xyz.myFunction())
    abc.myWelcome()
    pqr.myDate()
    tmt.inForm()
    trim.itsTrim()
    // Trying to use an external package called underscore   src/validator/formatter.js
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)

    const truth=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"]
    console.log(lodash.chunk(truth,4));
    const p=[1,3,5,7,9,11,13,15,17,19,]
    console.log(lodash.tail(p));
    let aa=[1,2,3,3,4,5]
    let bb=[6,7,8,9,10,7]
    let cc=[11,12,5,8,9,19]
    let dd=[16,17,18,67]
    console.log(lodash.union(aa,bb,cc,dd));
    console.log(lodash.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]
]));
//To be tried what happens if we send multiple response
    res.send('hey i got it!')
});







module.exports = router;

