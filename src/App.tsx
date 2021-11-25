import { FC, useState } from 'react';
import { ImageGalleryImage } from './components/imageGallery/@ImageGallery';
import ImageGallery from './components/imageGallery/ImageGallery';
import InputString from './components/inputString/InputString';
import Title from './components/title/Title';


const App: FC = () => {
	const [images, setImages] = useState<ImageGalleryImage[]>([]);
	
	return (
		<div>
			<Title
				content="ImageMe welcomes you!"
				trailer="To the magnificent experience of useable photographs from all over the world"
			/>
			
			<InputString
				name="search"
				placeholder="Search for an image..."
			/>
			
			<ImageGallery images={images} />
		</div>
	);
};

export default App;
