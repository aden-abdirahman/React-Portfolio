import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { root } from 'postcss';
import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
