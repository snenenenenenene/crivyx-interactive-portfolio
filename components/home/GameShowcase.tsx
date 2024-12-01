// /components/home/GameShowcase.tsx
'use client';

import { motion } from 'framer-motion';
import { Brain, Gamepad2, Ghost, Map, Shield, Users } from 'lucide-react';
import Image from 'next/image';

const features = [
	{
		icon: <Users className="w-8 h-8" />,
		title: "Multiplayer Survival",
		description: "Team up or survive alone in a world where every shadow could hide ancient death."
	},
	{
		icon: <Brain className="w-8 h-8" />,
		title: "Dynamic AI",
		description: "Face intelligent dinosaurs that learn from your tactics and adapt their hunting strategies."
	},
	{
		icon: <Ghost className="w-8 h-8" />,
		title: "Psychological Horror",
		description: "Experience a sanity system that makes every encounter more terrifying than the last."
	},
	{
		icon: <Map className="w-8 h-8" />,
		title: "Iconic Locations",
		description: "Explore faithfully recreated Antwerp landmarks transformed into prehistoric hunting grounds."
	},
	{
		icon: <Shield className="w-8 h-8" />,
		title: "Authentic Experience",
		description: "Scientifically accurate dinosaurs reimagined as the perfect horror antagonists."
	},
	{
		icon: <Gamepad2 className="w-8 h-8" />,
		title: "Platform Support",
		description: "Coming to Steam with planned console releases."
	}
];

const screenshots = [
	{
		src: "/projects/paleogenesis-central-station.webp",
		alt: "Antwerp Central Station transformed into a prehistoric hunting ground",
		title: "Central Station",
		description: "A once-bustling transport hub becomes a deadly maze"
	},
	{
		src: "/projects/paleogenesis-cathedral.webp",
		alt: "Antwerp Cathedral in a post-apocalyptic setting",
		title: "Cathedral",
		description: "Gothic architecture meets prehistoric terror"
	}
];

export const GameShowcase = () => {
	return (
		<section className="py-24 bg-black relative overflow-hidden">
			{/* Animated Background Pattern */}
			<div
				className="absolute inset-0 opacity-5 bg-repeat pattern-grid"
				style={{
					backgroundSize: '30px 30px',
					animation: 'patternMove 20s linear infinite'
				}}
			/>

			<div className="relative max-w-7xl mx-auto px-6">
				{/* Screenshots */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
					{screenshots.map((screenshot, index) => (
						<motion.div
							key={screenshot.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="relative group rounded-lg overflow-hidden"
						>
							<div className="relative aspect-video">
								<Image
									src={screenshot.src}
									alt={screenshot.alt}
									fill
									className="object-cover transform group-hover:scale-105 transition-transform duration-700"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
									<div className="absolute bottom-6 left-6 right-6">
										<h3 className="text-2xl font-mono mb-2">{screenshot.title}</h3>
										<p className="text-primary-gray">{screenshot.description}</p>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Features Grid */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="p-6 bg-primary-darkgray rounded-lg border border-primary-white/5 
                         hover:border-primary-red/20 transition-colors group"
						>
							<div className="text-primary-red mb-4 transform group-hover:scale-110 transition-transform">
								{feature.icon}
							</div>
							<h3 className="text-xl font-mono mb-2">{feature.title}</h3>
							<p className="text-primary-gray">{feature.description}</p>
						</motion.div>
					))}
				</motion.div>

				{/* Call to Action */}
				<motion.div
					className="mt-16 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<div className="space-y-6">
						<h3 className="text-2xl md:text-3xl font-mono">
							Be Part of the Horror Evolution
						</h3>
						<p className="text-primary-gray max-w-2xl mx-auto">
							Join our growing community and help shape the future of survival horror gaming.
						</p>
						<div className="flex flex-wrap justify-center gap-4 pt-4">
							<motion.a
								href="/games/paleogenesis"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="game-button group"
							>
								<span className="group-hover:glitch-text">Learn More</span>
								<span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
							</motion.a>
							<motion.a
								href="https://store.steampowered.com"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="game-button-outline group"
							>
								<span className="group-hover:glitch-text">Wishlist Now</span>
								<span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
							</motion.a>
						</div>
					</div>
				</motion.div>
			</div>

			{/* Style for the animated background pattern */}
			<style jsx>{`
        @keyframes patternMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 30px 30px;
          }
        }

        .pattern-grid {
          background-image: 
            linear-gradient(to right, #ffffff05 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff05 1px, transparent 1px);
        }
      `}</style>
		</section>
	);
};