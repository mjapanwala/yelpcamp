import React, {useState} from 'react'


//Instead of pushing onto an array you can use the spread operator to copy previous values 
// then add new object onto array
export default function List() {
  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);
  let nextId = 0;
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => {
        setName('');
        // artists.push({
        //   id: nextId++,
        //   name: name,
        // });
        setArtists([{id: nextId++, name},...artists])
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
// ReactDOM.render(<App/>, document.getElementById("app"))