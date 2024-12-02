'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { forwardRef } from 'react';

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'default' | 'outline' | 'ghost';
	size?: 'sm' | 'default' | 'lg';
	isLoading?: boolean;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
	className,
	variant = 'default',
	size = 'default',
	// isLoading = false,
	leftIcon,
	rightIcon,
	children,
	...props
}, ref) => {
	const baseStyles = cn(
		'inline-flex items-center justify-center font-medium transition-colors duration-300',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
		{
			'bg-white text-black hover:bg-primary hover:text-white': variant === 'default',
			'border-2 border-white text-white hover:bg-white hover:text-black': variant === 'outline',
			'text-white hover:text-primary': variant === 'ghost',
			'px-4 py-2 text-sm': size === 'sm',
			'px-6 py-3': size === 'default',
			'px-8 py-4 text-lg': size === 'lg',
		},
		className
	);

	return (
		<button
			ref={ref}
			className={baseStyles}
			// whileHover={{ scale: 1.02 }}
			// whileTap={{ scale: 0.98 }}
			{...props}
		>
			{leftIcon && <span className="mr-2">{leftIcon}</span>}
			{children}
			{rightIcon && <span className="ml-2">{rightIcon}</span>}
		</button>
	);
});
Button.displayName = 'Button';

// Card Component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({
	className,
	hover = true,
	children,
	...props
}, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				'bg-surface-light',
				'transition-colors duration-300',
				hover && 'hover:bg-surface group',
				className
			)}
			// whileHover={hover ? { y: -2 } : undefined}
			{...props}
		>
			{children}
		</div>
	);
});
Card.displayName = 'Card';

// Section Component
interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
	title?: string;
	description?: string;
}

export const Section = ({
	title,
	description,
	children,
	className,
	...props
}: SectionProps) => {
	return (
		<section
			className={cn('py-24', className)}
			{...props}
		>
			<div className="container mx-auto px-6">
				{(title || description) && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						{title && (
							<h2 className="text-4xl md:text-5xl font-display text-white font-black mb-6">
								{title}
							</h2>
						)}
						{description && (
							<p className="text-xl text-gray-300 max-w-2xl mx-auto">
								{description}
							</p>
						)}
					</motion.div>
				)}
				{children}
			</div>
		</section>
	);
};

// ImageCard Component
interface ImageCardProps {
	src: string;
	alt: string;
	title: string;
	description?: string;
	href?: string;
}

export const ImageCard = ({
	src,
	alt,
	title,
	description,
	href
}: ImageCardProps) => {
	const content = (
		<div className="relative aspect-video overflow-hidden bg-black group">
			<motion.div
				whileHover={{ scale: 1.05 }}
				className="relative h-full transition-transform duration-700"
			>
				<img
					src={src}
					alt={alt}
					className="object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
				<div className="absolute inset-x-0 bottom-0 p-8">
					<h3 className="text-xl text-white font-medium mb-2">{title}</h3>
					{description && (
						<p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 
                       transition-opacity duration-300">{description}</p>
					)}
				</div>
			</motion.div>
		</div>
	);

	if (href) {
		return <Link href={href}>{content}</Link>;
	}

	return content;
};

// Container Component
export const Container = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
	return (
		<div
			className={cn('container mx-auto px-6', className)}
			{...props}
		>
			{children}
		</div>
	);
};

// Grid Component
interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
	cols?: number;
}

export const Grid = ({ children, className, cols = 3, ...props }: GridProps) => {
	return (
		<div
			className={cn(
				'grid gap-8',
				{
					'grid-cols-1 md:grid-cols-2 lg:grid-cols-3': cols === 3,
					'grid-cols-1 md:grid-cols-2': cols === 2,
					'grid-cols-1 md:grid-cols-2 lg:grid-cols-4': cols === 4,
				},
				className
			)}
			{...props}
		>
			{children}
		</div>
	);
};

export { cn };
