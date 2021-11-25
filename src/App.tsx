import { FC, useState } from 'react';
import { createApi } from 'unsplash-js';
import { ImageGalleryImage } from './components/imageGallery/@ImageGallery';
import ImageGallery from './components/imageGallery/ImageGallery';
import InputString from './components/inputString/InputString';
import Title from './components/title/Title';


const App: FC = () => {
	const [images, setImages] = useState<ImageGalleryImage[]>([]);
	
	const unsplash = createApi({
		accessKey: process.env.REACT_APP_UNSPLASH as string,
	});
	
	let searchDebounce: NodeJS.Timeout;
	const handleSearchChange = (val: string) => {
		if (searchDebounce) {
			clearTimeout(searchDebounce);
		}
		
		searchDebounce = setTimeout(() => {
			unsplash.search.getPhotos({
				query: val,
				page: 1,
				perPage: 50,
			}).then((res) => {
				const newImages: ImageGalleryImage[] = [];
				res.response?.results.forEach((image) => {
					newImages.push({
						id: image.id,
						src: image.urls.small,
						srcFull: image.urls.full,
						height: image.height,
						width: image.width,
						description: image.alt_description || image.description || '',
						downloadLink: image.links.download,
					});
				});
				
				setImages(newImages);
			});
		}, 300);
	};
	
	return (
		<div>
			<Title
				content="ImageMe welcomes you!"
				trailer="To the magnificent experience of useable photographs from all over the world"
			/>
			
			<InputString
				name="search"
				placeholder="Search for an image..."
				handleChange={handleSearchChange}
			/>
			
			<ImageGallery images={images} />
		</div>
	);
};

export default App;
