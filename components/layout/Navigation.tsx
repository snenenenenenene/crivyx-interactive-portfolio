'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigation = [
	{ name: 'About', href: '/about' },
	{ name: 'Careers', href: '/careers' },
	{ name: 'Community', href: '/community' },
	{ name: 'Investors', href: '/investors' },
];

const menuItemVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: { opacity: 1, x: 0 }
};

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	// Handle scroll behavior
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Prevent body scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isOpen]);

	return (
		<>
			<header
				className={`fixed w-full z-50 transition-all duration-300
                   ${isScrolled ? 'h-20' : 'h-32'}
                   bg-brutal-white border-b-4 border-brutal-black`}
			>
				<nav className="container mx-auto px-6 h-full">
					<div className="flex items-center justify-between h-full">
						{/* Logo and Name */}
						<Link href="/" className="flex items-center space-x-6">
							<motion.div
								whileHover={{ scale: 1.05 }}
								className="relative"
							>
								<Image
									src="/vulture.png"
									alt="Crivyx Interactive Logo"
									width={isScrolled ? 40 : 48}
									height={isScrolled ? 40 : 48}
									priority
									className="transition-all duration-300"
								/>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								className="hidden md:block"
							>
								<h1 className={`font-display text-brutal-black font-black transition-all duration-300
                               ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
									CRIVYX INTERACTIVE
								</h1>
							</motion.div>
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-1">
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
								>
									<motion.div
										whileHover={{ x: 2, y: 2 }}
										className={`px-4 py-2 font-mono text-brutal-black border-2 m-1
                              transition-all duration-200 ease-in-out
                              ${pathname === item.href ?
												'bg-brutal-red text-brutal-white border-brutal-black shadow-brutal' :
												'border-transparent hover:border-brutal-black hover:shadow-brutal'}`}
									>
										{item.name}
									</motion.div>
								</Link>
							))}
						</div>

						{/* Mobile Menu Button */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="md:hidden p-2 border-2 border-brutal-black hover:bg-brutal-red 
                       hover:text-brutal-white transition-colors"
							onClick={() => setIsOpen(!isOpen)}
							aria-label={isOpen ? "Close menu" : "Open menu"}
						>
							{isOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</motion.button>
					</div>
				</nav>
			</header>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="fixed inset-0 top-[80px] z-40 bg-brutal-white border-t-4 border-brutal-black"
					>
						<div className="container mx-auto px-6 py-8">
							<div className="flex flex-col space-y-4">
								{navigation.map((item, i) => (
									<motion.div
										key={item.name}
										variants={menuItemVariants}
										initial="hidden"
										animate="visible"
										transition={{ delay: i * 0.1 }}
									>
										<Link
											href={item.href}
											onClick={() => setIsOpen(false)}
										>
											<motion.div
												whileHover={{ x: 10 }}
												className={`p-4 font-mono text-2xl font-bold transition-colors
                                  ${pathname === item.href ?
														'text-brutal-red' :
														'text-brutal-black hover:text-brutal-red'}`}
											>
												{item.name}
											</motion.div>
										</Link>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}