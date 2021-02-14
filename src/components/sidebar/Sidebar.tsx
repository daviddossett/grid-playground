import React from 'react';

interface SidebarProps {
  onClose?: () => void;
}

export const Sidebar = (props: SidebarProps) => {
  return (
    <div className={'sidebar'}>
      <button className={'close-button'} onClick={props.onClose}>Close</button>
    </div>
  )
}