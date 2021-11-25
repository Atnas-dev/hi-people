import { FC } from 'react';
import Title from './components/title/Title';


const App: FC = () => {
	return (
		<div>
			<Title
				content="ImageMe welcomes you!"
				trailer="To the magnificent experience of useable photographs from all over the world"
			/>
		</div>
	);
};

export default App;
