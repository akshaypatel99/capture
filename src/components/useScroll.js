import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const useScroll = (thresh = 0.4) => {
	const controls = useAnimation();
	const [ref, inView] = useInView({ threshold: thresh });

	if (inView) {
		controls.start('show');
	} else {
		controls.start('hidden');
	}

	return [ref, controls];
};
