// /components/layout/Navigation.tsx
'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { SocialLinks } from './SocialLinks';

const navigation = [
	{ name: 'Home', href: '/' },
	// { name: 'Games', href: '/games' },
	{ name: 'About', href: '/about' },
	{ name: 'Careers', href: '/careers' },
	// { name: 'Community', href: '/community' },
	// { name: 'Investors', href: '/investors' },
];

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	// ARIA labels for accessibility
	const menuId = 'main-menu';
	const menuButtonId = 'menu-button';

	const closeMenu = () => setIsOpen(false);

	return (
		<header className="w-full z-50">
			<div className="max-w-7xl mx-auto">
				{/* Skip to main content for accessibility */}
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary-darkgray focus:text-primary-white"
				>
					Skip to main content
				</a>

				<nav
					className="px-6 h-36"
					role="navigation"
					aria-label="Main navigation"
				>
					<div className="flex items-center justify-between h-full">
						{/* Logo and Company Name */}
						<div className="flex items-center h-full space-x-6">
							<Link
								href="/"
								aria-label="Crivyx Interactive - Return to homepage"
								className="h-full flex items-center"
							>
								<Image
									src="/vulture.png"
									alt="Crivyx Interactive Logo"
									width={136}
									height={96}
									priority
									className="h-full w-auto py-4"
								/>
							</Link>
							<h1
								className="hidden md:flex items-center h-full font-radlush text-4xl tracking-wider text-primary-white"
								style={{
									fontFamily: 'Radlush',
									fontWeight: 1000
								}}
							>
								CRIVYX INTERACTIVE
							</h1>
						</div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-8">
							{navigation.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className={`text-lg font-mono transition-colors hover:text-primary-red ${pathname === item.href
										? 'text-primary-red'
										: 'text-primary-white'
										}`}
									aria-current={pathname === item.href ? 'page' : undefined}
								>
									{item.name}
								</Link>
							))}
						</div>

						{/* Social Links - Desktop */}
						<div className="hidden md:block">
							<SocialLinks />
						</div>

						{/* Mobile Menu Button */}
						<button
							type="button"
							className="md:hidden p-2 rounded-md text-primary-white hover:text-primary-red transition-colors"
							onClick={() => setIsOpen(!isOpen)}
							aria-controls={menuId}
							aria-expanded={isOpen}
							id={menuButtonId}
							aria-label={isOpen ? 'Close menu' : 'Open menu'}
						>
							{isOpen ? (
								<X className="h-6 w-6" aria-hidden="true" />
							) : (
								<Menu className="h-6 w-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</nav>

				{/* Mobile Menu */}
				<motion.div
					className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
					id={menuId}
					role="menu"
					aria-labelledby={menuButtonId}
					initial="closed"
					animate={isOpen ? "open" : "closed"}
					variants={{
						open: { opacity: 1, y: 0 },
						closed: { opacity: 0, y: -20 }
					}}
				>
					<div className="px-4 pt-2 pb-6 space-y-1">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={`block py-2 text-base font-mono ${pathname === item.href
									? 'text-primary-red'
									: 'text-primary-white hover:text-primary-red'
									}`}
								onClick={closeMenu}
								role="menuitem"
								aria-current={pathname === item.href ? 'page' : undefined}
							>
								{item.name}
							</Link>
						))}
						<div className="pt-4">
							<SocialLinks />
						</div>
					</div>
				</motion.div>
			</div>
		</header>
	);
};