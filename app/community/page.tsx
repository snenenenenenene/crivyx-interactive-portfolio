'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Users } from 'lucide-react';

const communityPlatforms = [
	{
		title: "DISCORD",
		description: "Join our active Discord community for discussions, dev updates, and exclusive content.",
		icon: <MessageSquare className="w-8 h-8" />,
		buttonText: "JOIN DISCORD",
		url: process.env.NEXT_PUBLIC_DISCORD_URL,
		stats: "1,000+ Members"
	},
	{
		title: "REDDIT",
		description: "Participate in game discussions, share theories, and stay updated on r/Paleogenesis.",
		icon: <Users className="w-8 h-8" />,
		buttonText: "JOIN SUBREDDIT",
		url: process.env.NEXT_PUBLIC_REDDIT_URL,
		stats: "Growing Community"
	}
];

const upcomingEvents = [
	{
		title: "UNWRAP 2025",
		date: "November 2025",
		location: "Kortrijk, Belgium",
		description: "First public demo and community meetup"
	},
	{
		title: "GDC 2026",
		date: "March 2026",
		location: "San Francisco, USA",
		description: "Major gameplay reveal and developer talks"
	}
];

export default function CommunityPage() {
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
							<h1 className="text-5xl font-display font-black mb-6">JOIN THE HUNT</h1>
							<p className="text-xl text-brutal-black mb-8">
								Become part of our growing community of survivors. Share theories, artwork,
								and help shape the future of Paleogenesis.
							</p>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Community Platforms */}
			<section className="py-24 bg-brutal-white">
				<div className="container mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{communityPlatforms.map((platform, index) => (
							<motion.div
								key={platform.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-brutal-white p-8 shadow-brutal border-4 border-brutal-black"
							>
								<div className="text-brutal-red mb-4">{platform.icon}</div>
								<h3 className="text-2xl font-mono font-bold mb-2">{platform.title}</h3>
								<p className="text-brutal-black mb-4">{platform.description}</p>
								<div className="flex items-center justify-between">
									<span className="text-brutal-red font-mono">{platform.stats}</span>
									<motion.a
										href={platform.url}
										target="_blank"
										rel="noopener noreferrer"
										whileHover={{ x: 4, y: 4 }}
										className="bg-brutal-black text-brutal-white font-mono px-6 py-3 
                             inline-block shadow-brutal border-2 border-brutal-black 
                             hover:bg-brutal-red transition-colors"
									>
										{platform.buttonText}
									</motion.a>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>


			{/* Upcoming Events */}
			<section className="py-24 bg-brutal-white">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl font-display font-black mb-6">MEET US IRL</h2>
						<p className="text-xl text-brutal-black max-w-2xl mx-auto">
							Join us at these upcoming events to experience Paleogenesis firsthand.
						</p>
					</motion.div>

					<div className="space-y-8">
						{upcomingEvents.map((event, index) => (
							<motion.div
								key={event.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="bg-brutal-white p-8 shadow-brutal border-4 border-brutal-black"
							>
								<div className="flex flex-col md:flex-row justify-between gap-6">
									<div>
										<h3 className="text-2xl font-mono font-bold mb-2">{event.title}</h3>
										<p className="text-brutal-black">{event.description}</p>
									</div>
									<div className="md:text-right">
										<div className="text-brutal-red font-mono mb-1">{event.date}</div>
										<div className="text-brutal-black">{event.location}</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="py-24 bg-brutal-red">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center"
					>
						<h2 className="text-4xl font-display text-brutal-white font-black mb-6">
							STAY UPDATED
						</h2>
						<p className="text-xl text-brutal-white mb-8 max-w-2xl mx-auto">
							Subscribe to our newsletter for development updates, community highlights,
							and exclusive content.
						</p>
						<div className="max-w-md mx-auto">
							<div className="flex gap-4">
								<input
									type="email"
									placeholder="Enter your email"
									className="flex-1 bg-brutal-white border-4 border-brutal-black p-4 font-mono"
								/>
								<motion.button
									whileHover={{ x: 4, y: 4 }}
									className="bg-brutal-black text-brutal-white font-mono px-8 py-4 
                           shadow-brutal border-2 border-brutal-black 
                           hover:bg-brutal-white hover:text-brutal-black transition-colors"
								>
									SUBSCRIBE
								</motion.button>
							</div>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}