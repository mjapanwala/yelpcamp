import React, { useState } from "react";

//Instead of pushing onto an array you can use the spread operator to copy previous values
// then add new object onto array
// function List() {
//   const [name, setName] = useState("");
//   const [artists, setArtists] = useState([]);
//   let nextId = 0;
//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button
//         onClick={() => {
//           setName("");
//           // artists.push({
//           //   id: nextId++,
//           //   name: name,
//           // });
//           setArtists([{ id: nextId++, name }, ...artists]);
//         }}
//       >
//         Add
//       </button>
//       <ul>
//         {artists.map((artist) => (
//           <li key={artist.id}>{artist.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
// let initialArtists = [
//   { id: 0, name: "Marta Colvin Andrade" },
//   { id: 1, name: "Lamidi Olonade Fakeye" },
//   { id: 2, name: "Louise Nevelson" },
// ];

// function RemoveList() {
//   const [artist, setArist] = useState(initialArtists);
//   return (
//     <>
//       <h1>Inspiring sculptors:</h1>
//       <ul>
//         {artist.map((item) => (
//           <li key={item.id}>
//             {item.name}
//             <button
//               onClick={() =>
//                 setArist(artist.filter((items) => items.id !== item.id))
//               }
//             >
//               Delete Individual
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
// const initialList = [
//   { id: 0, title: "Big Bellies" },
//   { id: 1, title: "Lunar Landscape" },
//   { id: 2, title: "Terracotta Army" },
// ];
// function MakeChange() {
//   const [list, setList] = useState(initialList);

//   function handleClick() {
//     const newArray = [...list];
//     newArray.reverse();
//     setList(newArray);
//   }
//   return (
//     <>
//       <button onClick={handleClick}>Reverse</button>
//       <ul>
//         {list.map((artist) => (
//           <li key={artist.id}>{artist.title}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

function ObjectChange() {
  
  const [person, setPerson] = useState([
    {
      name: "Ronaldo",
      sport: "Soccer",
      team: {
        playerOne: "Silvester d taroni",
        playerTwo: "Mike d'amuzo",
        playerThree: "Muhammad",
        playerFour: "Raj dhirani",
      },
    id: 0,
    },
    {
      name: "Lebronie Jamies",
      sport: "Balling ",
      team: {
        playerOne: "Caey",
        playerTwo: "Munzo",
        playerThree: "Markus dorulo",
        playerFour: "Gundavarapu",
      },
      id: 1,
    },
  ]);

  function changePlayerOne(e, id) {
    if(id === 0) {
      //Create a new array so we dont mutate anything
    const newArray = [...person]
    
   // Get access to the nested object in array
    const firstTeam = newArray[id].team
   
  // Make change to that Object 
    const newObject = {...firstTeam, [e.target.name]: e.target.value }
    newArray.map((item) => {
      
    })
   
    }
    

    }
  
 
  function changePlayerTwo(e) {
    
  }
  function changePlayerThree(e) {
   
  }
  function changePlayerFour(e) {
    
  }
  return (
    <>
      <h1> Change Roster </h1>
      <ul>
        {person.map((playerSelect) => (
          <>
            <h1>
              {playerSelect.name} {playerSelect.sport}
            </h1>
            <li key={playerSelect.id}>
              <input
                // value={playerSelect.team.playerOne}
                type="text"
                name="playerOne"
                id="playerOne"
                onChange={(e) => changePlayerOne(e, playerSelect.id)}
                // VS
                //onChange={() => fsdfasfd}
                placeholder="Player One"
              />
              <input
                type="text"
                onChange={(e) =>changePlayerTwo(e)}
                name="playerTwo"
                id="PlayerTwo"
                placeholder="Player Two"
                value={playerSelect.team.playerTwo}
              />
              <input
                type="text"
                onChange={(e) =>changePlayerThree(e)}
                name="playerThree"
                id="PlayerThree"
                placeholder="Player Three"
                value={playerSelect.team.playerThree}
              />
              <input
                type="text"
                onChange={(e) =>changePlayerFour(e)}
                name="playerFour"
                id="PlayerFour"
                placeholder="Player Four"
                value={playerSelect.team.playerFour}
              />
            </li>
            <button> Change Player</button>
          </>
        ))}
      </ul>
    </>
  );
}
export {  ObjectChange };
// ReactDOM.render(<App/>, document.getElementById("app"))
