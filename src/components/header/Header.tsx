import { openIcon } from '../../icons/icons';
import '../header/Header.css';

interface HeaderProps {
	onEditorButtonClick?: () => void;
	onCodeButtonClick?: () => void;
	className?: string;
}

export const Header = ({
	onEditorButtonClick,
	onCodeButtonClick,
	className,
}: HeaderProps) => {
	return (
		<header className={`${className} app-header`}>
			<button onClick={onEditorButtonClick}>{openIcon}</button>
			<h1>Grid Playground</h1>
			<button onClick={onCodeButtonClick}>{openIcon}</button>
		</header>
	);
};
