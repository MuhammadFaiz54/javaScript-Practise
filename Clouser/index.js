// clouer
// ise kehte hein koi child function apne parent unction ka variable use kare tu wo clouser 
// kehlata he 

function parent ()  {
    let count = 0
    return function () {
        count++
        console.log(count);
    }
   
}
const updateCount =
parent()
updateCount()
updateCount()

