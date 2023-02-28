import Link from 'next/link';
import cl from 'classnames';
import { FaArrowLeft } from 'react-icons/fa';

import styles from './index.module.scss';

const Article = (
	{
		className,
		children,
		backUrl
	}
) => {
	return (
		<article className={cl(className, styles.article)}>
			{backUrl && (
				<Link href={backUrl}>
					<span className={styles.articleBack}>
						<FaArrowLeft/>
					</span>
				</Link>
			)}
			<div className={styles.articleContent}>
				{children}
			</div>
		</article>
	);
};

export default Article;
