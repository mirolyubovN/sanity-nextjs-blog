import ScreenEgg from '../ScreenEgg';
import styles from './index.module.scss';
import cl from 'classnames';

const BuyMeCoffee = ({
		className
}) => {
	return (
		<ScreenEgg type='right'>
			<div className={cl(className, styles.buyCoffee)}>
				<a className={styles.buyCoffeeButton}target='_blank' href='/'>
					Buy me a coffee...
				</a>
			</div>
		</ScreenEgg>
	);
};

export default BuyMeCoffee;
