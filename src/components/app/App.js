import { useState } from 'react';
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

	//чтобы показать topbar
	const [showTopBar, setShowTopbar] = useState(false);

	//слушаем скролл
	//при прокрутке на 300 закреполяем меню, корзину и показіваем topbar
	const handleScroll = e => {
		if (e.currentTarget.scrollTop >= 300) {
			setPinBars(true)
			setShowTopbar(true)
		} else {
			setPinBars(false)
			setShowTopbar(false)
		}
	};

	return (
		<BrowserRouter>
			<div
				className="container"
				onScroll={handleScroll}
				style={slided ?
					{ overflowY: "hidden" }
					:
					null}>
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
						showTopBar={showTopBar}
					/>
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
