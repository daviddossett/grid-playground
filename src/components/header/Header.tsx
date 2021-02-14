import React from 'react';

interface HeaderProps {
  onCodeButtonClick: () => void;
}

export const Header = (props: HeaderProps) => {
  return (
    <header className={'header'}>
      <h1>Grid Playground</h1>
      <button onClick={props.onCodeButtonClick} >View code</button>
    </header>
  )
}