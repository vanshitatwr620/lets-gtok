import React from 'react';

const { useState } = require('react');
const ReactDOM = require('react-dom');
const WorldMap = require('react-world-map');

function YourMainComponent() {
  const [selected, onSelect] = useState(null);

  return (
    <>
      <h1> Hello World Map!</h1>
      <WorldMap selected={ selected } onSelect={ onSelect } />
    </>
  );
}

export default WorldMap;