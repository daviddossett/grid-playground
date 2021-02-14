import React, { useState } from 'react';
import { Header } from '../header/Header';
import { Sidebar } from '../sidebar/Sidebar';
import './App.css';

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)
  
  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  return (
    <div className={'app'}>
      <Header onCodeButtonClick={toggleSidebar} />
      <main className={'main'} />
      {isSidebarVisible && (
        <Sidebar onClose={toggleSidebar} />
      )}
    </div>
  );
}

export default App;
