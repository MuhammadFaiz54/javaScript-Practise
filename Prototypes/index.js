let user = {
    getFullName : function () {
        return this.Fname + this.Lname
    },
    getFullAge : function () {
        let age = new Date().getFullYear() - this.birth
        return age
    }
}
let teacher = {
    Fname : "Code Step By Step",
    Lname : "By Step",
}
// function student() {
    
    let student = {
        Fname : "Muhammad",
        Lname : "Faiz",
        birth : 2001
    }
// }

teacher.__proto__ = user
student.__proto__ = user
student.__proto__ = teacher

student.__proto__={
    name:"waqas"
}
// console.log('teacher===', teacher);
// console.log('student===', student);



// isme mujhe ye smjh aya he me koi object ya function bahir banar kar
// or dosre function ke sath osey proto ko  attached karte hein tu oski value wo read kar start kar deta he phir


function multiplyBy5(num) {
    return num*5;
};

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


// is wale me me "this" or "new" dono ka use karunga isme in dono ko 
// use kar ke clear ho jaeingi chiizen

// first me 1 function declare kar raha hun simple sa

function createUser(userName, score) {
    // yahan per this ka use is lie kiya he unic karne ke liye
    //  direct agar me same name se declare krun tu pehchanna mushqil he peram 
    // se kon se "userName" or "score" araha he or mera kon sa he ya tu direct aap 
    // bina ksi var me declare kare likh do like
    // example
    // userName
    // score

    this.userName = userName
    this.score = score
}

createUser.prototype.increment = function() {
// yahan per mne test kiya he bina this lagae jub bhi thik he ise "score ki value"
// mil rahi he "mne use is lie kiya he this ka matlab he iss yani jis ne ise call kiya he 
// os ki value do " 
    this.score
}
createUser.prototype.printMe = function() {
    // yahan per mne test kiya he bina this lagae jub bhi thik he ise "score ki value"
// mil rahi he "mne use is lie kiya he this ka matlab he iss yani jis ne ise call kiya he 
// os ki value do " 
    console.log(`Price is  ${this.score}`);
}
// yahan per "new" is lie use kiya he hamme batana hoga mene naya prototype use kiye he 
const chai =  new createUser("chai", 25)
const Tea = new createUser("Tea", 250)

Tea.printMe()



// isme trim ke baare me parhte hein

let myName = {
name:"Muhammad Faiz   "
}
let functTrue = {
    trueLength: function () {
        return  console.log("this-----", this);
    }
}
//  My name actual Length is 13 but i add space its increase the length why?
// console.log("myName", myName.length);

// // its solution is trim
// console.log("myName", myName.trim().length);

myName.__proto__= functTrue
console.log("data", myName);
