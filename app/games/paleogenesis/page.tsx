/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import { Brain, Ghost, Map, Shield, Target, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
	{
		icon: <Users className="w-6 h-6" />,
		title: "Multiplayer Survival",
		description: "Team up or survive alone in a world where every shadow could hide ancient death. Work together to survive or test your skills in solo mode."
	},
	{
		icon: <Brain className="w-6 h-6" />,
		title: "Dynamic AI",
		description: "Face intelligent dinosaurs that learn from your tactics and adapt their hunting strategies. Every encounter is unique and unpredictable."
	},
	{
		icon: <Ghost className="w-6 h-6" />,
		title: "Psychological Horror",
		description: "Experience a deep sanity system that affects gameplay and decision-making. Your mental state is as important as your physical survival."
	},
	{
		icon: <Map className="w-6 h-6" />,
		title: "Iconic Locations",
		description: "Explore faithfully recreated Antwerp landmarks transformed into prehistoric hunting grounds. Each location tells its own story of survival."
	},
	{
		icon: <Target className="w-6 h-6" />,
		title: "Strategic Gameplay",
		description: "Use environmental hazards, create distractions, and manage limited resources. Every decision could mean survival or death."
	},
	{
		icon: <Shield className="w-6 h-6" />,
		title: "Authentic Terror",
		description: "Encounter scientifically accurate dinosaurs reimagined as horror antagonists. Reality is scarier than fiction."
	}
];

const locations = [
	{
		title: "Central Station",
		description: "Once a bustling transport hub, now a deadly maze where ancient predators stalk their prey through abandoned platforms and dark tunnels.",
		image: "/games/paleogenesis/central-station.webp"
	},
	{
		title: "Cathedral",
		description: "Gothic architecture meets prehistoric terror. Navigate through shadow-filled naves and climb treacherous spires to escape the hunters below.",
		image: "/games/paleogenesis/cathedral.webp"
	},
	{
		title: "Port of Antwerp",
		description: "Shipping containers create a labyrinth of steel where raptors coordinate their attacks. Use the environment to your advantage or become prey.",
		image: "/games/paleogenesis/central-station.webp" // Replace with actual port image
	}
];

export default function PaleogenesisPage() {
	return (
		<div className="min-h-screen bg-black">
			{/* Hero Section */}
			<section className="relative h-screen">
				<div className="absolute inset-0">
					<Image
						src="/games/paleogenesis/central-station.webp"
						alt="Paleogenesis - Central Station"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-black/50" />
					<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
				</div>

				<div className="relative h-full flex items-center">
					<div className="container mx-auto px-6">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
							className="max-w-3xl pt-20"
						>
							<h1 className="text-7xl md:text-8xl font-display tracking-tight text-white font-black mb-8">
								Paleogenesis
							</h1>
							<p className="text-xl text-gray-300 mb-10 leading-relaxed">
								A psychological horror survival experience where prehistoric predators
								transform Antwerp's iconic landmarks into hunting grounds.
							</p>
							<motion.a
								href="https://store.steampowered.com"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-8 py-4 bg-white text-black 
                         font-medium hover:bg-brutal-red hover:text-white transition-colors 
                         duration-300"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Wishlist on Steam
							</motion.a>
						</motion.div>
					</div>
				</div>

				<div className="absolute bottom-12 left-1/2 -translate-x-1/2">
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ repeat: Infinity, duration: 1.5 }}
						className="flex flex-col items-center"
					>
						<div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
					</motion.div>
				</div>
			</section>

			{/* Overview Section */}
			<section className="py-24 bg-zinc-900">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
						>
							<h2 className="text-4xl md:text-5xl text-white font-bold mb-6">
								Terror Evolved
							</h2>
							<p className="text-xl text-gray-300 mb-8 leading-relaxed">
								In Paleogenesis, prehistoric nightmares become reality as scientifically
								accurate dinosaurs hunt through meticulously recreated modern environments.
								Every shadow could hide death, every sound could mean survival or doom.
							</p>
							<div className="space-y-6">
								<div className="flex items-center gap-4 text-white">
									<div className="w-32 font-mono text-gray-400">Genre</div>
									<div>Psychological Horror, Multiplayer Survival</div>
								</div>
								<div className="flex items-center gap-4 text-white">
									<div className="w-32 font-mono text-gray-400">Players</div>
									<div>Single-player & Co-op (1-4 players)</div>
								</div>
								<div className="flex items-center gap-4 text-white">
									<div className="w-32 font-mono text-gray-400">Release</div>
									<div>Q4 2025 (Estimated)</div>
								</div>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="relative aspect-video"
						>
							<Image
								src="/games/paleogenesis/overview.jpg"
								alt="Paleogenesis Game Overview"
								fill
								className="object-cover"
							/>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-24 bg-black">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
							Key Features
						</h2>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							Experience horror evolution through innovative gameplay mechanics.
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
								className="group"
							>
								<div className="bg-zinc-900 p-8 hover:bg-zinc-800 transition-colors duration-300">
									<div className="text-brutal-red mb-6 group-hover:scale-110 transition-transform duration-300">
										{feature.icon}
									</div>
									<h3 className="text-xl text-white font-medium mb-4">{feature.title}</h3>
									<p className="text-gray-400">{feature.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Locations Section */}
			<section className="py-24 bg-zinc-900">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
							Hunting Grounds
						</h2>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							Explore iconic Antwerp locations transformed into prehistoric nightmares.
						</p>
					</motion.div>

					<div className="space-y-12">
						{locations.map((location, index) => (
							<motion.div
								key={location.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group"
							>
								<div className="relative aspect-[21/9] overflow-hidden">
									<Image
										src={location.image}
										alt={location.title}
										fill
										className="object-cover transition-transform duration-700 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
									<div className="absolute bottom-0 left-0 right-0 p-8">
										<h3 className="text-2xl text-white font-bold mb-4">{location.title}</h3>
										<p className="text-gray-300">{location.description}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Community CTA */}
			<section className="py-24 bg-brutal-red">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center max-w-3xl mx-auto"
					>
						<h2 className="text-4xl md:text-5xl text-white font-black mb-6">
							Join the Hunt
						</h2>
						<p className="text-xl text-white/90 mb-10">
							Get involved in the development process and connect with other survivors.
							Your feedback shapes the evolution of terror.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<Link
								href="/community"
								className="inline-flex items-center px-8 py-4 bg-black text-white 
                         hover:bg-white hover:text-black transition-colors duration-300"
							>
								Join Community
							</Link>
							<a
								href="https://store.steampowered.com"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center px-8 py-4 bg-white text-black 
                         hover:bg-black hover:text-white transition-colors duration-300"
							>
								Wishlist Now
							</a>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}