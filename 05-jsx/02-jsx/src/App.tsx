import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    const logoAttrs = {
      alt: "logo",
      className: "App-logo",
      src: logo
    };
    const title = "こんにちはReact";
    const targets = ["World", "Kanae", "Yukina"];

    return (
      <div className="App">
        <header className="App-header">
          {
            // コメントはこう書く
          }
          <img {...logoAttrs} />
          {title && <p>{title}</p>}
          {targets.map(target => (
            <p>Hello, {target}!</p>
          ))}
        </header>
      </div>
    );
  }
}

export default App;
