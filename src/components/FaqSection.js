import styled from 'styled-components';
import { Section } from '../styles';
import Toggle from './Toggle';
// Framer Motion
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FaqSection = () => {
	const [ref, controls] = useScroll();

	return (
		<Faq variants={scrollReveal} animate={controls} ref={ref} initial='hidden'>
			<div className='title'>
				<h2>
					<span>F</span>requently
				</h2>
				<h2>
					<span>A</span>sked
				</h2>
				<h2>
					<span>Q</span>uestions
				</h2>
			</div>

			<AnimateSharedLayout>
				<Toggle title='How Do I Start?'>
					<div className='answer'>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
							commodi voluptates eligendi? Lorem ipsum dolor sit amet.
						</p>
					</div>
				</Toggle>
				<Toggle title='What Products Do You Offer?'>
					<div className='answer'>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
							commodi voluptates eligendi? Lorem ipsum dolor sit amet.
						</p>
					</div>
				</Toggle>
				<Toggle title='Services Timeline'>
					<div className='answer'>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
							commodi voluptates eligendi? Lorem ipsum dolor sit amet.
						</p>
					</div>
				</Toggle>
				<Toggle title='Pricing & Payment Methods'>
					<div className='answer'>
						<p>Lorem ipsum dolor sit amet.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
							commodi voluptates eligendi? Lorem ipsum dolor sit amet.
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
		</Faq>
	);
};

// Styled Component
const Faq = styled(Section)`
	display: block;
	span {
		display: block;
	}
	h2 {
		display: flex;
		padding-bottom: 2rem;
		font-weight: lighter;
	}
	.faq-line {
		background: #cccccc;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}
	.question {
		padding: 3rem 0rem;
		cursor: pointer;
	}
	.answer {
		padding: 2rem 0rem;
		p {
			padding: 1rem 0rem;
		}
	}
`;

export default FaqSection;
