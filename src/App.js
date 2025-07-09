import React from 'react';
import Profile from './Profile';

function App() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <Profile name="Alice" age={25} />

    </div>
  );
}

export default App;
