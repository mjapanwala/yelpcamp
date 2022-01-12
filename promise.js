const loginUser = username => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
resolve({
    username,
})
    }, 2000)
})
}

const makeVideos = name => {
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1,2,3,4,5, {
            name,
            author: "JK Rowling"
        }])
    }, 3000)
})
}
const planDinner = name => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name,  
              },{
                  time: Date.now(),
                  wednesday: "7 pm"
              },
              ["caramilks", "chocholate", "sundae"]
              )
        }, 4000)
    })
}   
loginUser("Jimmy")
.then(username => makeVideos(username.username))
.then(data => console.log(data[5].name))
.catch(err => console.log(err))