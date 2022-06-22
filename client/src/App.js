import React from 'react';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);
  
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>JP Financial</h1>
        <nav className='App-nav'>
          <a href='/'>Overview</a>
          <a href='/'>Accounts</a>
          <a href='/'>Investments</a>
          <a href='/'>Expenses</a>
        </nav>
      </header>
      <body className='App-body'>
        <div className='App-left-panel'>
          <div className='App-accounts'></div>
          <div className='App-expenses'></div>
          <div className='App-transactions'></div>
        </div>
        <div className='App-main-panel'></div>
        {/* <p>{!data ? "Loading..." : data}</p> */}
      </body>
    </div>
  );
}

export default App;
