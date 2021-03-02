import '../editor-section/EditorSection.css';

interface EditorSectionProps {
  children: JSX.Element[] | JSX.Element;
}

export const EditorSection = ({ children }: EditorSectionProps) => {
  return <section className={'section-container'}>{children}</section>;
};
