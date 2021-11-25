import { FC } from 'react';
import ITitle from './@Title';
import styles from './Title.module.scss';


const Title: FC<ITitle> = ({
	content,
	trailer,
	className,
	...props
}) => {
	const containerClasses = [styles.container];
	if (className) {
		containerClasses.push(className);
	}
	
	return (
		<div className={containerClasses.join(' ')}>
			<h1 {...props}>
				{content}
			</h1>
			
			{!! trailer && (
				<p>
					{trailer}
				</p>
			)}
		</div>
	);
};

export default Title;
