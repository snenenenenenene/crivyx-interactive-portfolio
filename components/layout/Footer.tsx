'use client';

import Image from 'next/image';
import Link from 'next/link';

const footerLinks = [
	{
		title: 'Company',
		links: [
			{ name: 'About', href: '/about' },
			{ name: 'Careers', href: '/careers' },
			{ name: 'News', href: '/news' },
			{ name: 'Contact', href: '/contact' }
		]
	},
	{
		title: 'Games',
		links: [
			{ name: 'Paleogenesis', href: '/games/paleogenesis' },
			{ name: 'Press Kit', href: '/press' }
		]
	},
	{
		title: 'Legal',
		links: [
			{ name: 'Privacy Policy', href: '/legal/privacy' },
			{ name: 'Terms of Service', href: '/legal/terms' },
			{ name: 'Cookie Policy', href: '/legal/cookies' }
		]
	}
];

export default function Footer() {
	return (
		<footer className="bg-brutal-black border-t-4 border-brutal-white">
			<div className="container mx-auto px-6 py-16">
				{/* Links Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
					{footerLinks.map((section) => (
						<div key={section.title}>
							<h3 className="font-mono text-brutal-white mb-6 text-lg">{section.title}</h3>
							<ul className="space-y-4">
								{section.links.map((link) => (
									<li key={link.name}>
										<Link
											href={link.href}
											className="text-brutal-gray-400 hover:text-brutal-red transition-colors font-mono"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Bottom Section */}
				<div className="border-t-4 border-brutal-white pt-8">
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						<div className="flex items-center gap-4">
							<Link href="/" className="block">
								<Image
									src="/vulture.png"
									alt="Cretaceous Couch Logo"
									width={48}
									height={48}
									className="w-12 h-12"
								/>
							</Link>
							<div className="text-brutal-gray-400 font-mono">
								<p>© {new Date().getFullYear()} Cretaceous Couch.</p>
								<p className="text-sm">All rights reserved.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}