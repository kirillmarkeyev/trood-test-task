/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import _ from 'lodash';
import './App.css';

function App({ data }) {
  const total = data.items.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="main">
      <h1>ProgressBar Component</h1>
      <div className="container">
        {data.items.map((item) => {
          const percent = Math.round((item.value / total) * 100);
          return [...Array(percent)].map(() => (
            <div
              className="element"
              key={_.uniqueId()}
              style={{
                width: `${data.width}px`,
                height: `${data.height}px`,
                background: `${item.color}`,
              }}
            />
          ));
        })}
      </div>
      <div className="legend">
        {data.items.map((item) => (
          <div className="legend-item" key={_.uniqueId()}>
            <div className="circle" style={{ background: `${item.color}` }} />
            <span>
              {item.name}
              :
              {' '}
              {item.value}
              {' '}
              (
              {((item.value / total) * 100).toFixed(1)}
              {' '}
              %)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
