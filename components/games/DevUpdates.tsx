// /components/games/DevUpdates.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';
import Link from 'next/link';

const updates = [
	{
		date: "March 2024",
		title: "AI System Development",
		category: "Technical",
		description: "Deep dive into our innovative AI system that makes dinosaurs truly terrifying predators.",
		link: "/dev-blog/ai-system-development"
	},
	{
		date: "February 2024",
		title: "Antwerp Central Station Environment",
		category: "Art & Design",
		description: "Explore how we're transforming this iconic location into a deadly hunting ground.",
		link: "/dev-blog/central-station-environment"
	},
	{
		date: "January 2024",
		title: "The Science Behind Our Dinosaurs",
		category: "Research",
		description: "How we're balancing scientific accuracy with horror game design.",
		link: "/dev-blog/dinosaur-science"
	}
];

export const DevUpdates = () => {
	return (
		<section className="py-24 bg-primary-darkgray">
			<div className="max-w-7xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-mono mb-6">Development Updates</h2>
					<p className="text-xl text-primary-gray max-w-2xl mx-auto">
						Follow our journey as we create the next evolution in horror gaming.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{updates.map((update, index) => (
						<motion.article
							key={update.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="relative group"
						>
							<Link href={update.link}>
								<div className="absolute inset-0 bg-primary-red/5 transform 
                              group-hover:translate-x-1 group-hover:translate-y-1 
                              transition-transform rounded-lg" />
								<div className="relative p-6 bg-black border border-primary-white/10 
                              rounded-lg group-hover:border-primary-red/20 transition-colors">
									<div className="flex items-center justify-between text-primary-gray mb-4">
										<div className="flex items-center">
											<Calendar className="w-4 h-4 mr-2" />
											<span className="text-sm">{update.date}</span>
										</div>
										<span className="text-sm px-3 py-1 rounded-full bg-primary-darkgray">
											{update.category}
										</span>
									</div>
									<h3 className="text-xl font-mono mb-2 group-hover:text-primary-red 
                               transition-colors flex items-center">
										{update.title}
										<ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 
                                          transition-opacity" />
									</h3>
									<p className="text-primary-gray">{update.description}</p>
								</div>
							</Link>
						</motion.article>
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mt-12"
				>
					<Link href="/dev-blog" className="inline-block game-button-outline group">
						<span className="group-hover:glitch-text">View All Updates</span>
						<span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
					</Link>
				</motion.div>

				{/* Development Progress */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mt-24"
				>
					<h3 className="text-2xl font-mono mb-8 text-center">Development Progress</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<ProgressCard
							title="Core Systems"
							percentage={85}
							details="AI, physics, gameplay mechanics"
						/>
						<ProgressCard
							title="Environment Art"
							percentage={70}
							details="Locations, props, atmosphere"
						/>
						<ProgressCard
							title="Character Design"
							percentage={60}
							details="Models, animations, behaviors"
						/>
						<ProgressCard
							title="Sound Design"
							percentage={45}
							details="Ambience, effects, music"
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

interface ProgressCardProps {
	title: string;
	percentage: number;
	details: string;
}

const ProgressCard = ({ title, percentage, details }: ProgressCardProps) => (
	<motion.div
		initial={{ opacity: 0, scale: 0.95 }}
		whileInView={{ opacity: 1, scale: 1 }}
		viewport={{ once: true }}
		className="relative group"
	>
		<div className="absolute inset-0 bg-primary-red/5 transform 
                  group-hover:translate-x-1 group-hover:translate-y-1 
                  transition-transform rounded-lg" />
		<div className="relative p-6 bg-black border border-primary-white/10 
                  rounded-lg group-hover:border-primary-red/20 transition-colors">
			<h4 className="font-mono text-lg mb-4">{title}</h4>
			<div className="relative h-2 bg-primary-darkgray rounded-full mb-4">
				<motion.div
					initial={{ width: 0 }}
					whileInView={{ width: `${percentage}%` }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: "easeOut" }}
					className="absolute h-full bg-primary-red rounded-full"
				/>
			</div>
			<div className="flex justify-between items-center mb-2">
				<span className="text-primary-gray text-sm">{details}</span>
				<span className="text-primary-red font-mono">{percentage}%</span>
			</div>
		</div>
	</motion.div>
);