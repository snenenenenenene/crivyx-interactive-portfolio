// app/projects/ornitho/page.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
	Users,
	Brain,
	Ghost,
	Map,
	Shield,
	Gamepad2,
	Target,
	TrendingUp,
	Users2
} from 'lucide-react';

interface Feature {
	icon: React.ReactNode;
	title: string;
	description: string;
}

interface ConceptImage {
	src: string;
	alt: string;
	title: string;
	description: string;
}

interface MarketPoint {
	icon: React.ReactNode;
	title: string;
	description: string;
}

const conceptImages: ConceptImage[] = [
	{
		src: "/projects/ornitho-central-station.webp",
		alt: "Antwerp Central Station transformed into a prehistoric hunting ground",
		title: "Iconic Locations Reimagined",
		description: "Experience Antwerp&apos;s Central Station as a haunting hunting ground"
	},
	{
		src: "/projects/ornitho-cathedral.webp",
		alt: "Antwerp Cathedral in a post-apocalyptic setting",
		title: "Atmospheric World Design",
		description: "Gothic architecture meets prehistoric terror in detailed environments"
	}
];

const marketPoints: MarketPoint[] = [
	{
		icon: <Target className="w-6 h-6" />,
		title: "Target Audience",
		description: "Core gamers aged 18-35 seeking mature horror experiences & unique multiplayer challenges"
	},
	{
		icon: <TrendingUp className="w-6 h-6" />,
		title: "Market Potential",
		description: "Growing demand for innovative survival horror games in a $17.5B horror gaming market"
	},
	{
		icon: <Users2 className="w-6 h-6" />,
		title: "Community Interest",
		description: "Strong initial response from horror & survival game communities"
	}
];

const features: Feature[] = [
	{
		icon: <Users className="w-8 h-8" />,
		title: "Multiplayer Survival",
		description: "Team up or survive alone in a world where every shadow could hide ancient death."
	},
	{
		icon: <Brain className="w-8 h-8" />,
		title: "Dynamic AI",
		description: "Face intelligent dinosaurs that learn from your tactics and adapt their hunting strategies."
	},
	{
		icon: <Ghost className="w-8 h-8" />,
		title: "Psychological Horror",
		description: "Experience a sanity system that makes every encounter more terrifying than the last."
	},
	{
		icon: <Map className="w-8 h-8" />,
		title: "Iconic Locations",
		description: "Explore faithfully recreated Antwerp landmarks transformed into prehistoric hunting grounds."
	},
	{
		icon: <Shield className="w-8 h-8" />,
		title: "Authentic Experience",
		description: "Scientifically accurate dinosaurs reimagined as the perfect horror antagonists."
	},
	{
		icon: <Gamepad2 className="w-8 h-8" />,
		title: "Platform Support",
		description: "Planned release on Steam &amp; major console platforms."
	}
];

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
	<div className={`py-12 ${className}`}>
		{children}
	</div>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
	<h2 className="text-3xl font-mono mb-8 text-center">{children}</h2>
);

const FeatureCard = ({ feature }: { feature: Feature }) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		className="p-6 bg-[#161614] rounded-lg border border-white/5 hover:border-[#ff0000]/20 transition-colors"
	>
		<div className="text-[#ff0000] mb-4">{feature.icon}</div>
		<h3 className="text-xl font-mono mb-2">{feature.title}</h3>
		<p className="text-[#8f8f8f]">{feature.description}</p>
	</motion.div>
);

const ConceptArtImage = ({ image }: { image: ConceptImage }) => (
	<motion.div
		initial={{ opacity: 0, scale: 0.95 }}
		whileInView={{ opacity: 1, scale: 1 }}
		viewport={{ once: true }}
		className="relative group rounded-lg overflow-hidden"
	>
		<div className="relative aspect-[16/9]">
			<Image
				src={image.src}
				alt={image.alt}
				fill
				className="object-cover transform group-hover:scale-105 transition-transform duration-500"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
				<div className="absolute bottom-6 left-6 right-6">
					<h3 className="text-xl font-mono text-white mb-2">{image.title}</h3>
					<p className="text-[#8f8f8f]">{image.description}</p>
				</div>
			</div>
		</div>
	</motion.div>
);

const MarketCard = ({ point }: { point: MarketPoint }) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		className="bg-[#161614] p-6 rounded-lg border border-white/5"
	>
		<div className="text-[#ff0000] mb-4">{point.icon}</div>
		<h3 className="text-lg font-mono mb-2">{point.title}</h3>
		<p className="text-[#8f8f8f] text-sm">{point.description}</p>
	</motion.div>
);

export default function Page() {
	return (
		<div className="min-h-[100dvh] bg-black text-white overflow-y-auto">
			<div className="max-w-7xl mx-auto px-6">
				{/* Vision */}
				<Section>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="max-w-3xl mx-auto text-center space-y-6"
					>
						<h1 className="text-5xl font-mono mb-4">ORNITHO</h1>
						<p className="text-xl text-[#8f8f8f]">
							A psychological horror survival experience where prehistoric predators
							transform Antwerp&apos;s iconic landmarks into a hunting ground of
							primal terror.
						</p>
					</motion.div>
				</Section>

				{/* Concept Art */}
				<Section>
					<SectionTitle>Vision</SectionTitle>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{conceptImages.map((image, index) => (
							<ConceptArtImage key={index} image={image} />
						))}
					</div>
				</Section>

				{/* Key Features */}
				<Section className="bg-[#161614]/50 -mx-6 px-6">
					<SectionTitle>Key Features</SectionTitle>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{features.map((feature, index) => (
							<FeatureCard key={index} feature={feature} />
						))}
					</div>
				</Section>

				{/* Market Analysis */}
				<Section>
					<SectionTitle>Market Opportunity</SectionTitle>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{marketPoints.map((point, index) => (
							<MarketCard key={index} point={point} />
						))}
					</div>
				</Section>

				{/* Call to Action */}
				<Section>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center space-y-6 max-w-2xl mx-auto"
					>
						<h2 className="text-3xl font-mono">Join Us in Creating Horror History</h2>
						<p className="text-[#8f8f8f]">
							We invite you to be part of this groundbreaking project that will
							redefine the survival horror genre.
						</p>
						<button className="px-8 py-4 bg-[#ff0000] hover:bg-[#ff0000]/90 transition-colors font-mono rounded-lg">
							Investment Deck
						</button>
					</motion.div>
				</Section>
			</div>
		</div>
	);
}