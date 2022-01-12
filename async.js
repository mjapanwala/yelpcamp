console.log("Let this go first");


// setTimeout(() => {
//     console.log("Timeout")
// }, 1)

// const items = [1,2,3,4,5]
// items.forEach(item => console.log(item));
//Callbacks can be synchronous, not necessarily asynchronous


function loginUser(username, callback) {
    setTimeout(() => {
        console.log("timeout loginuser")
        console.log("timeout loginuser 2")
    callback({username: username})
    }, 6500)
}

function makeVideos(name, callbackTwo) {
setTimeout(() => {
callbackTwo([1,2,3,4,5], {
    name: "Harry Potter",
    author: "JK Rowling"
})
}, 2500)
}

function planDinner(name, dinnerTime) {
setTimeout(() => {
    dinnerTime({
      name,  
    },{
        time: Date.now(),
        wednesday: "7 pm"
    })
}, 2000)
}


const jimmy = loginUser("jimmy", (user) => {
    console.log(user.username);
    makeVideos(user.username, (moviesToMake, {name, author}) => {
        moviesToMake.forEach(number => console.log(number + " " + name + " " + author))
        planDinner("jimmy", ({name},{time, wednesday}) => {
            console.log(name,time, wednesday)
        })
    })
   
})



//Settime out will be taken care of the web api
