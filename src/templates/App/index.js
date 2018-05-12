import React from 'react';

import style from './App.sass';

console.log(style);

class App extends React.Component {
  render() {
    return(
      <div className={style.loureiro}>
        <p>React it´s work!</p>
      </div>
    )
  }
}

export default App;