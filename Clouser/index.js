// clouer
// ise kehte hein koi child function apne parent unction ka variable use kare tu wo clouser 
// kehlata he 

function parent() {
    let count = 0
    return function () {
        count++
        console.log(count);
    }

}
const updateCount = parent()
// updateCount()
parent()()


// useState

function useState() {
    var _count = "";
    function updateCount(val) {
        _count = val
    }
    return {
        incrementVal() {
            updateCount(+1)
        },
        decrementVal(val) {
            updateCount(val)
        },
        returnValue() {
            return _count
        }
    }

}

const forValueSet = useState()


// forValueSet.setValue("hello World")
forValueSet.incrementVal()
forValueSet.decrementVal("hello")

console.log("forInitialValue===",forValueSet.returnValue());