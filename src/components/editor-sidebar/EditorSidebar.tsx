import './EditorSidebar.css';

interface EditorSidebarProps {
  children: any;
  className?: string;
}

export const EditorSidebar = ({ className, children }: EditorSidebarProps) => {
  return (
    <div className={`${className} editor-sidebar`}>
      <header className={'editor-header'}>
        <h1>Grid Playground</h1>
      </header>
      {children}
    </div>
  );
};
