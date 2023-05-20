import React from 'react';

class MyMapComponent extends React.Component {
  render () {
    const planets = [ "Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune" ];

    return (
      <ul>
        {planets.map((planet) => (
          <li key={planet}>{planet}</li>
        ))}
      </ul>
    )
  }
}

export default MyMapComponent;