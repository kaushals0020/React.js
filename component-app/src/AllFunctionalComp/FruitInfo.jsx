// FruitInfo.js
import React from 'react';

export default function FruitInfo(props) {
  return <div>
    <h2>This is a {props.fruit}!</h2>;
    <h2> {props.animal}! is on the tree</h2>;
    </div>
}
