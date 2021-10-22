import { Route, Switch, useLocation } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
import ScrollTop from './components/ScrollTop';
// Animation
import { AnimatePresence } from 'framer-motion';

const App = () => {
	const location = useLocation();
	return (
		<div className='App'>
			<GlobalStyle />
			<ScrollTop />
			<Nav />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path='/work' exact component={OurWork} />
					<Route path='/work/:id' component={MovieDetail} />
					<Route path='/contact' exact component={ContactUs} />
					<Route path='/' exact component={AboutUs} />
				</Switch>
			</AnimatePresence>
		</div>
	);
};

export default App;
