const express = require('express');
const app = express();
const moment=require('moment')
// app.get('/',function(req, res,next) {
//     const ipAddress = req.socket.remoteAddress;
//     console.log(ipAddress)
//     res.send(ipAddress);
//     next()
// }); 
// app.listen(3000, () => console.log(`Server is listening on port 3000`)) 
 
// let currentTime =function(){
//     const today=new Date()
//     const day =today.getDate()
//     const month=today.getMonth()+1
//     const year=today.getFullYear()
//   console.log(day,month,year)
// }
// app.get('/currentTime',currentTime)

app.get('/',function(req, res,next) {
  let DateTime=moment().format('YYYY-MM-DD hh:mm:ss ')
   let ipAddress = req.socket.remoteAddress;
    let loactionOfRoute=req.path
    console.log(DateTime+ "" +ipAddress+""+loactionOfRoute)
    res.send(ipAddress);
    next()
 }); 
 app.listen(3000, () => console.log(`Server is listening on port 3000`)) 
 