/* eslint-disable react/no-unescaped-entities */
// /app/about/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Brain, Code2, HeartHandshake, Sparkles, Target, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
	{
		name: 'Senne Bels',
		role: 'Lead Developer',
		image: '/team/senne.jpg',
		bio: 'Experienced developer with a passion for creating immersive gaming experiences.',
		socials: {
			linkedin: 'https://linkedin.com/in/senne-bels',
			github: 'https://github.com/sennebels'
		}
	},
	{
		name: 'Remko Luyckx',
		role: 'Lead Designer',
		image: '/team/remko.jpg',
		bio: 'Creative visionary focused on crafting unforgettable horror experiences.',
		socials: {
			linkedin: 'https://linkedin.com/in/remko-luyckx',
			artstation: 'https://artstation.com/remkoluyckx'
		}
	},
	{
		name: 'Melina Osuna',
		role: 'Lead Animator',
		image: '/team/melina.jpg',
		bio: 'Animation expert specializing in creating fluid, lifelike character movements.',
		socials: {
			linkedin: 'https://linkedin.com/in/melina-osuna',
			artstation: 'https://artstation.com/melinaosuna'
		}
	}
];

const values = [
	{
		icon: <Code2 className="w-8 h-8" />,
		title: 'Merit Over Credentials',
		description: 'We value real skills and passion over traditional qualifications. Show us what you can do, not what paper says you can do.'
	},
	{
		icon: <Users className="w-8 h-8" />,
		title: 'Collaborative Culture',
		description: 'Our team thrives on open communication and shared creativity, where every voice matters in shaping our games.'
	},
	{
		icon: <Brain className="w-8 h-8" />,
		title: 'Innovation First',
		description: "We're not just making games – we're reimagining how horror games can be experienced and how game studios should operate."
	},
	{
		icon: <Target className="w-8 h-8" />,
		title: 'Goal-Driven Development',
		description: 'Our story point system ensures fair compensation based on actual contributions and achievements.'
	},
	{
		icon: <HeartHandshake className="w-8 h-8" />,
		title: 'Community-Focused',
		description: 'We believe in building strong relationships with our player community and involving them in our development journey.'
	},
	{
		icon: <Sparkles className="w-8 h-8" />,
		title: 'Quality First',
		description: 'We never compromise on the quality of our games or the integrity of our horror experiences.'
	}
];

export default function AboutPage() {
	return (
		<div className="min-h-screen bg-primary-black pt-36">
			{/* Hero Section */}
			<section className="relative py-20 overflow-hidden">
				<div className="absolute inset-0 opacity-30">
					<Image
						src="/about-bg.jpg"
						alt="Studio atmosphere"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-primary-black via-transparent to-primary-black" />
				</div>

				<div className="relative max-w-7xl mx-auto px-6 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="max-w-3xl mx-auto"
					>
						<h1 className="text-5xl md:text-6xl font-mono mb-6">
							Redefining Horror Gaming
						</h1>
						<p className="text-xl text-primary-gray">
							We're not just another game studio. We're a team of passionate creators
							challenging industry norms while crafting unforgettable horror experiences.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-20 bg-primary-darkgray">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-mono mb-6">Our Values</h2>
						<p className="text-primary-gray max-w-2xl mx-auto">
							At Crivyx Interactive, we're building more than games. We're creating a
							new standard for how game studios should operate and treat their talent.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{values.map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="relative group"
							>
								<div className="absolute inset-0 bg-primary-red/5 transform 
                              group-hover:translate-x-1 group-hover:translate-y-1 
                              transition-transform rounded-lg" />
								<div className="relative p-6 bg-black border border-primary-white/10 
                              rounded-lg group-hover:border-primary-red/20 transition-colors">
									<div className="text-primary-red mb-4">{value.icon}</div>
									<h3 className="text-xl font-mono mb-2">{value.title}</h3>
									<p className="text-primary-gray">{value.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-mono mb-6">Meet Our Team</h2>
						<p className="text-primary-gray max-w-2xl mx-auto">
							A collective of passionate creators pushing the boundaries of horror gaming.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{teamMembers.map((member, index) => (
							<motion.div
								key={member.name}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="relative group"
							>
								<div className="absolute inset-0 bg-primary-red/5 transform 
                              group-hover:translate-x-1 group-hover:translate-y-1 
                              transition-transform rounded-lg" />
								<div className="relative overflow-hidden bg-black border border-primary-white/10 
                              rounded-lg group-hover:border-primary-red/20 transition-colors">
									<div className="aspect-square relative">
										<Image
											src={member.image}
											alt={member.name}
											fill
											className="object-cover filter group-hover:scale-105 transition-transform duration-500"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
									</div>
									<div className="p-6">
										<h3 className="text-xl font-mono mb-1">{member.name}</h3>
										<p className="text-primary-red mb-3">{member.role}</p>
										<p className="text-primary-gray mb-4">{member.bio}</p>
										<div className="flex gap-4">
											{Object.entries(member.socials).map(([platform, url]) => (
												<a
													key={platform}
													href={url}
													target="_blank"
													rel="noopener noreferrer"
													className="text-primary-gray hover:text-primary-red transition-colors"
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

			{/* Join Us Section */}
			<section className="py-20 bg-primary-darkgray">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center max-w-3xl mx-auto"
					>
						<h2 className="text-4xl font-mono mb-6">Join Our Journey</h2>
						<p className="text-primary-gray mb-8">
							We're always looking for passionate individuals who want to push the
							boundaries of horror gaming. If you think you have what it takes,
							we'd love to hear from you.
						</p>
						<Link href="/careers" className="inline-block game-button group">
							<span className="group-hover:glitch-text">View Open Positions</span>
							<span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
						</Link>
					</motion.div>
				</div>
			</section>
		</div>
	);
}