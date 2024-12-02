'use client';

import { jobPositions } from '@/data/careers';
import { motion } from 'framer-motion';
import { Brain, Clock, Code, Globe, Medal, Star } from 'lucide-react';
import Link from 'next/link';

const benefits = [
	{
		icon: <Brain className="w-6 h-6" />,
		title: "Merit-Based System",
		description: "Your contributions and skills determine your growth, not years of experience or degrees."
	},
	{
		icon: <Star className="w-6 h-6" />,
		title: "Story Points System",
		description: "Transparent bonus system rewards actual contributions through story points."
	},
	{
		icon: <Code className="w-6 h-6" />,
		title: "Modern Tech Stack",
		description: "Work with cutting-edge technologies and contribute to technical decisions."
	},
	{
		icon: <Medal className="w-6 h-6" />,
		title: "Growth Focus",
		description: "Regular training, workshops, and conference attendance opportunities."
	},
	{
		icon: <Clock className="w-6 h-6" />,
		title: "Flexible Hours",
		description: "Work when you're most productive with our flexible scheduling."
	},
	{
		icon: <Globe className="w-6 h-6" />,
		title: "Remote First",
		description: "Work from anywhere in the world. We believe in flexibility and trust."
	}
];

export default function CareersPage() {
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
								Join Our Team
							</h1>
							<p className="text-xl text-gray-300 mb-10 leading-relaxed">
								We're challenging industry norms by valuing skills over credentials.
								No arbitrary requirements - just pure talent and passion.
							</p>
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

			{/* Benefits Section */}
			<section className="py-24 bg-zinc-900">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
							Why Join Us?
						</h2>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							We're building more than games - we're creating a new standard for
							how game studios should operate.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{benefits.map((benefit, index) => (
							<motion.div
								key={benefit.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-black p-8 group hover:bg-zinc-800 transition-colors duration-300"
							>
								<div className="text-brutal-red mb-6 group-hover:scale-110 transition-transform duration-300">
									{benefit.icon}
								</div>
								<h3 className="text-xl text-white font-medium mb-4">{benefit.title}</h3>
								<p className="text-gray-400">{benefit.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Open Positions */}
			<section className="py-24 bg-black">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
							Open Positions
						</h2>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							Join us in creating the next generation of horror games.
						</p>
					</motion.div>

					<div className="space-y-6">
						{jobPositions.map((position) => (
							<motion.div
								key={position.id}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="group"
							>
								<Link href={`/careers/${position.id}`}>
									<div className="bg-zinc-900 p-8 hover:bg-zinc-800 transition-colors duration-300">
										<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
											<div>
												<h3 className="text-2xl text-white font-medium mb-2">
													{position.title}
												</h3>
												<div className="flex flex-wrap gap-4 text-gray-400 mb-4">
													<span>{position.type}</span>
													<span>•</span>
													<span>{position.location}</span>
												</div>
												<p className="text-gray-300">{position.description}</p>
											</div>
											<motion.div
												whileHover={{ x: 4 }}
												className="flex-shrink-0"
											>
												<div className="inline-flex items-center px-6 py-3 bg-brutal-red text-white 
                                     hover:bg-brutal-red/90 transition-colors duration-300">
													Learn More
													<span className="ml-2">→</span>
												</div>
											</motion.div>
										</div>
									</div>
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Spontaneous Application */}
			<section className="py-24 bg-brutal-red">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center"
					>
						<h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
							Don't See Your Role?
						</h2>
						<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
							We're always interested in meeting talented creators. Send us your portfolio
							and tell us how you can contribute to our vision.
						</p>
						<Link
							href="/careers/apply"
							className="inline-flex items-center px-8 py-4 bg-black text-white 
                       hover:bg-white hover:text-black transition-colors duration-300"
						>
							Spontaneous Application
						</Link>
					</motion.div>
				</div>
			</section>
		</div>
	);
}