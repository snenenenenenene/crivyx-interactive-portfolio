/* eslint-disable react/no-unescaped-entities */
'use client';

import { config } from '@/config/config';
import { motion } from 'framer-motion';
import { Star, Target, Trophy, Zap } from 'lucide-react';
import Link from 'next/link';

export default function CareersPage() {
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
							<h1 className="text-5xl font-display font-black mb-6">JOIN THE EVOLUTION</h1>
							<p className="text-xl text-brutal-black mb-8">
								We're challenging industry norms by valuing skills over credentials.
								No arbitrary requirements - just pure talent and passion.
							</p>
							<motion.div
								whileHover={{ x: 4, y: 4 }}
								className="bg-brutal-black text-brutal-white font-mono px-8 py-4 
                         inline-block shadow-brutal border-2 border-brutal-black 
                         hover:bg-brutal-red transition-colors"
							>
								VIEW OPEN POSITIONS
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Our Approach Section */}
			<section className="py-24 bg-brutal-white">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-display font-black mb-6">A DIFFERENT APPROACH</h2>
						<p className="text-xl text-brutal-black max-w-2xl mx-auto">
							We've reimagined how a game studio should operate, putting talent and
							contribution above traditional metrics.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Merit-Based System */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="bg-brutal-white p-8 shadow-brutal border-4 border-brutal-black"
						>
							<h3 className="text-2xl font-mono font-bold mb-4">Merit-Based System</h3>
							<p className="text-brutal-black mb-6">
								Our unique story points system ensures your compensation is based on your
								actual contributions, not just time spent. Each task is assigned points
								based on complexity and impact.
							</p>
							<ul className="space-y-3 text-brutal-black">
								<li className="flex items-start gap-2">
									<Star className="w-6 h-6 text-brutal-red flex-shrink-0 mt-1" />
									<span>Transparent point allocation</span>
								</li>
								<li className="flex items-start gap-2">
									<Star className="w-6 h-6 text-brutal-red flex-shrink-0 mt-1" />
									<span>Regular performance reviews</span>
								</li>
								<li className="flex items-start gap-2">
									<Star className="w-6 h-6 text-brutal-red flex-shrink-0 mt-1" />
									<span>Clear growth pathways</span>
								</li>
							</ul>
						</motion.div>

						{/* Growth Opportunities */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="bg-brutal-white p-8 shadow-brutal border-4 border-brutal-black"
						>
							<h3 className="text-2xl font-mono font-bold mb-4">Growth Opportunities</h3>
							<p className="text-brutal-black mb-6">
								We believe in continuous learning and development. Your growth is
								measured by your achievements and improvements, not time served.
							</p>
							<ul className="space-y-3 text-brutal-black">
								<li className="flex items-start gap-2">
									<Zap className="w-6 h-6 text-brutal-red flex-shrink-0 mt-1" />
									<span>Skill-based advancement</span>
								</li>
								<li className="flex items-start gap-2">
									<Trophy className="w-6 h-6 text-brutal-red flex-shrink-0 mt-1" />
									<span>Mentorship opportunities</span>
								</li>
								<li className="flex items-start gap-2">
									<Target className="w-6 h-6 text-brutal-red flex-shrink-0 mt-1" />
									<span>Project leadership roles</span>
								</li>
							</ul>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Open Positions */}
			<section className="py-24 bg-brutal-black">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-display text-brutal-white font-black mb-6">
							OPEN POSITIONS
						</h2>
						<p className="text-xl text-brutal-gray-300 max-w-2xl mx-auto">
							Join us in creating the next generation of horror games.
						</p>
					</motion.div>

					<div className="space-y-6">
						{config.team.openPositions.map((position, index) => (
							<motion.div
								key={position.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group"
							>
								<div className="bg-brutal-white p-6 shadow-brutal border-4 border-brutal-black">
									<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
										<div>
											<h3 className="text-2xl font-mono font-bold mb-2">{position.title}</h3>
											<div className="flex flex-wrap gap-4 text-brutal-black mb-4">
												<span>{position.type}</span>
												<span>•</span>
												<span>{position.location}</span>
											</div>
											<p className="text-brutal-black mb-6">{position.description}</p>
											<div className="space-y-2">
												{position.requirements.map((req, i) => (
													<div key={i} className="flex items-start gap-2 text-brutal-gray-700">
														<span className="text-brutal-red">•</span>
														<span>{req}</span>
													</div>
												))}
											</div>
										</div>
										<div className="flex-shrink-0">
											<Link href={`/careers/${position.title.toLowerCase().replace(/\s+/g, '-')}`}>
												<motion.div
													whileHover={{ x: 4, y: 4 }}
													className="bg-brutal-black text-brutal-white font-mono px-8 py-4 
                                   inline-block shadow-brutal border-2 border-brutal-black 
                                   hover:bg-brutal-red transition-colors whitespace-nowrap"
												>
													APPLY NOW
												</motion.div>
											</Link>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Open Application */}
			<section className="py-24 bg-brutal-red">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center"
					>
						<h2 className="text-4xl font-display text-brutal-white font-black mb-6">
							DON'T SEE YOUR ROLE?
						</h2>
						<p className="text-xl text-brutal-white mb-8 max-w-2xl mx-auto">
							We're always interested in meeting talented creators. Send us your portfolio
							and tell us how you can contribute to our vision.
						</p>
						<Link href="/careers/apply">
							<motion.div
								whileHover={{ x: 4, y: 4 }}
								className="bg-brutal-white text-brutal-black font-mono px-8 py-4 
                         inline-block shadow-brutal border-2 border-brutal-black 
                         hover:bg-brutal-black hover:text-brutal-white transition-colors"
							>
								OPEN APPLICATION
							</motion.div>
						</Link>
					</motion.div>
				</div>
			</section>
		</div>
	);
}