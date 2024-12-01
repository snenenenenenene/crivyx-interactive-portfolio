// /app/careers/page.tsx
'use client';

import { motion } from 'framer-motion';
import { Brain, Star, Target, Trophy, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const positions = [
	{
		title: 'Game Developer',
		type: 'Full-time',
		location: 'Antwerp, Belgium / Remote',
		description: 'Join us in creating innovative horror game mechanics and pushing technical boundaries.',
		requirements: [
			'Proven ability to create game systems and mechanics',
			'Experience with Unreal Engine or similar game engines',
			'Passion for horror games and player experience',
			'Strong problem-solving skills'
		],
		link: '/careers/game-developer'
	},
	{
		title: '3D Artist',
		type: 'Full-time',
		location: 'Antwerp, Belgium / Remote',
		description: 'Help us create terrifying creatures and atmospheric environments.',
		requirements: [
			'Strong portfolio demonstrating 3D modeling skills',
			'Experience with PBR workflows',
			'Knowledge of real-time rendering techniques',
			'Eye for horror aesthetics'
		],
		link: '/careers/3d-artist'
	},
	{
		title: 'UI/UX Designer',
		type: 'Full-time',
		location: 'Antwerp, Belgium / Remote',
		description: 'Design intuitive and immersive user interfaces for our games.',
		requirements: [
			'Portfolio showing game UI/UX work',
			'Understanding of player psychology',
			'Experience with game UI implementation',
			'Knowledge of accessibility standards'
		],
		link: '/careers/ui-ux-designer'
	}
];

const benefits = [
	{
		icon: <Brain className="w-8 h-8" />,
		title: 'Merit-Based Growth',
		description: 'Your contributions and skills determine your growth, not years of experience or degrees.'
	},
	{
		icon: <Star className="w-8 h-8" />,
		title: 'Story Point System',
		description: 'Our transparent bonus system rewards actual contributions through story points.'
	},
	{
		icon: <Zap className="w-8 h-8" />,
		title: 'Remote-First',
		description: 'Work from anywhere in the world. We believe in flexibility and trust.'
	},
	{
		icon: <Trophy className="w-8 h-8" />,
		title: 'Professional Development',
		description: 'Regular training, workshops, and conference attendance opportunities.'
	},
	{
		icon: <Target className="w-8 h-8" />,
		title: 'Project Ownership',
		description: 'Direct impact on our games with real creative freedom.'
	},
	{
		icon: <Users className="w-8 h-8" />,
		title: 'Inclusive Culture',
		description: 'Be part of a diverse team that values every voice and perspective.'
	}
];

const CareersPage = () => {
	return (
		<div className="min-h-screen bg-primary-black pt-36">
			{/* Hero Section */}
			<section className="relative py-20 overflow-hidden">
				<div className="absolute inset-0 opacity-30">
					<Image
						src="/careers-bg.jpg"
						alt="Studio work environment"
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
							Join the Revolution
						</h1>
						<p className="text-xl text-primary-gray">
							We're challenging industry norms, both in how we make games and how we
							treat our team. No arbitrary experience requirements - just pure talent
							and passion.
						</p>
					</motion.div>
				</div>
			</section>

			{/* Our Approach Section */}
			<section className="py-20 bg-primary-darkgray">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-mono mb-6">A Different Approach</h2>
						<p className="text-primary-gray max-w-2xl mx-auto">
							We're breaking away from traditional game industry practices. No more arbitrary
							requirements or outdated hiring practices. We care about what you can do,
							not what your resume says.
						</p>
					</motion.div>

					{/* Story Points System Explanation */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="bg-black p-8 rounded-lg border border-primary-white/10"
						>
							<h3 className="text-2xl font-mono mb-4">Merit-Based System</h3>
							<p className="text-primary-gray mb-4">
								Our unique story points system ensures your compensation is based on your
								actual contributions, not just time spent. Each task is assigned points
								based on complexity and impact.
							</p>
							<ul className="space-y-2 text-primary-gray">
								<li className="flex items-start gap-2">
									<span className="text-primary-red">•</span>
									Transparent point allocation
								</li>
								<li className="flex items-start gap-2">
									<span className="text-primary-red">•</span>
									Regular performance reviews
								</li>
								<li className="flex items-start gap-2">
									<span className="text-primary-red">•</span>
									Clear growth pathways
								</li>
							</ul>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className="bg-black p-8 rounded-lg border border-primary-white/10"
						>
							<h3 className="text-2xl font-mono mb-4">Growth Opportunities</h3>
							<p className="text-primary-gray mb-4">
								We believe in continuous learning and development. Your growth is
								measured by your achievements and improvements, not time served.
							</p>
							<ul className="space-y-2 text-primary-gray">
								<li className="flex items-start gap-2">
									<span className="text-primary-red">•</span>
									Skill-based advancement
								</li>
								<li className="flex items-start gap-2">
									<span className="text-primary-red">•</span>
									Mentorship opportunities
								</li>
								<li className="flex items-start gap-2">
									<span className="text-primary-red">•</span>
									Project leadership roles
								</li>
							</ul>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Benefits Section */}
			<section className="py-20">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-mono mb-6">Benefits</h2>
						<p className="text-primary-gray max-w-2xl mx-auto">
							We believe in taking care of our team with meaningful benefits that
							matter to creators.
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
								className="relative group"
							>
								<div className="absolute inset-0 bg-primary-red/5 transform 
                              group-hover:translate-x-1 group-hover:translate-y-1 
                              transition-transform rounded-lg" />
								<div className="relative p-6 bg-black border border-primary-white/10 
                              rounded-lg group-hover:border-primary-red/20 transition-colors">
									<div className="text-primary-red mb-4">{benefit.icon}</div>
									<h3 className="text-xl font-mono mb-2">{benefit.title}</h3>
									<p className="text-primary-gray">{benefit.description}</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Open Positions */}
			<section className="py-20 bg-primary-darkgray">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-mono mb-6">Open Positions</h2>
						<p className="text-primary-gray max-w-2xl mx-auto">
							Join us in creating the next generation of horror games. We're always
							looking for passionate creators.
						</p>
					</motion.div>

					<div className="space-y-6">
						{positions.map((position, index) => (
							<motion.div
								key={position.title}
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
									<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
										<div>
											<h3 className="text-2xl font-mono mb-2">{position.title}</h3>
											<div className="flex flex-wrap gap-4 text-primary-gray">
												<span>{position.type}</span>
												<span>•</span>
												<span>{position.location}</span>
											</div>
										</div>
										<Link
											href={position.link}
											className="game-button-outline whitespace-nowrap"
										>
											Learn More
											<span className="ml-2">→</span>
										</Link>
									</div>
									<p className="text-primary-gray mt-4 mb-6">{position.description}</p>
									<div className="space-y-2">
										{position.requirements.map((req, i) => (
											<div key={i} className="flex items-start gap-2 text-primary-gray">
												<span className="text-primary-red">•</span>
												<span>{req}</span>
											</div>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>

					{/* Open Application */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mt-16"
					>
						<h3 className="text-2xl font-mono mb-4">Don't see your role?</h3>
						<p className="text-primary-gray mb-8">
							We're always interested in meeting talented creators. Send us your portfolio
							and tell us how you can contribute to our vision.
						</p>
						<Link href="/careers/apply" className="game-button">
							Open Application
							<span className="ml-2">→</span>
						</Link>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default CareersPage;