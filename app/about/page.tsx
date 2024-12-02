'use client';

import { config } from '@/config/config';
import { motion } from 'framer-motion';
import { Brain, Code2, HeartHandshake, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const values = [
	{
		icon: <Code2 className="w-6 h-6" />,
		title: "Merit Over Credentials",
		description: "We value real skills and passion over traditional qualifications. Your ability matters more than your paper trail."
	},
	{
		icon: <Users className="w-6 h-6" />,
		title: "Transparent Growth",
		description: "Our story point system ensures fair compensation based on actual contributions, not hours worked or office politics."
	},
	{
		icon: <Brain className="w-6 h-6" />,
		title: "Innovation First",
		description: "We're reimagining horror gaming while revolutionizing how game studios operate and treat their team members."
	},
	{
		icon: <HeartHandshake className="w-6 h-6" />,
		title: "People Over Process",
		description: "Great games come from empowered creators. No arbitrary requirements, just pure talent and passion."
	}
];

export default function AboutPage() {
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
								Our Vision
							</h1>
							<p className="text-xl text-gray-300 mb-10 leading-relaxed">
								Founded in {config.company.foundedYear}, we're redefining both horror gaming
								and game studio culture through innovation and merit-based growth.
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

			{/* Values Section */}
			<section className="py-24 bg-zinc-900">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
							Our Values
						</h2>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							We're building more than games. We're creating a new standard for how
							game studios should operate.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{values.map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group"
							>
								<div className="bg-black p-8 hover:bg-zinc-800 transition-colors duration-300">
									<div className="text-brutal-red mb-6 group-hover:scale-110 transition-transform duration-300">
										{value.icon}
									</div>
									<h3 className="text-xl text-white font-medium mb-4">{value.title}</h3>
									<p className="text-gray-400">{value.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-24 bg-black">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
							Meet The Team
						</h2>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							A collective of passionate creators pushing the boundaries of horror gaming.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{config.team.members.map((member, index) => (
							<motion.div
								key={member.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group"
							>
								<div className="bg-zinc-900">
									<div className="relative aspect-square">
										<Image
											src={member.image}
											alt={member.name}
											fill
											className="object-cover filter grayscale group-hover:grayscale-0 
                               transition-all duration-500"
										/>
									</div>
									<div className="p-6">
										<h3 className="text-xl text-white font-medium mb-2">{member.name}</h3>
										<p className="text-brutal-red font-mono mb-4">{member.role}</p>
										<p className="text-gray-400 mb-6">{member.bio}</p>
										<div className="flex gap-4">
											{Object.entries(member.socials).map(([platform, url]) => (
												<a
													key={platform}
													href={url}
													target="_blank"
													rel="noopener noreferrer"
													className="text-gray-500 hover:text-brutal-red transition-colors"
												>
													{platform.charAt(0).toUpperCase() + platform.slice(1)}
												</a>
											))}
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Join Us CTA */}
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
							We're looking for passionate creators who want to push the boundaries
							of horror gaming. If you think you have what it takes, we'd love to hear from you.
						</p>
						<Link
							href="/careers"
							className="inline-flex items-center px-8 py-4 bg-black text-white 
                       hover:bg-white hover:text-black transition-colors duration-300"
						>
							View Open Positions
						</Link>
					</motion.div>
				</div>
			</section>
		</div>
	);
}