import React from 'react';
import './App.css';

function App() {
  const pets = [
    {
      name: 'Dolly',
      type: 'cat',
      description: 'Dolly is funny and loves to be around people',
      skills:['fetch','play dead','roll over'],
      image:'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg'
    },
    {
      name: 'Molly',
      type: 'cat',
      description: 'Molly is a sweet and cuddly cat stretch a lot',
      skills:['meow','purr','play dead'],
      image: 'https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg?cs=srgb&dl=pexels-vadim-b-127028.jpg&fm=jpg'
    }
  ]
  return (
    <div className='App'>
      <h1>My pets</h1>
      <ul className='container'>
        {
          pets.map((pet, index)=>(
            <li key = {index}>
              <h2>{pet.name}</h2>
              <p>{pet.description}</p>
              <img src={pet.image} alt = {pet.name} width ="200px" height="200px" />
              <ul className='skills'>
                {
                  pet.skills.map((skill, index)=>(
                    <li key={skill}>{skill}</li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  );
 
}

export default App;
