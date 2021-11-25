import { FC } from 'react';
import InputString from './components/inputString/InputString';
import Title from './components/title/Title';


const App: FC = () => {
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
		</div>
	);
};

export default App;
