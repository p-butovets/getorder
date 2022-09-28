import { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from '../header/Header';
import MainSlider from '../mainSlider/MainSlider';
import Main from '../main/Main';
import Footer from '../footer/Footer';
import SiteMenu from '../siteMenu/SiteMenu';
import './app.scss';


function App() {

	//открытие меню
	const [slided, setSlided] = useState(false);

	//чтобы закрепить сайдбары при прокрутке
	const [pinBars, setPinBars] = useState(false);

	//слушаем скролл
	const handleScroll = e => {
		console.log(e.currentTarget.scrollTop)
		if (e.currentTarget.scrollTop >= 300) {
			setPinBars(true)
		} else {
			setPinBars(false)
		}
	};

	return (
		<BrowserRouter>
			<div className="container" onScroll={handleScroll}>
				<SiteMenu
					setSlided={setSlided}
				/>
				<div className={`App ${slided ? "slided" : null}`}>
					<Header
						slided={slided}
						setSlided={setSlided}
					/>
					<MainSlider />
					<Main
						pinBars={pinBars}
					/>
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
