import { FC } from 'react';
import IImageGallery from './@ImageGallery';
import styles from './ImageGallery.module.scss';


const ImageGallery: FC<IImageGallery> = ({
	images,
}) => {
	// eslint-disable-next-line no-underscore-dangle
	const _demo = 'demo';
	
	return (
		<ul className={styles.list}>
			{images.map((image) => (
				<li className={styles.listItem}>
					<img src={image.src} alt={image.description} />
				</li>
			))}
		</ul>
	);
};

export default ImageGallery;
