import React, { useState } from 'react';
import { Header } from '../header/Header';
import { Sidebar } from '../sidebar/Sidebar';
import './App.css';

export interface IColumnsState {
  count: string;
  gutter: string;
  margin: string;
}

const initialcolumnsState: IColumnsState = {
  count: '12',
  gutter: '20',
  margin: '32',
}

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false)
  const [columnsState, setColumnsState] = useState(initialcolumnsState);
  
  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }

  function handleColumnCountChange(e: any) {
    setColumnsState({...columnsState, count: e.target.value })
  }

  function handleColumnGutterChange(e: any) {
    setColumnsState({...columnsState, gutter: e.target.value })
  }

  function handleColumnMarginChange(e: any) {
    setColumnsState({...columnsState, margin: e.target.value })
  }

  console.log(columnsState);

  return (
    <div className={'app'}>
      <Header 
        columnsState={columnsState}
        onColumnCountChange={handleColumnCountChange} 
        onColumnGutterChange={handleColumnGutterChange} 
        onColumnMarginChange={handleColumnMarginChange} 
        onCodeButtonClick={toggleSidebar} 
      />
      <main className={'main'}>
      </main>
      {isSidebarVisible && (
        <Sidebar onClose={toggleSidebar} />
      )}
    </div>
  );
}

export default App;
