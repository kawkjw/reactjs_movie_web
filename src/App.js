import React from 'react';
import PropTypes from 'prop-types';

const foods = [
  { id: 1, name: 'pizza', image: 'https://picsum.photos/id/1/200', rating: 5 },
  {
    id: 2,
    name: 'kimchi',
    image: 'https://picsum.photos/id/2/200',
    rating: 4.3,
  },
  { id: 3, name: 'rice', image: 'https://picsum.photos/id/3/200', rating: 4.9 },
  {
    id: 4,
    name: 'kimbap',
    image: 'https://picsum.photos/id/4/200',
    rating: 4.2,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      {foods.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
