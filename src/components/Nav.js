import styled from 'styled-components';
import { NavLink, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

const Nav = () => {
	const history = useHistory();
	const activePath = history.location.pathname;
	return (
		<StyledNav>
			<h1>
				<NavLink to='/' id='logo'>
					Capture
				</NavLink>
			</h1>
			<ul>
				<li>
					<NavLink to='/'>About Us</NavLink>
					<Line
						transition={{ duration: 0.75 }}
						initial={{ width: '0%' }}
						animate={{ width: activePath === '/' ? '50%' : '0%' }}
					/>
				</li>
				<li>
					<NavLink to='/work'>Our Work</NavLink>
					<Line
						transition={{ duration: 0.75 }}
						initial={{ width: '0%' }}
						animate={{ width: activePath === '/work' ? '50%' : '0%' }}
					/>
				</li>
				<li>
					<NavLink to='/contact'>Contact Us</NavLink>
					<Line
						transition={{ duration: 0.75 }}
						initial={{ width: '0%' }}
						animate={{ width: activePath === '/contact' ? '50%' : '0%' }}
					/>
				</li>
			</ul>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background-color: #282828;
	position: sticky;
	top: 0;
	z-index: 100;
	a {
		color: white;
		text-decoration: none;
	}
	ul {
		display: flex;
		list-style: none;
	}
	li {
		padding-left: 10rem;
		position: relative;
	}
	#logo {
		font-family: 'Lobster', cursive;
		font-size: 1.5rem;
		font-weight: lighter;
	}
	@media (max-width: 1500px) {
		flex-direction: column;
		padding: 2rem 0rem;
		ul {
			padding: 2rem;
			justify-content: space-around;
			width: 100%;
			li {
				padding: 0;
			}
		}
	}
`;

const Line = styled(motion.div)`
	height: 0.3rem;
	background: #23d997;
	width: 5%;
	position: absolute;
	bottom: -80%;
	left: 60%;
	@media (max-width: 1500px) {
		left: 0%;
	}
`;

export default Nav;
