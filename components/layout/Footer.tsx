// /components/layout/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { SocialLinks } from './SocialLinks';

const footerLinks = {
	company: [
		{ name: 'About', href: '/about' },
		{ name: 'Careers', href: '/careers' },
		{ name: 'News', href: '/news' },
		{ name: 'Contact', href: '/contact' }
	],
	games: [
		{ name: 'Paleogenesis', href: '/games/paleogenesis' },
		{ name: 'Press Kit', href: '/press' }
	],
	community: [
		{ name: 'Discord', href: 'https://discord.gg/your-server' },
		{ name: 'Reddit', href: 'https://reddit.com/r/your-subreddit' },
		{ name: 'Blog', href: '/blog' },
		{ name: 'Forum', href: '/forum' }
	],
	legal: [
		{ name: 'Privacy Policy', href: '/legal/privacy' },
		{ name: 'Terms of Service', href: '/legal/terms' },
		{ name: 'Cookie Policy', href: '/legal/cookies' },
		{ name: 'GDPR', href: '/legal/gdpr' }
	]
};

export const Footer = () => {
	return (
		<footer className="bg-black border-t border-primary-white/10" role="contentinfo">
			<div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
				{/* Newsletter Signup */}
				<div className="mb-16">
					<motion.div
						className="max-w-2xl mx-auto text-center"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="text-2xl font-mono mb-4">Join the Evolution</h2>
						<p className="text-primary-gray mb-6">
							Subscribe to our newsletter for development updates, exclusive content, and early access opportunities.
						</p>
						<form className="flex gap-4 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 px-4 py-3 bg-primary-darkgray border border-primary-white/10 
                         rounded-lg focus:border-primary-red focus:ring-1 focus:ring-primary-red 
                         transition-colors"
								required
							/>
							<button
								type="submit"
								className="game-button whitespace-nowrap"
							>
								Subscribe
							</button>
						</form>
					</motion.div>
				</div>

				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
					{/* Links Sections */}
					<div>
						<h3 className="font-mono text-lg mb-6">Company</h3>
						<ul className="space-y-4">
							{footerLinks.company.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-primary-gray hover:text-primary-white transition-colors"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-mono text-lg mb-6">Games</h3>
						<ul className="space-y-4">
							{footerLinks.games.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-primary-gray hover:text-primary-white transition-colors"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-mono text-lg mb-6">Community</h3>
						<ul className="space-y-4">
							{footerLinks.community.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-primary-gray hover:text-primary-white transition-colors"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-mono text-lg mb-6">Legal</h3>
						<ul className="space-y-4">
							{footerLinks.legal.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-primary-gray hover:text-primary-white transition-colors"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Section */}
				<div className="border-t border-primary-white/10 pt-8">
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						<div className="flex items-center gap-4">
							<Link href="/" className="block w-12">
								<Image
									src="/vulture.png"
									alt="Crivyx Interactive Logo"
									width={48}
									height={48}
									className="w-full h-auto"
								/>
							</Link>
							<div className="text-primary-gray">
								<p>© {new Date().getFullYear()} Crivyx Interactive.</p>
								<p className="text-sm">All rights reserved.</p>
							</div>
						</div>

						<SocialLinks />
					</div>
				</div>
			</div>
		</footer>
	);
};