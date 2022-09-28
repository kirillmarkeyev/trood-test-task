import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const obj = {
  items: [
    { name: 'Sold', color: '#BD1FBE', value: 677 },
    { name: 'Got free', color: '#FC64FF', value: 23 },
    { name: 'Burned', color: '#00FF00', value: 202 },
    { name: 'Free float', color: '#BBBBBB', value: 323 },
  ],
  height: 22,
  width: 10,
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={obj} />
  </React.StrictMode>
);
