"use client"
// components/CookieConsent.tsx
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../lib/cookies';

export const CookieConsent = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const consent = getCookie('cookie-consent');
		if (!consent) {
			setIsVisible(true);
		}
	}, []);

	const handleAccept = () => {
		setCookie('cookie-consent', 'accepted', 365);
		setIsVisible(false);
	};

	const handleDecline = () => {
		setCookie('cookie-consent', 'declined', 365);
		setIsVisible(false);
	};

	if (!isVisible) return null;

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ y: 100 }}
					animate={{ y: 0 }}
					exit={{ y: 100 }}
					className="fixed bottom-0 left-0 right-0 bg-white text-black z-50"
				>
					<div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
						<span className="font-mono">
							This website uses cookies to enhance your experience.
						</span>
						<div className="flex gap-4">
							<button
								onClick={handleDecline}
								className="font-mono text-gray-500 hover:text-black transition-colors"
								aria-label="Decline cookies"
							>
								Decline
							</button>
							<button
								onClick={handleAccept}
								className="px-6 py-3 bg-black text-white hover:bg-red-600 transition-colors font-mono"
								aria-label="Accept cookies"
							>
								Accept
							</button>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};
