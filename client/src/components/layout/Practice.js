import React, { useState } from "react";

//Instead of pushing onto an array you can use the spread operator to copy previous values
// then add new object onto array
function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);
  let nextId = 0;
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setName("");
          // artists.push({
          //   id: nextId++,
          //   name: name,
          // });
          setArtists([{ id: nextId++, name }, ...artists]);
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

function RemoveList() {
  const [artist, setArist] = useState(initialArtists);
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artist.map((item) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() =>
                setArist(artist.filter((items) => items.id !== item.id))
              }
            >
              Delete Individual
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
const initialList = [
  { id: 0, title: "Big Bellies" },
  { id: 1, title: "Lunar Landscape" },
  { id: 2, title: "Terracotta Army" },
];
function MakeChange() {
  const [list, setList] = useState(initialList);

  function handleClick() {
    const newArray = [...list];
    newArray.reverse();
    setList(newArray);
  }
  return (
    <>
      <button onClick={handleClick}>Reverse</button>
      <ul>
      {list.map(artist => (
        <li key={artist.id}>
          {artist.title}
        </li>
      ))}
      </ul>
    </>
  );
}
export { RemoveList, List, MakeChange };
// ReactDOM.render(<App/>, document.getElementById("app"))
