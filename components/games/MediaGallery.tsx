// /components/games/MediaGallery.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface MediaContent {
	screenshots: {
		src: string;
		alt: string;
		caption: string;
	}[];
	videos: {
		thumbnail: string;
		videoUrl: string;
		title: string;
	}[];
}

interface MediaGalleryProps {
	content: MediaContent;
}

export const MediaGallery = ({ content }: MediaGalleryProps) => {
	const [activeTab, setActiveTab] = useState<'screenshots' | 'videos'>('screenshots');
	const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);

	const openLightbox = (index: number) => {
		setSelectedMedia(index);
		setIsVideoPlaying(false);
	};

	const closeLightbox = () => {
		setSelectedMedia(null);
		setIsVideoPlaying(false);
	};

	const navigateMedia = (direction: 'prev' | 'next') => {
		if (selectedMedia === null) return;

		const mediaArray = activeTab === 'screenshots' ? content.screenshots : content.videos;
		const newIndex = direction === 'prev'
			? (selectedMedia - 1 + mediaArray.length) % mediaArray.length
			: (selectedMedia + 1) % mediaArray.length;

		setSelectedMedia(newIndex);
		setIsVideoPlaying(false);
	};

	return (
		<section className="py-24 bg-black">
			<div className="max-w-7xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-mono mb-6">Media Gallery</h2>
					<div className="flex justify-center gap-4">
						<button
							onClick={() => setActiveTab('screenshots')}
							className={`px-6 py-3 rounded-lg font-mono transition-colors ${activeTab === 'screenshots'
									? 'bg-primary-red text-white'
									: 'text-primary-gray hover:text-white'
								}`}
						>
							Screenshots
						</button>
						<button
							onClick={() => setActiveTab('videos')}
							className={`px-6 py-3 rounded-lg font-mono transition-colors ${activeTab === 'videos'
									? 'bg-primary-red text-white'
									: 'text-primary-gray hover:text-white'
								}`}
						>
							Videos
						</button>
					</div>
				</motion.div>

				{/* Media Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{activeTab === 'screenshots'
						? content.screenshots.map((screenshot, index) => (
							<motion.div
								key={screenshot.src}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="relative group cursor-pointer"
								onClick={() => openLightbox(index)}
							>
								<div className="relative aspect-video rounded-lg overflow-hidden">
									<Image
										src={screenshot.src}
										alt={screenshot.alt}
										fill
										className="object-cover transform group-hover:scale-105 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
										<div className="absolute bottom-4 left-4 right-4">
											<p className="text-white text-sm">{screenshot.caption}</p>
										</div>
									</div>
								</div>
							</motion.div>
						))
						: content.videos.map((video, index) => (
							<motion.div
								key={video.thumbnail}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className="relative group cursor-pointer"
								onClick={() => openLightbox(index)}
							>
								<div className="relative aspect-video rounded-lg overflow-hidden">
									<Image
										src={video.thumbnail}
										alt={video.title}
										fill
										className="object-cover transform group-hover:scale-105 transition-transform duration-500"
									/>
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="w-16 h-16 rounded-full bg-primary-red/80 flex items-center justify-center transform group-hover:scale-110 transition-transform">
											<Play className="w-8 h-8 text-white" />
										</div>
									</div>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
										<div className="absolute bottom-4 left-4 right-4">
											<p className="text-white text-sm">{video.title}</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
				</div>

				{/* Lightbox */}
				<AnimatePresence>
					{selectedMedia !== null && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
							onClick={(e) => e.target === e.currentTarget && closeLightbox()}
						>
							{/* Close Button */}
							<button
								onClick={closeLightbox}
								className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors"
								aria-label="Close gallery"
							>
								<X className="w-8 h-8" />
							</button>

							{/* Navigation Buttons */}
							<button
								onClick={() => navigateMedia('prev')}
								className="absolute left-4 p-2 text-white/50 hover:text-white transition-colors"
								aria-label="Previous media"
							>
								<ChevronLeft className="w-8 h-8" />
							</button>
							<button
								onClick={() => navigateMedia('next')}
								className="absolute right-4 p-2 text-white/50 hover:text-white transition-colors"
								aria-label="Next media"
							>
								<ChevronRight className="w-8 h-8" />
							</button>

							{/* Media Content */}
							<div className="w-full max-w-7xl mx-auto px-6">
								{activeTab === 'screenshots' ? (
									<div className="relative aspect-video">
										<Image
											src={content.screenshots[selectedMedia].src}
											alt={content.screenshots[selectedMedia].alt}
											fill
											className="object-contain"
										/>
										<p className="absolute bottom-4 left-4 right-4 text-center text-white">
											{content.screenshots[selectedMedia].caption}
										</p>
									</div>
								) : (
									<div className="relative aspect-video">
										{isVideoPlaying ? (
											<video
												src={content.videos[selectedMedia].videoUrl}
												controls
												autoPlay
												className="w-full h-full"
											/>
										) : (
											<div
												className="relative w-full h-full cursor-pointer"
												onClick={() => setIsVideoPlaying(true)}
											>
												<Image
													src={content.videos[selectedMedia].thumbnail}
													alt={content.videos[selectedMedia].title}
													fill
													className="object-cover"
												/>
												<div className="absolute inset-0 flex items-center justify-center">
													<div className="w-20 h-20 rounded-full bg-primary-red/80 flex items-center justify-center transform hover:scale-110 transition-transform">
														<Play className="w-10 h-10 text-white" />
													</div>
												</div>
											</div>
										)}
										<p className="absolute bottom-4 left-4 right-4 text-center text-white">
											{content.videos[selectedMedia].title}
										</p>
									</div>
								)}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
};