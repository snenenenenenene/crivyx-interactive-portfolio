// /components/games/GameFeatures.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Feature {
	icon: ReactNode;
	title: string;
	description: string;
}

interface GameFeaturesProps {
	features: Feature[];
}

export const GameFeatures = ({ features }: GameFeaturesProps) => {
	return (
		<section className="py-24 relative overflow-hidden">
			{/* Animated Background Pattern */}
			<div
				className="absolute inset-0 opacity-5 bg-repeat pattern-grid"
				style={{
					backgroundSize: '30px 30px',
					animation: 'patternMove 20s linear infinite'
				}}
			/>

			<div className="relative max-w-7xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-mono mb-6">Key Features</h2>
					<p className="text-xl text-primary-gray max-w-2xl mx-auto">
						Experience a new evolution in survival horror gaming with our innovative
						features and mechanics.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="relative group"
						>
							<div className="absolute inset-0 bg-primary-red/5 transform group-hover:translate-x-1 group-hover:translate-y-1 transition-transform rounded-lg" />
							<div className="relative p-6 bg-black border border-primary-white/10 rounded-lg group-hover:border-primary-red/20 transition-colors">
								<div className="text-primary-red mb-4 transform group-hover:scale-110 transition-transform">
									{feature.icon}
								</div>
								<h3 className="text-xl font-mono mb-2">{feature.title}</h3>
								<p className="text-primary-gray">{feature.description}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>

			{/* Style for the animated background pattern */}
			<style jsx>{`
        @keyframes patternMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 30px 30px;
          }
        }

        .pattern-grid {
          background-image: 
            linear-gradient(to right, #ffffff05 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff05 1px, transparent 1px);
        }
      `}</style>
		</section>
	);
};