import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from '../header/Header';
import MainSlider from '../mainSlider/MainSlider';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import SiteMenu from '../siteMenu/SiteMenu';
import './app.scss';


function App() {

	const [slided, setSlided] = useState(false);

	return (
		<BrowserRouter>
			<div className="container">
				<SiteMenu
					setSlided={setSlided}
				/>
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
		</BrowserRouter>
	);
}

export default App;
