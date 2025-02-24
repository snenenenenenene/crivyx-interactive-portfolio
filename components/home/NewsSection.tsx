// /components/home/NewsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';
import Link from 'next/link';

const newsItems = [
	{
		date: "March 2024",
		title: "ORNITHO Development Update",
		excerpt: "Exploring the innovative AI system that makes our dinosaurs truly terrifying.",
		link: "/news/ornitho-development-update"
	},
	{
		date: "February 2024",
		title: "Join Us at UNWRAP 2024",
		excerpt: "Meet the team and get a first look at ORNITHO at UNWRAP 2024.",
		link: "/news/unwrap-2024"
	},
	{
		date: "January 2024",
		title: "Studio Vision Announcement",
		excerpt: "Introducing our revolutionary approach to game development and team management.",
		link: "/news/studio-vision"
	}
];

export const NewsSection = () => {
	return (
		<section className="py-24 bg-primary-darkgray">
			<div className="max-w-7xl mx-auto px-6">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<h2 className="text-4xl font-mono mb-6">Latest Updates</h2>
					<p className="text-primary-gray max-w-2xl mx-auto">
						Stay informed about our development progress and studio news.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{newsItems.map((item, index) => (
						<motion.article
							key={item.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="relative group"
						>
							<Link href={item.link}>
								<div className="absolute inset-0 bg-primary-red/5 transform 
                              group-hover:translate-x-1 group-hover:translate-y-1 
                              transition-transform rounded-lg" />
								<div className="relative p-6 bg-black border border-primary-white/10 
                              rounded-lg group-hover:border-primary-red/20 transition-colors">
									<div className="flex items-center text-primary-gray mb-4">
										<Calendar className="w-4 h-4 mr-2" />
										<span className="text-sm">{item.date}</span>
									</div>
									<h3 className="text-xl font-mono mb-2 group-hover:text-primary-red 
                               transition-colors flex items-center">
										{item.title}
										<ArrowUpRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 
                                          transition-opacity" />
									</h3>
									<p className="text-primary-gray">{item.excerpt}</p>
								</div>
							</Link>
						</motion.article>
					))}
				</div>

				<motion.div
					className="mt-16 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
				>
					<Link href="/news" className="inline-block game-button-outline group">
						<span className="group-hover:glitch-text">View All News</span>
						<span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
					</Link>
				</motion.div>
			</div>
		</section>
	);
};