import React from "react";
import {
	FaGithub,
	FaInstagram,
	FaTelegram,
	FaExternalLinkAlt,
	FaLinkedin
} from 'react-icons/fa';

import ScreenEgg from '../ScreenEgg';
import styles from './index.module.scss';
import cl from 'classnames';

const socialNetworks = [
	{
		id: 1,
		href: 'https://www.linkedin.com/in/mirolyubovn',
		icon: FaLinkedin
	},
	{
		id: 2,
		href: 'https://mirolyubovn.netlify.app/',
		icon: FaExternalLinkAlt
	},
	{
		id: 3,
		href: 'https://github.com/mirolyubovN',
		icon: FaGithub
	},
	{
		id: 4,
		href: 'https://t.me/mirolyubovN',
		icon: FaTelegram
	},
	{
		id: 5,
		href: 'https://www.instagram.com/mirolyubov_n',
		icon: FaInstagram
	},
]
const SocialNetworks = ({
		className
}) => {
	return (
		<ScreenEgg type='left'>
			<ul className={cl(className, styles.list)}>
				{socialNetworks.map(network => (
					<li className={styles.listItem} key={network.id} >
						<a href={network.href} target="_blank" className={styles.listLink}>
							{React.createElement(
								network.icon,
								{
									color: 'black',
									size: 50
								}
							)}
						</a>
					</li>
				))}
			</ul>
		</ScreenEgg>
	);
};

export default SocialNetworks;
