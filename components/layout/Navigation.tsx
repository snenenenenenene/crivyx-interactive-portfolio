'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Careers', href: '/careers' },
	{ name: 'Community', href: '/community' },
	{ name: 'Investors', href: '/investors' },
];

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

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
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
                   ${isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'}`}
			>
				<nav className="container mx-auto px-6">
					<div className="flex items-center justify-between h-20">
						{/* Logo */}
						<Link
							href="/"
							className="relative z-50"
						>
							<motion.div
								whileHover={{ scale: 1.05 }}
								className="relative"
							>
								<Image
									src="/vulture.png"
									alt="Crivyx Interactive Logo"
									width={100}
									height={100}
									priority
									className="transition-transform duration-300"
								/>
							</motion.div>
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-8">
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className={`relative text-sm font-medium transition-colors duration-300
                            ${pathname === item.href ? 'text-brutal-red' : 'text-white hover:text-brutal-red'}
                            before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-full before:h-px
                            before:bg-brutal-red before:scale-x-0 before:origin-right before:transition-transform
                            hover:before:scale-x-100 hover:before:origin-left`}
								>
									{item.name}
								</Link>
							))}
						</div>

						{/* Mobile Menu Button */}
						<motion.button
							whileTap={{ scale: 0.9 }}
							onClick={() => setIsOpen(!isOpen)}
							className="relative z-50 p-1 md:hidden text-white hover:text-brutal-red transition-colors"
							aria-label="Toggle Menu"
						>
							{isOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</motion.button>
					</div>
				</nav>
			</header>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.2 }}
							className="fixed inset-0 bg-black/90 backdrop-blur-md z-40"
							onClick={() => setIsOpen(false)}
						/>
						<motion.nav
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'tween', duration: 0.3 }}
							className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-black z-40 overflow-y-auto"
						>
							<div className="p-6 pt-24">
								<div className="flex flex-col space-y-8">
									{navigation.map((item) => (
										<motion.div
											key={item.name}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.2 }}
										>
											<Link
												href={item.href}
												onClick={() => setIsOpen(false)}
												className={`text-2xl font-display ${pathname === item.href
													? 'text-brutal-red'
													: 'text-white hover:text-brutal-red'
													} transition-colors`}
											>
												{item.name}
											</Link>
										</motion.div>
									))}
								</div>

								{/* Social Links or Additional Content can go here */}
								<div className="mt-12 pt-12 border-t border-white/10">
									<p className="text-sm text-gray-400">
										© 2024 Crivyx Interactive
									</p>
								</div>
							</div>
						</motion.nav>
					</>
				)}
			</AnimatePresence>
		</>
	);
}