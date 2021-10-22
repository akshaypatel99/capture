import styled from 'styled-components';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';

const ContactUs = () => {
	return (
		<ContactStyle
			style={{ background: '#fff' }}
			variants={pageAnimation}
			initial='hidden'
			animate='show'
			exit='exit'
		>
			<Title>
				<Hide>
					<motion.h2 variants={titleAnim}>Get in touch</motion.h2>
				</Hide>
			</Title>
			<div>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>Send us a message</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>Send an email</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>Social media</h2>
					</Social>
				</Hide>
			</div>
		</ContactStyle>
	);
};

const ContactStyle = styled(motion.div)`
	padding: 5rem 10rem;
	color: #353535;
	min-height: 90vh;
	@media (max-width: 1500px) {
		padding: 2rem;
		font-size: 1rem;
	}
`;

const Title = styled.div`
	margin-bottom: 4rem;
	color: black;
`;

const Hide = styled.div`
	overflow: hidden;
`;

const Circle = styled.div`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	background: #353535;
	margin-right: 2rem;
	@media (max-width: 1500px) {
		display: none;
	}
`;

const Social = styled(motion.div)`
	display: flex;
	align-items: center;
	h2: {
		margin: 2rem;
	}
	@media (max-width: 1500px) {
		h2 {
			margin: 1rem 0rem;
			font-size: 2.5rem;
		}
	}
`;

export default ContactUs;
