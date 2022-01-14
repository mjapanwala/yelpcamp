// const loginUser = username => {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
// resolve({
//     username,
// })
//     }, 1000)
// })
// }

// const makeVideos = name => {
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (!name) {
//             reject("No name")
//         }
//         resolve([1,2,3,4,5, {
//             name,
//             author: "JK Rowling"
//         }])
//     }, 2000)
// })
// }
// const planDinner = name => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([
//                 name,
//                 {
//                     date: Date.now(),
//                     wednesday: "7pm"
//                 },
//                 1,
//                 2,
//                 7,
//                 5

//             ])
//         }, 8000)
//     })
// }   


// async function displayAll() {
//     try {

    
//     const login = await loginUser("Jimmy")
//     console.log(login)
//     const videos = await makeVideos()
//     console.log(videos)
//     const plan = await planDinner(login.username)
//     console.log(plan);
//     } catch(e) {
//         console.log(e)
//     }
// }

// displayAll()

// // Promise.all([loginUser("jimmy"), makeVideos("jimmy"), planDinner("jimmy")])
// // .then(response => console.log(response));

// // loginUser("Jimmy")
// // .then(username => makeVideos(username.username))
// // .then(data => console.log(data[5].name))
// // .catch(err => console.log(err))