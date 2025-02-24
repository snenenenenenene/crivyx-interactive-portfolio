// /components/games/PressKit.tsx
'use client';

import { motion } from 'framer-motion';
import { Download, FileText, Film, Image as ImageIcon, Link as LinkIcon, Package } from 'lucide-react';
import { useState } from 'react';

const pressKitResources = {
	factSheet: {
		developer: "Cretaceous Couch",
		location: "Antwerp, Belgium",
		founding: "2025",
		website: "https://www.crivyx.com",
		pressContact: "press@crivyx.com",
		socialLinks: {
			twitter: "@CrixyxGames",
			discord: "discord.gg/crivyx",
			reddit: "r/ORNITHO"
		}
	},
	description: `ORNITHO is a psychological survival horror game that transforms Antwerp's iconic landmarks into prehistoric hunting grounds. Players face intelligent dinosaur predators while managing both their physical survival and psychological state.`,
	features: [
		"Innovative AI system for realistic predator behavior",
		"Dynamic psychological horror mechanics",
		"Multiplayer co-op survival",
		"Faithfully recreated Antwerp locations",
		"Deep sanity management system"
	],
	downloads: [
		{
			type: 'Press Kit',
			icon: <Package className="w-6 h-6" />,
			description: 'Complete press kit including all assets and information',
			size: '2.5 GB',
			url: '/downloads/ornitho-press-kit.zip'
		},
		{
			type: 'Fact Sheet',
			icon: <FileText className="w-6 h-6" />,
			description: 'Game information, features, and company details',
			size: '156 KB',
			url: '/downloads/ornitho-fact-sheet.pdf'
		},
		{
			type: 'Logo Pack',
			icon: <ImageIcon className="w-6 h-6" />,
			description: 'High-resolution logos and brand assets',
			size: '45 MB',
			url: '/downloads/ornitho-logos.zip'
		},
		{
			type: 'Screenshot Pack',
			icon: <ImageIcon className="w-6 h-6" />,
			description: 'High-resolution screenshots and artwork',
			size: '1.2 GB',
			url: '/downloads/ornitho-screenshots.zip'
		},
		{
			type: 'Trailer Pack',
			icon: <Film className="w-6 h-6" />,
			description: 'Game trailers in various formats',
			size: '850 MB',
			url: '/downloads/ornitho-trailers.zip'
		}
	],
	monetization: {
		price: "TBA",
		platforms: ["Steam (PC)", "Consoles TBA"],
		releaseWindow: "TBA"
	}
};

export const PressKit = () => {
	const [showEmail, setShowEmail] = useState(false);

	return (
		<section className="py-24 bg-black" id="press-kit">
			<div className="max-w-7xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-mono mb-6">Press Kit</h2>
					<p className="text-xl text-primary-gray max-w-2xl mx-auto">
						Download official assets and information about ORNITHO.
					</p>
				</motion.div>

				{/* Fact Sheet */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h3 className="text-2xl font-mono mb-6">Fact Sheet</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="p-6 bg-primary-darkgray rounded-lg border border-primary-white/10">
							<h4 className="font-mono mb-4">Developer Information</h4>
							<div className="space-y-2 text-primary-gray">
								<p><span className="text-primary-white">Developer:</span> {pressKitResources.factSheet.developer}</p>
								<p><span className="text-primary-white">Location:</span> {pressKitResources.factSheet.location}</p>
								<p><span className="text-primary-white">Founded:</span> {pressKitResources.factSheet.founding}</p>
								<p><span className="text-primary-white">Website:</span> {pressKitResources.factSheet.website}</p>
							</div>
						</div>

						<div className="p-6 bg-primary-darkgray rounded-lg border border-primary-white/10">
							<h4 className="font-mono mb-4">Contact</h4>
							<div className="space-y-2 text-primary-gray">
								<button
									onClick={() => setShowEmail(!showEmail)}
									className="text-primary-red hover:text-primary-white transition-colors"
								>
									{showEmail ? pressKitResources.factSheet.pressContact : 'Show Email'}
								</button>
								{Object.entries(pressKitResources.factSheet.socialLinks).map(([platform, link]) => (
									<p key={platform} className="flex items-center gap-2">
										<LinkIcon className="w-4 h-4" />
										<span className="capitalize">{platform}:</span> {link}
									</p>
								))}
							</div>
						</div>

						<div className="p-6 bg-primary-darkgray rounded-lg border border-primary-white/10">
							<h4 className="font-mono mb-4">Monetization</h4>
							<div className="space-y-2 text-primary-gray">
								<p><span className="text-primary-white">Price:</span> {pressKitResources.monetization.price}</p>
								<p><span className="text-primary-white">Platforms:</span> {pressKitResources.monetization.platforms.join(', ')}</p>
								<p><span className="text-primary-white">Release:</span> {pressKitResources.monetization.releaseWindow}</p>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Description & Features */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h3 className="text-2xl font-mono mb-6">About the Game</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="p-6 bg-primary-darkgray rounded-lg border border-primary-white/10">
							<h4 className="font-mono mb-4">Description</h4>
							<p className="text-primary-gray">{pressKitResources.description}</p>
						</div>
						<div className="p-6 bg-primary-darkgray rounded-lg border border-primary-white/10">
							<h4 className="font-mono mb-4">Key Features</h4>
							<ul className="space-y-2 text-primary-gray">
								{pressKitResources.features.map((feature, index) => (
									<li key={index} className="flex items-start gap-2">
										<span className="text-primary-red">•</span>
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				</motion.div>

				{/* Downloads */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<h3 className="text-2xl font-mono mb-6">Downloads</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{pressKitResources.downloads.map((download) => (
							<a
								key={download.type}
								href={download.url}
								className="group relative"
								download
							>
								<div className="absolute inset-0 bg-primary-red/5 transform 
                              group-hover:translate-x-1 group-hover:translate-y-1 
                              transition-transform rounded-lg" />
								<div className="relative p-6 bg-primary-darkgray rounded-lg border 
                              border-primary-white/10 group-hover:border-primary-red/20 
                              transition-colors">
									<div className="flex items-start gap-4">
										<div className="text-primary-red group-hover:scale-110 transition-transform">
											{download.icon}
										</div>
										<div className="flex-1">
											<h4 className="font-mono text-lg mb-2">{download.type}</h4>
											<p className="text-primary-gray text-sm mb-4">
												{download.description}
											</p>
											<div className="flex items-center justify-between">
												<span className="text-primary-gray text-sm">{download.size}</span>
												<Download className="w-5 h-5 text-primary-red 
                                          group-hover:translate-y-1 transition-transform" />
											</div>
										</div>
									</div>
								</div>
							</a>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};