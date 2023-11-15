import React, { useState } from 'react';

const Time = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [people, setPeople] = useState([]);

  const handleAdd = () => {
    if (name && age) {
      setPeople([...people, { name, age }]);
      setName('');
      setAge('');
    }
  };

  return (
    <div>
      <h1>Name and Age Input</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />
      <button onClick={handleAdd}>Add</button>

      <div>
        <h2>People:</h2>
        <ul>
          {people.map((person, index) => (
            <li key={index}>{`Name: ${person.name}, Age: ${person.age}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Time;
