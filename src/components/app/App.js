import { useState, useEffect } from "react";

import Header from '../header/Header';
import MainSlider from '../mainSlider/MainSlider';
import Main from '../main/Main';
import Footer from '../footer/Footer';


function App() {

	//доставка, самовывоз или "в закладі"
	const [orderType, setOrderType] = useState();

	return (
		<div className="App">
			<Header />
			<MainSlider />
			<Main setOrderType={setOrderType} />
			<Footer />
		</div>
	);
}

export default App;
