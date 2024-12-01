// /app/games/paleogenesis/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Brain, Ghost, Map, Skull, Target, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
	{
		icon: <Users className="w-8 h-8" />,
		title: 'Multiplayer Survival',
		description: 'Team up with up to 4 survivors or face the horrors alone. Every decision impacts your survival.',
	},
	{
		icon: <Brain className="w-8 h-8" />,
		title: 'Adaptive AI',
		description: 'Face intelligent prehistoric predators that learn from your tactics and evolve their hunting strategies.',
	},
	{
		icon: <Ghost className="w-8 h-8" />,
		title: 'Psychological Horror',
		description: 'Experience a deep sanity system where your mental state affects gameplay and decision-making.',
	},
	{
		icon: <Map className="w-8 h-8" />,
		title: 'Iconic Locations',
		description: 'Explore faithfully recreated Antwerp landmarks transformed into prehistoric hunting grounds.',
	},
	{
		icon: <Target className="w-8 h-8" />,
		title: 'Strategic Gameplay',
		description: 'Use environmental hazards, distractions, and limited resources to survive.',
	},
	{
		icon: <Skull className="w-8 h-8" />,
		title: 'Authentic Terror',
		description: 'Encounter scientifically accurate dinosaurs reimagined as horror antagonists.',
	}
];

export default function PaleogenesisPage() {
	return (
		<div className="min-h-screen bg-primary-black">
			{/* Hero Section */}
			<section className="relative h-screen">
				<div className="absolute inset-0">
					<video
						autoPlay
						playsInline
						muted
						loop
						src="/games/paleogenesis/hero.mp4"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-primary-black/50 via-transparent to-primary-black" />
				</div>

				<div className="relative h-full flex items-center">
					<div className="max-w-7xl mx-auto px-6 pt-36">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="max-w-3xl"
						>
							<h1 className="text-6xl md:text-7xl lg:text-8xl font-mono mb-6">
								PALEOGENESIS
							</h1>
							<p className="text-2xl text-primary-gray mb-8">
								Survive in an Antwerp overrun by prehistoric terrors. Your sanity is as
								fragile as your life in this psychological horror experience.
							</p>
							<div className="flex flex-wrap gap-4">
								<motion.a
									href="https://store.steampowered.com"
									target="_blank"
									rel="noopener noreferrer"
									className="game-button group"
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<span className="group-hover:text-primary-red">Wishlist on Steam</span>
									<span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
								</motion.a>
								<Link href="#press-kit">
									<motion.button
										className="game-button-outline group"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<span className="group-hover:text-primary-red">Press Kit</span>
										<span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
									</motion.button>
								</Link>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Scroll Indicator */}
				<motion.div
					className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
					animate={{ y: [0, 10, 0] }}
					transition={{ repeat: Infinity, duration: 2 }}
				>
					<div className="w-6 h-10 border-2 border-primary-white/30 rounded-full flex justify-center">
						<div className="w-1 h-3 bg-primary-white/30 rounded-full mt-2" />
					</div>
				</motion.div>
			</section>

			{/* Game Overview */}
			<section className="py-24 bg-black">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
						>
							<h2 className="text-4xl font-mono mb-6">A New Kind of Horror</h2>
							<p className="text-xl text-primary-gray mb-6">
								Paleogenesis combines psychological horror with survival mechanics in
								a unique setting where prehistoric predators hunt in modern urban
								environments.
							</p>
							<p className="text-xl text-primary-gray">
								Experience Antwerp's iconic locations transformed into hunting grounds
								where every shadow could hide ancient death, and your next move could
								be your last.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="relative aspect-video rounded-lg overflow-hidden"
						>
							<Image
								src="/games/paleogenesis/overview.jpg"
								alt="Paleogenesis game overview"
								fill
								className="object-cover"
							/>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Features Grid */}
			<section className="py-24 bg-primary-darkgray">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-mono mb-6">Key Features</h2>
						<p className="text-xl text-primary-gray max-w-2xl mx-auto">
							Experience a new evolution in survival horror gaming with our innovative
							features and mechanics.
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
								className="relative group"
							>
								<div className="absolute inset-0 bg-primary-red/5 transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform rounded-lg" />
								<div className="relative p-6 bg-black border border-primary-white/10 rounded-lg group-hover:border-primary-red/20 transition-colors">
									<div className="text-primary-red mb-4 transform group-hover:scale-110 transition-transform">
										{feature.icon}
									</div>
									<h3 className="text-xl font-mono mb-2">{feature.title}</h3>
									<p className="text-primary-gray">{feature.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Community Section */}
			<section className="py-24 bg-black">
				<div className="max-w-7xl mx-auto px-6 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="max-w-3xl mx-auto"
					>
						<h2 className="text-4xl font-mono mb-6">Join Our Community</h2>
						<p className="text-xl text-primary-gray mb-8">
							Get involved in the development process, share your feedback, and connect
							with other horror game enthusiasts.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link href="/discord" className="game-button-outline group">
								<span className="group-hover:text-primary-red">Join Discord</span>
								<span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
							</Link>
							<Link href="/reddit" className="game-button-outline group">
								<span className="group-hover:text-primary-red">Join Subreddit</span>
								<span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
							</Link>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}