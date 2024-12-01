// /components/home/CompanyVision.tsx
'use client';

import { motion } from 'framer-motion';
import { Brain, Code2, Trophy, Users } from 'lucide-react';

const visionPoints = [
	{
		icon: <Code2 className="w-8 h-8" />,
		title: "Merit-Based Culture",
		description: "We value skills over credentials. Your ability to create amazing games matters more than your formal education or years of experience."
	},
	{
		icon: <Users className="w-8 h-8" />,
		title: "Transparent Growth",
		description: "Our story point system ensures fair compensation based on actual contributions, not hours worked or office politics."
	},
	{
		icon: <Trophy className="w-8 h-8" />,
		title: "Innovation First",
		description: "We're reimagining horror gaming while also revolutionizing how game studios operate and treat their team members."
	},
	{
		icon: <Brain className="w-8 h-8" />,
		title: "People Over Process",
		description: "We believe great games come from empowered creators. No arbitrary requirements, just pure talent and passion."
	}
];

export const CompanyVision = () => {
	return (
		<section className="relative py-24 bg-primary-darkgray overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-5">
				<div className="absolute inset-0 bg-repeat bg-[length:20px_20px]"
					style={{ backgroundImage: "url('/pattern.svg')" }} />
			</div>

			<div className="relative max-w-7xl mx-auto px-6">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl md:text-5xl font-mono mb-6">
						Redefining Game Development
					</h2>
					<p className="text-primary-gray max-w-2xl mx-auto text-lg">
						We're not just creating horror games - we're creating a new standard
						for how game studios should operate and treat their talent.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{visionPoints.map((point, index) => (
						<motion.div
							key={point.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="relative group"
						>
							<div className="absolute inset-0 bg-primary-red/5 transform group-hover:translate-x-1 
                            group-hover:translate-y-1 transition-transform rounded-lg" />
							<div className="relative p-6 bg-primary-darkgray border border-primary-white/10 
                            rounded-lg group-hover:border-primary-red/20 transition-colors">
								<div className="text-primary-red mb-4">{point.icon}</div>
								<h3 className="text-xl font-mono mb-2">{point.title}</h3>
								<p className="text-primary-gray">{point.description}</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Call to Action */}
				<motion.div
					className="mt-16 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<a
						href="/careers"
						className="inline-block game-button-outline group text-lg"
					>
						<span className="group-hover:glitch-text">Join Our Team</span>
						<span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
					</a>
				</motion.div>
			</div>
		</section>
	);
};