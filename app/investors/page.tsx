'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Gamepad2, Shield, Zap } from 'lucide-react';
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

const uniqueAdvantages = [
	{
		icon: <Zap className="w-8 h-8" />,
		title: "INNOVATIVE GAMEPLAY",
		description: "Unique blend of psychological horror, survival mechanics, and multiplayer dynamics."
	},
	{
		icon: <Shield className="w-8 h-8" />,
		title: "STRONG IP",
		description: "Original IP with potential for franchise development and expanded universe."
	},
	{
		icon: <Gamepad2 className="w-8 h-8" />,
		title: "SCALABLE MODEL",
		description: "Merit-based development system enabling efficient scaling and talent retention."
	}
];

export default function InvestorsPage() {
	return (
		<div className="min-h-screen bg-brutal-white">
			{/* Hero Section */}
			<section className="relative min-h-[60vh] flex items-center border-b-4 border-brutal-black bg-brutal-black">
				<div className="absolute inset-0 opacity-5">
					<div className="absolute inset-0"
						style={{
							backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
							backgroundSize: '20px 20px'
						}}
					/>
				</div>

				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="max-w-3xl"
					>
						<div className="bg-brutal-white p-8 shadow-brutal border-4 border-brutal-black">
							<h1 className="text-5xl font-display font-black mb-6">
								INVEST IN THE FUTURE OF HORROR GAMING
							</h1>
							<p className="text-xl text-brutal-black mb-8">
								Join us in revolutionizing the horror gaming industry through innovative
								gameplay mechanics and a unique merit-based development approach.
							</p>
							<motion.button
								whileHover={{ x: 4, y: 4 }}
								className="bg-brutal-black text-brutal-white font-mono px-8 py-4 
                         inline-block shadow-brutal border-2 border-brutal-black 
                         hover:bg-brutal-red transition-colors"
								onClick={() => window.location.href = 'mailto:investors@crivyx.com'}
							>
								REQUEST PITCH DECK
							</motion.button>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Market Overview Section */}
			<section className="py-24 bg-brutal-black text-brutal-white">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-display font-black mb-6">MARKET OVERVIEW</h2>
						<p className="text-xl text-brutal-gray-300 max-w-2xl mx-auto">
							Targeting a rapidly expanding market at the intersection of horror gaming
							and dinosaur enthusiasm.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
						{marketStats.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-brutal-white p-8 shadow-brutal border-4 border-brutal-black"
							>
								<div className="text-brutal-red text-5xl font-display font-black mb-2">
									{item.stat}
								</div>
								<div className="text-brutal-black font-mono mb-2">{item.label}</div>
								<div className="text-brutal-red font-mono text-sm">{item.trend}</div>
							</motion.div>
						))}
					</div>

					{/* Target Market */}
					<div className="bg-brutal-white p-8 shadow-brutal border-4 border-brutal-black text-brutal-black mb-8">
						<h3 className="text-2xl font-mono font-bold mb-6">TARGET MARKET</h3>
						<div className="grid md:grid-cols-3 gap-8">
							<div>
								<h4 className="font-mono text-brutal-red mb-2">DEMOGRAPHICS</h4>
								<p>Gamers aged 18-35 with strong interest in horror and dinosaur themes</p>
							</div>
							<div>
								<h4 className="font-mono text-brutal-red mb-2">GEOGRAPHICS</h4>
								<p>Western Europe, North America, and horror-enthusiast regions</p>
							</div>
							<div>
								<h4 className="font-mono text-brutal-red mb-2">PSYCHOGRAPHICS</h4>
								<p>Mature gamers valuing immersion, AI, and scientific accuracy</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Competitor Analysis */}
			<section className="py-24 bg-brutal-white">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-display font-black mb-6">MARKET GAP ANALYSIS</h2>
						<p className="text-xl text-brutal-black max-w-2xl mx-auto">
							Identifying and filling the void between dinosaur games and psychological horror.
						</p>
					</motion.div>

					<div className="space-y-8">
						{competitorAnalysis.map((category, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-brutal-white p-8 shadow-brutal border-4 border-brutal-black"
							>
								<h3 className="text-xl font-mono font-bold mb-4">{category.category}</h3>
								<div className="grid md:grid-cols-2 gap-8">
									<div>
										<h4 className="font-mono text-brutal-red mb-2">NOTABLE TITLES</h4>
										<div className="flex flex-wrap gap-2">
											{category.examples.map((example, i) => (
												<span
													key={i}
													className="inline-block bg-brutal-black text-brutal-white px-3 py-1 text-sm font-mono"
												>
													{example}
												</span>
											))}
										</div>
									</div>
									<div>
										<h4 className="font-mono text-brutal-red mb-2">MARKET GAP</h4>
										<p className="text-brutal-black">{category.gap}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Game Preview */}
			<section className="py-24 bg-brutal-black">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
						>
							<h2 className="text-4xl font-display text-brutal-white font-black mb-6">
								PALEOGENESIS
							</h2>
							<p className="text-xl text-brutal-gray-300 mb-8">
								Our flagship title combines psychological horror with multiplayer survival,
								set in a uniquely reimagined Antwerp. Launch planned for major platforms
								with strong community interest.
							</p>
							<div className="space-y-6">
								<div className="flex items-center gap-4 text-brutal-white">
									<div className="w-32 font-mono">Platform</div>
									<div>Steam (PC) + Console Versions Planned</div>
								</div>
								<div className="flex items-center gap-4 text-brutal-white">
									<div className="w-32 font-mono">Genre</div>
									<div>Psychological Horror, Multiplayer Survival</div>
								</div>
								<div className="flex items-center gap-4 text-brutal-white">
									<div className="w-32 font-mono">Status</div>
									<div>Pre-Alpha Development</div>
								</div>
								<div className="flex items-center gap-4 text-brutal-white">
									<div className="w-32 font-mono">Release</div>
									<div>Q4 2027 (Estimated)</div>
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
								alt="Paleogenesis Game Preview"
								fill
								className="object-cover border-4 border-brutal-white"
							/>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Revenue Model */}
			<section className="py-24 bg-brutal-white">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-display font-black mb-6">REVENUE MODEL</h2>
						<p className="text-xl text-brutal-black max-w-2xl mx-auto">
							Multiple revenue streams ensuring sustainable growth and profitability.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="bg-brutal-white p-8 shadow-brutal border-4 border-brutal-black">
							<h3 className="text-xl font-mono font-bold mb-4">PRIMARY REVENUE</h3>
							<ul className="space-y-4">
								<li className="flex items-start gap-2">
									<ChevronRight className="w-5 h-5 text-brutal-red flex-shrink-0 mt-1" />
									<div>
										<span className="font-bold">Base Game Sales</span>
										<p className="text-brutal-gray-700">Premium pricing with strong initial sales projection</p>
									</div>
								</li>
								<li className="flex items-start gap-2">
									<ChevronRight className="w-5 h-5 text-brutal-red flex-shrink-0 mt-1" />
									<div>
										<span className="font-bold">DLC & Expansions</span>
										<p className="text-brutal-gray-700">Additional content and new locations</p>
									</div>
								</li>
							</ul>
						</div>
						<div className="bg-brutal-white p-8 shadow-brutal border-4 border-brutal-black">
							<h3 className="text-xl font-mono font-bold mb-4">SECONDARY REVENUE</h3>
							<ul className="space-y-4">
								<li className="flex items-start gap-2">
									<ChevronRight className="w-5 h-5 text-brutal-red flex-shrink-0 mt-1" />
									<div>
										<span className="font-bold">Merchandise</span>
										<p className="text-brutal-gray-700">Branded merchandise and collectibles</p>
									</div>
								</li>
								<li className="flex items-start gap-2">
									<ChevronRight className="w-5 h-5 text-brutal-red flex-shrink-0 mt-1" />
									<div>
										<span className="font-bold">Licensing</span>
										<p className="text-brutal-gray-700">IP licensing for additional products</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Unique Advantages */}
			<section className="py-24 bg-brutal-black">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-display font-black mb-6 text-brutal-white">
							COMPETITIVE ADVANTAGES
						</h2>
						<p className="text-xl text-brutal-gray-300 max-w-2xl mx-auto">
							Our unique approach sets us apart in both game development and studio operations.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{uniqueAdvantages.map((advantage, index) => (
							<motion.div
								key={advantage.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="relative group"
							>
								<div className="bg-brutal-white p-8 shadow-brutal border-4 border-brutal-black h-full">
									<div className="text-brutal-red mb-4">{advantage.icon}</div>
									<h3 className="text-xl font-mono font-bold mb-2">{advantage.title}</h3>
									<p className="text-brutal-black">{advantage.description}</p>
								</div>
							</motion.div>
						))}
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
						className="text-center"
					>
						<h2 className="text-4xl font-display text-brutal-white font-black mb-6">
							JOIN OUR JOURNEY
						</h2>
						<p className="text-xl text-brutal-white mb-8 max-w-2xl mx-auto">
							We're seeking strategic partners to help us revolutionize the horror gaming
							industry. Contact us to learn more about investment opportunities.
						</p>
						<motion.div className="flex flex-wrap justify-center gap-4">
							<motion.button
								whileHover={{ x: 4, y: 4 }}
								className="bg-brutal-white text-brutal-black font-mono px-8 py-4 
                         inline-block shadow-brutal border-2 border-brutal-black 
                         hover:bg-brutal-black hover:text-brutal-white transition-colors"
								onClick={() => window.location.href = 'mailto:investors@crivyx.com'}
							>
								CONNECT WITH US
							</motion.button>
							<motion.button
								whileHover={{ x: 4, y: 4 }}
								className="bg-brutal-black text-brutal-white font-mono px-8 py-4 
                         inline-block shadow-brutal border-2 border-brutal-black 
                         hover:bg-brutal-white hover:text-brutal-black transition-colors"
								onClick={() => window.location.href = '/assets/pitch_deck.pdf'}
							>
								DOWNLOAD PITCH DECK
							</motion.button>
						</motion.div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}