/* eslint-disable react/no-unescaped-entities */
'use client';

import { config } from '@/config/config';
import { motion } from 'framer-motion';
import { Brain, Code2, HeartHandshake, Users } from 'lucide-react';
import Image from 'next/image';

const values = [
	{
		icon: <Code2 className="w-8 h-8" />,
		title: 'MERIT OVER CREDENTIALS',
		description: 'We value real skills and passion over traditional qualifications. Show us what you can do, not what paper says you can do.',
	},
	{
		icon: <Users className="w-8 h-8" />,
		title: 'TRANSPARENT GROWTH',
		description: 'Our story point system ensures fair compensation based on actual contributions, not hours worked or office politics.',
	},
	{
		icon: <Brain className="w-8 h-8" />,
		title: 'INNOVATION FIRST',
		description: "We're reimagining horror gaming while also revolutionizing how game studios operate and treat their team members.",
	},
	{
		icon: <HeartHandshake className="w-8 h-8" />,
		title: 'PEOPLE OVER PROCESS',
		description: 'Great games come from empowered creators. No arbitrary requirements, just pure talent and passion.',
	},
];

export default function AboutPage() {
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
							<h1 className="text-5xl font-display font-black mb-6">ABOUT CRIVYX</h1>
							<p className="text-xl text-brutal-black mb-4">
								Founded in {config.company.foundedYear}, Crivyx Interactive is redefining
								both horror gaming and game studio culture through innovation and merit-based growth.
							</p>
							<p className="text-xl text-brutal-black">
								Based in {config.company.location}, we're a team of passionate creators
								challenging industry norms while crafting unforgettable horror experiences.
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-24 bg-brutal-white">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-display font-black mb-6">OUR VALUES</h2>
						<p className="text-xl text-brutal-black max-w-2xl mx-auto">
							At Crivyx Interactive, we're building more than games. We're creating a
							new standard for how game studios should operate.
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
								className="relative group"
							>
								<div className="bg-brutal-white p-8 shadow-brutal border-4 border-brutal-black">
									<div className="text-brutal-red mb-4">{value.icon}</div>
									<h3 className="text-xl font-mono font-bold mb-2">{value.title}</h3>
									<p className="text-brutal-black">{value.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-24 bg-brutal-black">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-display text-brutal-white font-black mb-6">
							MEET THE TEAM
						</h2>
						<p className="text-xl text-brutal-gray-300 max-w-2xl mx-auto">
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
								<div className="bg-brutal-white p-6 shadow-brutal border-4 border-brutal-black">
									<div className="relative aspect-square mb-6 overflow-hidden border-2 border-brutal-black">
										<Image
											src={member.image}
											alt={member.name}
											fill
											className="object-cover filter transition-all duration-500
                               group-hover:scale-110"
										/>
									</div>
									<h3 className="text-xl font-mono font-bold mb-2">{member.name}</h3>
									<p className="text-brutal-red font-mono mb-4">{member.role}</p>
									<p className="text-brutal-black mb-6">{member.bio}</p>
									<div className="flex gap-4">
										{Object.entries(member.socials).map(([platform, url]) => (
											<a
												key={platform}
												href={url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-brutal-black hover:text-brutal-red transition-colors text-sm font-mono"
											>
												{platform.charAt(0).toUpperCase() + platform.slice(1)}
											</a>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-24 bg-brutal-red">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center"
					>
						<h2 className="text-4xl font-display text-brutal-white font-black mb-6">
							GET IN TOUCH
						</h2>
						<p className="text-xl text-brutal-white mb-8 max-w-2xl mx-auto">
							Want to learn more about our studio or discuss potential collaborations?
							We'd love to hear from you.
						</p>
						<motion.a
							href={`mailto:${config.company.contact.general}`}
							whileHover={{ x: 4, y: 4 }}
							className="bg-brutal-white text-brutal-black font-mono px-8 py-4 
                       inline-block shadow-brutal border-2 border-brutal-black 
                       hover:bg-brutal-black hover:text-brutal-white transition-colors"
						>
							CONTACT US
						</motion.a>
					</motion.div>
				</div>
			</section>
		</div>
	);
}