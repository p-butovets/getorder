import Header from '../header/Header';
import MainSlider from '../mainSlider/MainSlider';
import Main from '../main/Main';
import Footer from '../footer/Footer';


function App() {

	// //доставка, самовывоз или "в закладі"
	// const [orderType, setOrderType] = useState();

	// // Храним выбраный клиентом ресторан заказа, айди устанавливаем в компоненте "restaurants"
	// // или определяем по pathName при прямом заходе
	// const [orderRestaurant, setOrderRestaurant] = useState(null);
	// const [orderRestaurantUrl, setOrderRestaurantUrl] = useState(null);

	// //Храним меню выбраного ресторана
	// const [restaurantMenu, setRestaurantMenu] = useState(null);

	// //Рефы категорий. при отрисовке категрий сюда складывается и хранится массив рефов
	// // Для синхронизацции свайпера и скролла
	// const [categoryRefs, setCategoryrefs] = useState([])

	// //Когда выбран ресторан, то устанавливаем его урл и меню єтого ресторана
	// /* Я не разобрался, как получить меню, но тут должен быть
	// запрос на меню ресторана по его айди, и потом установка объекта меню в стейт
	// Сейчас просто одинаковое меню устанавливается*/
	// useEffect(() => {
	// 	for (let rest in restaurants.data) {
	// 		if (restaurants.data[rest].id === orderRestaurant) {
	// 			setOrderRestaurantUrl(restaurants.data[rest].url)
	// 		}
	// 	}
	// 	setRestaurantMenu(menu)
	// }, [orderRestaurant])

	// //Если заход не с главной, а по прямому урл, то устанвливаем orderRestaurant по айди этого урла
	// useEffect(() => {
	// 	for (let rest in restaurants.data) {
	// 		if (restaurants.data[rest].url === window.location.pathname) {
	// 			setOrderRestaurant(restaurants.data[rest].id)
	// 		}
	// 	}
	// }, [])


	return (
		<div className="App">
			<Header />
			<MainSlider />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
