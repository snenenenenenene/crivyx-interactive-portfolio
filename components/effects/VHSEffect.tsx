// /components/effects/VHSEffect.tsx
'use client';

interface VHSEffectProps {
	intensity?: number;
}

export const VHSEffect = ({ intensity = 1.0 }: VHSEffectProps) => {
	return (
		<div className="pointer-events-none">
			<div
				className="absolute inset-0 vhs-scanlines"
				style={{ opacity: 0.5 * intensity }}
			/>
			<div
				className="absolute inset-0 vhs-noise"
				style={{ opacity: 0.1 * intensity }}
			/>
		</div>
	);
};