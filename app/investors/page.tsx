/* eslint-disable react/no-unescaped-entities */
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const marketStats = [
	{
		stat: "$256.97B",
		label: "Gaming Market by 2025",
		trend: "+12.9% CAGR"
	},
	{
		stat: "28%",
		label: "Gen Z Prefer Horror Games",
		trend: "Growing Demographic"
	},
	{
		stat: "2%",
		label: "Horror Game Market Share",
		trend: "Expanding Niche"
	}
];

const competitorAnalysis = [
	{
		category: "Direct Competitors",
		examples: ["Deathground", "The Lost Wild"],
		gap: "Lack of psychological horror elements and realistic AI systems"
	},
	{
		category: "Dinosaur Games",
		examples: ["ARK: Survival Evolved", "Jurassic World Evolution"],
		gap: "Missing mature horror elements and psychological depth"
	},
	{
		category: "Horror Games",
		examples: ["Resident Evil", "Outlast", "Phasmophobia"],
		gap: "No dinosaur themes or scientific accuracy"
	}
];

export default function InvestorsPage() {
	return (
		<div className="min-h-screen bg-black">
			{/* Hero Section */}
			<section className="relative h-[70vh]">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-black/60" />
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
								Investment Opportunity
							</h1>
							<p className="text-xl text-gray-300 mb-10 leading-relaxed">
								Join us in revolutionizing the horror gaming industry through innovative
								gameplay mechanics and a unique merit-based development approach.
							</p>
							<motion.button
								onClick={() => window.location.href = 'mailto:investors@crivyx.com'}
								className="inline-flex items-center px-8 py-4 bg-white text-black 
                         font-medium hover:bg-brutal-red hover:text-white transition-colors 
                         duration-300"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								Request Pitch Deck
							</motion.button>
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

			{/* Market Stats Section */}
			<section className="py-24 bg-zinc-900">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
							Market Overview
						</h2>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							Targeting a rapidly expanding market at the intersection of horror gaming
							and dinosaur enthusiasm.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{marketStats.map((stat, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-black p-8 hover:bg-zinc-800 transition-colors duration-300"
							>
								<h3 className="text-4xl text-brutal-red font-bold mb-2">{stat.stat}</h3>
								<p className="text-white mb-2">{stat.label}</p>
								<p className="text-gray-400 text-sm">{stat.trend}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Market Gap Analysis */}
			<section className="py-24 bg-black">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
							Market Gap Analysis
						</h2>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							Identifying and filling the void between dinosaur games and psychological horror.
						</p>
					</motion.div>

					<div className="space-y-6">
						{competitorAnalysis.map((category, index) => (
							<motion.div
								key={category.category}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
							>
								<div className="bg-zinc-900 p-8">
									<h3 className="text-xl text-white font-bold mb-6">{category.category}</h3>
									<div className="grid md:grid-cols-2 gap-8">
										<div>
											<h4 className="text-brutal-red font-medium mb-4">Notable Titles</h4>
											<div className="flex flex-wrap gap-2">
												{category.examples.map((example) => (
													<span key={example} className="px-3 py-1 bg-black text-white text-sm">
														{example}
													</span>
												))}
											</div>
										</div>
										<div>
											<h4 className="text-brutal-red font-medium mb-4">Market Gap</h4>
											<p className="text-gray-400">{category.gap}</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Game Preview */}
			<section className="py-24 bg-zinc-900">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
						>
							<h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
								ORNITHO
							</h2>
							<p className="text-xl text-gray-300 mb-8">
								Our flagship title combines psychological horror with multiplayer survival,
								set in a uniquely reimagined Antwerp. Launch planned for major platforms
								with strong community interest.
							</p>
							<div className="space-y-6">
								<div className="flex items-center gap-4 text-white">
									<div className="w-32 font-mono text-gray-400">Platform</div>
									<div>Steam (PC) + Console Versions Planned</div>
								</div>
								<div className="flex items-center gap-4 text-white">
									<div className="w-32 font-mono text-gray-400">Genre</div>
									<div>Psychological Horror, Multiplayer Survival</div>
								</div>
								<div className="flex items-center gap-4 text-white">
									<div className="w-32 font-mono text-gray-400">Status</div>
									<div>Pre-Alpha Development</div>
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
								src="/games/ornitho/overview.jpg"
								alt="ORNITHO Game Preview"
								fill
								className="object-cover"
							/>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Investment CTA */}
			<section className="py-24 bg-brutal-red">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center max-w-3xl mx-auto"
					>
						<h2 className="text-4xl md:text-5xl text-white font-black mb-6">
							Join Our Journey
						</h2>
						<p className="text-xl text-white/90 mb-10">
							We're seeking strategic partners to help us revolutionize the horror gaming
							industry. Contact us to learn more about investment opportunities.
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<button
								onClick={() => window.location.href = 'mailto:investors@crivyx.com'}
								className="inline-flex items-center px-8 py-4 bg-black text-white 
                         hover:bg-white hover:text-black transition-colors duration-300"
							>
								Connect With Us
							</button>
							<a
								href="/assets/investor-deck.pdf"
								className="inline-flex items-center px-8 py-4 bg-white text-black 
                         hover:bg-black hover:text-white transition-colors duration-300"
							>
								Download Pitch Deck
							</a>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}