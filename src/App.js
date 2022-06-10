import React from 'react';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <NavBar />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;