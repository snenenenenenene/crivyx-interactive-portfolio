'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Users } from 'lucide-react';

const communityPlatforms = [
	{
		title: "Discord",
		description: "Join our active Discord community for discussions, dev updates, and exclusive content.",
		icon: <MessageSquare className="w-6 h-6" />,
		buttonText: "Join Discord",
		url: process.env.NEXT_PUBLIC_DISCORD_URL,
		stats: "1,000+ Members",
		bgColor: "bg-[#5865F2]"
	},
	{
		title: "Reddit",
		description: "Participate in game discussions, share theories, and stay updated on r/Paleogenesis.",
		icon: <Users className="w-6 h-6" />,
		buttonText: "Join Subreddit",
		url: process.env.NEXT_PUBLIC_REDDIT_URL,
		stats: "Growing Community",
		bgColor: "bg-[#FF4500]"
	}
];


export default function CommunityPage() {
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
								Join The Hunt
							</h1>
							<p className="text-xl text-gray-300 mb-10 leading-relaxed">
								Become part of our growing community of survivors. Shape the development,
								share your creativity, and connect with fellow horror enthusiasts.
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

			{/* Community Platforms */}
			<section className="py-24 bg-zinc-900">
				<div className="container mx-auto px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl text-white font-bold mb-6">
							Join Our Community
						</h2>
						<p className="text-xl text-gray-400 max-w-2xl mx-auto">
							Connect with fellow survivors and join the conversation across our platforms.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{communityPlatforms.map((platform, index) => (
							<motion.div
								key={platform.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="group"
							>
								<div className="bg-zinc-800 p-8 h-full">
									<div className="text-white mb-6">{platform.icon}</div>
									<h3 className="text-2xl text-white font-medium mb-4">{platform.title}</h3>
									<p className="text-gray-400 mb-6">{platform.description}</p>
									<div className="flex items-center justify-between">
										{/* <span className="text-gray-500 text-sm">{platform.stats}</span> */}
										<a
											href={platform.url}
											target="_blank"
											rel="noopener noreferrer"
											className={`inline-flex items-center px-6 py-3 text-white
                               transition-colors duration-300 ${platform.bgColor}
                               hover:opacity-90`}
										>
											{platform.buttonText}
											<span className="ml-2">→</span>
										</a>
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
						className="text-center max-w-3xl mx-auto"
					>
						<h2 className="text-4xl md:text-5xl text-white font-black mb-6">
							Stay Updated
						</h2>
						<p className="text-xl text-white/90 mb-10">
							Subscribe to our newsletter for development updates, community highlights,
							and exclusive content.
						</p>
						<div className="max-w-md mx-auto flex gap-4">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex-1 bg-white px-6 py-4 text-black"
							/>
							<button
								className="px-8 py-4 bg-black text-white hover:bg-white 
                         hover:text-black transition-colors duration-300"
							>
								Subscribe
							</button>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
}