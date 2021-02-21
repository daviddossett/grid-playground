import { code, grid } from '../../icons/icons';
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
			<button aria-label={'Edit grid'} onClick={onEditorButtonClick}>
				{grid}
			</button>
			<h1>Grid Playground</h1>
			<button aria-label={'View code'} onClick={onCodeButtonClick}>
				{code}
			</button>
		</header>
	);
};
