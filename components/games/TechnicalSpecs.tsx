// /components/games/TechnicalSpecs.tsx
'use client';

import { motion } from 'framer-motion';
import { BarChart, Cpu, HardDrive, Monitor } from 'lucide-react';

interface SystemRequirements {
	os: string;
	processor: string;
	memory: string;
	graphics: string;
	storage: string;
}

interface TechnicalSpecsProps {
	specs: {
		platforms: string[];
		minimumRequirements: SystemRequirements;
		recommendedRequirements: SystemRequirements;
	};
}

export const TechnicalSpecs = ({ specs }: TechnicalSpecsProps) => {
	return (
		<section className="py-24 bg-black" id="technical-specs">
			<div className="max-w-7xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-mono mb-6">Technical Specifications</h2>
					<p className="text-xl text-primary-gray max-w-2xl mx-auto">
						Check if your system is ready to face the horrors that await.
					</p>
				</motion.div>

				{/* Platforms */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mb-12"
				>
					<h3 className="text-2xl font-mono mb-6">Available Platforms</h3>
					<div className="flex flex-wrap gap-4">
						{specs.platforms.map((platform) => (
							<div
								key={platform}
								className="px-6 py-3 bg-primary-darkgray border border-primary-white/10 
                         rounded-lg text-primary-white"
							>
								{platform}
							</div>
						))}
					</div>
				</motion.div>

				{/* System Requirements */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					{/* Minimum Requirements */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="relative group"
					>
						<div className="absolute inset-0 bg-primary-red/5 transform 
                          group-hover:translate-x-1 group-hover:translate-y-1 
                          transition-transform rounded-lg" />
						<div className="relative p-6 bg-primary-darkgray border border-primary-white/10 
                          rounded-lg group-hover:border-primary-red/20 transition-colors">
							<h3 className="text-2xl font-mono mb-6">Minimum Requirements</h3>
							<div className="space-y-4">
								<RequirementRow
									icon={<Monitor className="w-5 h-5" />}
									label="Operating System"
									value={specs.minimumRequirements.os}
								/>
								<RequirementRow
									icon={<Cpu className="w-5 h-5" />}
									label="Processor"
									value={specs.minimumRequirements.processor}
								/>
								<RequirementRow
									icon={<BarChart className="w-5 h-5" />}
									label="Memory"
									value={specs.minimumRequirements.memory}
								/>
								<RequirementRow
									icon={<Monitor className="w-5 h-5" />}
									label="Graphics"
									value={specs.minimumRequirements.graphics}
								/>
								<RequirementRow
									icon={<HardDrive className="w-5 h-5" />}
									label="Storage"
									value={specs.minimumRequirements.storage}
								/>
							</div>
						</div>
					</motion.div>

					{/* Recommended Requirements */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						className="relative group"
					>
						<div className="absolute inset-0 bg-primary-red/5 transform 
                          group-hover:translate-x-1 group-hover:translate-y-1 
                          transition-transform rounded-lg" />
						<div className="relative p-6 bg-primary-darkgray border border-primary-white/10 
                          rounded-lg group-hover:border-primary-red/20 transition-colors">
							<h3 className="text-2xl font-mono mb-6">Recommended Requirements</h3>
							<div className="space-y-4">
								<RequirementRow
									icon={<Monitor className="w-5 h-5" />}
									label="Operating System"
									value={specs.recommendedRequirements.os}
								/>
								<RequirementRow
									icon={<Cpu className="w-5 h-5" />}
									label="Processor"
									value={specs.recommendedRequirements.processor}
								/>
								<RequirementRow
									icon={<BarChart className="w-5 h-5" />}
									label="Memory"
									value={specs.recommendedRequirements.memory}
								/>
								<RequirementRow
									icon={<Monitor className="w-5 h-5" />}
									label="Graphics"
									value={specs.recommendedRequirements.graphics}
								/>
								<RequirementRow
									icon={<HardDrive className="w-5 h-5" />}
									label="Storage"
									value={specs.recommendedRequirements.storage}
								/>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Additional Notes */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="mt-12 p-6 bg-primary-darkgray border border-primary-white/10 rounded-lg"
				>
					<h4 className="text-xl font-mono mb-4">Additional Notes</h4>
					<ul className="text-primary-gray space-y-2">
						<li>• Internet connection required for online co-op features</li>
						<li>• Controller support: Xbox Controller (recommended), PlayStation Controller, Generic Gamepads</li>
						<li>• DirectX 12 compatible system required</li>
						<li>• SSD storage highly recommended for optimal performance</li>
					</ul>
				</motion.div>
			</div>
		</section>
	);
};

interface RequirementRowProps {
	icon: React.ReactNode;
	label: string;
	value: string;
}

const RequirementRow = ({ icon, label, value }: RequirementRowProps) => (
	<div className="flex items-start gap-4">
		<div className="text-primary-red mt-1">{icon}</div>
		<div>
			<div className="text-sm text-primary-gray">{label}</div>
			<div className="text-primary-white">{value}</div>
		</div>
	</div>
);