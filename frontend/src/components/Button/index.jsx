import styles from './index.module.scss';
import cl from 'classnames';

const Button = ({
	className,
	children,
	onClick,
	disabled
}) => {
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={cl(className, styles.button)}
		>
			{children}
		</button>
	);
};

export default Button;
