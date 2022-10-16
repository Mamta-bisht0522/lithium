let the =function(){
    const today=new Date()
    const day =today.getDate()
    const month=today.getMonth()+1
    console.log(day);
    console.log(month);
    return"yeh"
}
let getInfo=function(){
    Name='lithium',
    week='W3D5',
    topic='Node module assignment'
    console.log(Name);
    console.log(week);
    console.log(topic);
    return "true"
}

module.exports.myDate=the
module.exports.inForm=getInfo
src/validator/formatter.js