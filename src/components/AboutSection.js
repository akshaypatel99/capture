import home1 from '../img/home1.png';
import { Section, Description, Image, Hide } from '../styles';
// Framer Motion
import { motion } from 'framer-motion';
import { titleAnim, fade, photoAnim } from '../animation';
import Wave from './Wave';

const AboutSection = () => {
	return (
		<Section>
			<Description>
				<motion.div>
					<Hide>
						<motion.h2 variants={titleAnim}>We work to make</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>
							your <span>dreams</span> come
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>true.</motion.h2>
					</Hide>
				</motion.div>
				<motion.p variants={fade}>
					Contact us for any photography or videography ideas that you have. We
					have professionals with amazing skills.
				</motion.p>
				<motion.button variants={fade}>Contact us</motion.button>
			</Description>
			<Image>
				<motion.img
					src={home1}
					alt='Man holding camera.'
					variants={photoAnim}
				/>
			</Image>
			<Wave />
		</Section>
	);
};

// Styled Component
// const AboutSec = styled.div`
// 	min-height: 90vh;
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// 	padding: 5rem 10rem;
// 	color: white;
// `;

// const Description = styled.div`
// 	flex: 1;
// 	padding-right: 5rem;
// 	font-weight: lighter;
// `;

// const Image = styled.div`
// 	flex: 1;
//   overflow: hidden;

//   img {
//     width: 100%;
//     height: 80vh;
//     object-fit: cover;
//   }
// `;

// const Hide = styled.div`
//   overflow: hidden;
// `

export default AboutSection;
