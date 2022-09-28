import { useState } from 'react';
import Header from '../header/Header';
import MainSlider from '../mainSlider/MainSlider';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import './app.scss';


function App() {

	const [slided, setSlided] = useState(false);

	return (
		<div className="container">
			<div className="site-nav">site nav here</div>
			<div className={`App ${slided ? "slided" : null}`}>
				<Header
					slided={slided}
					setSlided={setSlided}
				/>
				<MainSlider />
				<Main />
				<Footer />
			</div>
		</div>
	);
}

export default App;
