'use client';

import { motion } from 'framer-motion';
import { Brain, Ghost, Map, Skull, Target, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
	{
		icon: <Users className="w-8 h-8" />,
		title: 'MULTIPLAYER SURVIVAL',
		description: 'Team up or survive alone in a world where every shadow could hide ancient death.',
	},
	{
		icon: <Brain className="w-8 h-8" />,
		title: 'DYNAMIC AI',
		description: 'Face intelligent dinosaurs that learn from your tactics and adapt their hunting strategies.',
	},
	{
		icon: <Ghost className="w-8 h-8" />,
		title: 'PSYCHOLOGICAL HORROR',
		description: 'Experience a sanity system that makes every encounter more terrifying than the last.',
	},
	{
		icon: <Map className="w-8 h-8" />,
		title: 'ICONIC LOCATIONS',
		description: 'Explore faithfully recreated Antwerp landmarks transformed into prehistoric hunting grounds.',
	},
	{
		icon: <Target className="w-8 h-8" />,
		title: 'STRATEGIC GAMEPLAY',
		description: 'Use environmental hazards, distractions, and limited resources to survive.',
	},
	{
		icon: <Skull className="w-8 h-8" />,
		title: 'AUTHENTIC TERROR',
		description: 'Encounter scientifically accurate dinosaurs reimagined as horror antagonists.',
	},
];

export default function PaleogenesisPage() {
	return (
		<div className="min-h-screen bg-brutal-white">
			{/* Hero Section */}
			<section className="relative min-h-screen">
				<div className="absolute inset-0">
					<video
						autoPlay
						muted
						loop
						playsInline
						src="/games/paleogenesis/hero.mp4"
						className="object-cover w-full h-full"
					/>
					<div className="absolute inset-0 bg-brutal-black/70" />
				</div>

				<div className="relative pt-36 h-full flex items-center">
					<div className="container mx-auto px-6">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="max-w-4xl"
						>
							<div className="bg-brutal-white p-8 shadow-brutal-xl border-4 border-brutal-black">
								<h1 className="brutal-title mb-6">PALEOGENESIS</h1>
								<p className="brutal-text mb-8 text-brutal-black">
									Survive in an Antwerp overrun by prehistoric terrors. Your sanity is as
									fragile as your life in this psychological horror experience.
								</p>
								<div className="flex flex-wrap gap-4">
									<Link href="https://store.steampowered.com" target="_blank" rel="noopener">
										<motion.div
											whileHover={{ x: 4, y: 4 }}
											className="bg-brutal-black text-brutal-white font-mono px-8 py-4 
                               text-lg shadow-brutal border-2 border-brutal-black 
                               hover:bg-brutal-red transition-colors"
										>
											WISHLIST ON STEAM
										</motion.div>
									</Link>
									<Link href="#press-kit">
										<motion.div
											whileHover={{ x: 4, y: 4 }}
											className="bg-brutal-white text-brutal-black font-mono px-8 py-4 
                               text-lg shadow-brutal border-2 border-brutal-black 
                               hover:bg-brutal-red hover:text-brutal-white transition-colors"
										>
											PRESS KIT
										</motion.div>
									</Link>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 bg-brutal-black">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-6xl font-display text-brutal-white mb-6">
							KEY FEATURES
						</h2>
						<p className="text-xl text-brutal-gray-300 max-w-2xl mx-auto">
							Experience a new evolution in survival horror gaming.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-brutal-white p-6 shadow-brutal border-4 border-brutal-black"
							>
								<div className="text-brutal-red mb-4">{feature.icon}</div>
								<h3 className="text-xl font-mono mb-2 font-bold">{feature.title}</h3>
								<p className="text-brutal-gray-700">{feature.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Screenshots Section */}
			<section className="py-24 bg-brutal-white">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="relative aspect-video">
							<div className="absolute -inset-4 border-4 border-brutal-black bg-brutal-red" />
							<Image
								src="/games/paleogenesis/central-station.webp"
								alt="Antwerp Central Station"
								fill
								className="object-cover relative"
							/>
						</div>
						<div className="relative aspect-video">
							<div className="absolute -inset-4 border-4 border-brutal-black bg-brutal-red" />
							<Image
								src="/games/paleogenesis/cathedral.webp"
								alt="Antwerp Cathedral"
								fill
								className="object-cover relative"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Community Section */}
			<section className="py-24 bg-brutal-red">
				<div className="container mx-auto px-6 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-3xl mx-auto"
					>
						<h2 className="text-6xl font-display text-brutal-white mb-6">
							JOIN THE HUNT
						</h2>
						<p className="text-xl text-brutal-white mb-8">
							Get involved in the development process and connect with other survivors.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href="/discord">
								<motion.div
									whileHover={{ x: 4, y: 4 }}
									className="bg-brutal-white text-brutal-black font-mono px-8 py-4 
                           text-lg shadow-brutal border-2 border-brutal-black 
                           hover:bg-brutal-black hover:text-brutal-white transition-colors"
								>
									JOIN DISCORD
								</motion.div>
							</Link>
							<Link href="/reddit">
								<motion.div
									whileHover={{ x: 4, y: 4 }}
									className="bg-brutal-black text-brutal-white font-mono px-8 py-4 
                           text-lg shadow-brutal border-2 border-brutal-black 
                           hover:bg-brutal-white hover:text-brutal-black transition-colors"
								>
									JOIN SUBREDDIT
								</motion.div>
							</Link>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section id="press-kit" className="py-24 bg-brutal-black brutal-pattern">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-2xl mx-auto bg-brutal-white p-8 shadow-brutal-xl border-4 border-brutal-black"
					>
						<h2 className="text-4xl font-display mb-6 text-center">STAY UPDATED</h2>
						<p className="text-brutal-black mb-8 text-center">
							Subscribe to our newsletter for development updates and early access opportunities.
						</p>
						<form className="flex gap-4">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 p-4 border-4 border-brutal-black font-mono"
							/>
							<motion.button
								whileHover={{ x: 4, y: 4 }}
								className="bg-brutal-black text-brutal-white font-mono px-8 py-4 
                         shadow-brutal border-2 border-brutal-black 
                         hover:bg-brutal-red transition-colors"
							>
								SUBSCRIBE
							</motion.button>
						</form>
					</motion.div>
				</div>
			</section>
		</div>
	);
}