// ye block scope he isme same name replace nahi hota same name ki multiple
// variable banjati he agar alag alag block me declare karein tu 

let vechile = "car"

if (true) {
    let vechile = "bike"
}
console.log("vechile", vechile);


// ye globle scope he isme same name hoga tu value replace kare ga same name ki multiple
// variable nahi banti isme 

var fruit = "banana"
if (true) {
    var fruit = "mango"
}
console.log("fruit", fruit);

// code line by line read hota he phele call stack me jaega phir agar async 
// function hwa tu web Apis me jaega phir waha se task queue phir wo dekhe ga 
// call stack me koi nahi he tu wo call stack me jaega phir wahan se out or agar 
// async nhi hw tu direct call stack me jaega or wahin se out

// var ki waja se answer jo aye ga 5 aye ga q ke ye block nahi he ye call stack me roke ga nahi jub 
// async function return proccess se ghom kar ayega tu ose last me variable 5 milega osey q ke w last he or 
// baki cheezein phele out jo jaegi

for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log("var", i);
    }, 2000);

}
// let ki waja se answer jo aye ga 1,2,3,4,5 aye ga q ke ye block  he ye call stack me roke ga  jub 
// async function return proccess se ghom kar ayega tu ose last me variable 1,2,3,4,5 milega 

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log("let", i);
    }, 2000);

}
