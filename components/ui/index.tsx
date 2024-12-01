'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import {
	Loader2,
	Minus,
	Pause,
	Play,
	Plus,
	X
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { forwardRef, useEffect, useState } from 'react';

// Utility Types
type VariantProps = {
	variant?: 'default' | 'outline' | 'ghost' | 'destructive';
	size?: 'sm' | 'default' | 'lg' | 'icon';
};

// Glitch Animation Component
export const GlitchText = ({
	children,
	intensity = 'medium'
}: {
	children: React.ReactNode;
	intensity?: 'low' | 'medium' | 'high';
}) => {
	const intensityMap = {
		low: 'hover:animate-glitch-low',
		medium: 'hover:animate-glitch-medium',
		high: 'hover:animate-glitch-high'
	};

	return (
		<span className={cn(
			'relative inline-block',
			'before:content-[attr(data-text)] before:absolute before:left-[-2px] before:text-red-600/80',
			'after:content-[attr(data-text)] after:absolute after:left-[2px] after:text-blue-600/80',
			intensityMap[intensity]
		)} data-text={children}>
			{children}
		</span>
	);
};

// Button Component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps {
	isLoading?: boolean;
	glitch?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
	className,
	variant = 'default',
	size = 'default',
	isLoading = false,
	glitch = false,
	children,
	...props
}, ref) => {
	const baseStyles = cn(
		'relative inline-flex items-center justify-center font-mono',
		'border-2 border-neutral-900 dark:border-neutral-100',
		'transition-transform duration-100 active:translate-y-1',
		'disabled:opacity-50 disabled:pointer-events-none',
		'after:absolute after:inset-0 after:bg-neutral-900 dark:after:bg-neutral-100 after:-z-10',
		'after:translate-x-2 after:translate-y-2',
		{
			'text-sm px-3 py-1': size === 'sm',
			'text-base px-4 py-2': size === 'default',
			'text-lg px-6 py-3': size === 'lg',
			'p-2': size === 'icon',
			'bg-neutral-100 text-neutral-900 hover:bg-red-500 hover:border-red-700': variant === 'default',
			'bg-transparent hover:bg-red-500 hover:text-neutral-100': variant === 'outline',
			'bg-transparent border-transparent after:hidden hover:text-red-500': variant === 'ghost',
			'bg-red-500 border-red-700 text-neutral-100 hover:bg-red-600': variant === 'destructive',
		},
		glitch && 'hover:animate-glitch-skew',
		className
	);

	return (
		<button
			ref={ref}
			className={baseStyles}
			disabled={isLoading}
			{...props}
		>
			{isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
			{glitch ? <GlitchText>{children}</GlitchText> : children}
		</button>
	);
});
Button.displayName = 'Button';

// Card Component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	hover?: boolean;
	glitch?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({
	className,
	hover = true,
	glitch = false,
	children,
	...props
}, ref) => {
	const baseStyles = cn(
		'relative bg-neutral-100 dark:bg-neutral-900',
		'border-2 border-neutral-900 dark:border-neutral-100',
		'after:absolute after:inset-0 after:bg-neutral-900 dark:after:bg-neutral-100 after:-z-10',
		'after:translate-x-2 after:translate-y-2',
		hover && 'hover:translate-x-1 hover:translate-y-1 hover:after:translate-x-1 hover:after:translate-y-1',
		glitch && 'hover:animate-glitch-skew',
		className
	);

	return (
		<motion.div
			ref={ref}
			className={baseStyles}
			initial={hover ? { opacity: 0, y: 20 } : false}
			whileInView={hover ? { opacity: 1, y: 0 } : false}
			viewport={{ once: true }}
			{...props}
		>
			{children}
		</motion.div>
	);
});
Card.displayName = 'Card';

// Input Component
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: boolean;
	icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
	className,
	error,
	icon,
	...props
}, ref) => {
	const baseStyles = cn(
		'w-full bg-neutral-100 dark:bg-neutral-900',
		'border-2 border-neutral-900 dark:border-neutral-100',
		'px-4 py-2 font-mono',
		'focus:outline-none focus:ring-2 focus:ring-red-500',
		'disabled:opacity-50 disabled:cursor-not-allowed',
		'placeholder:text-neutral-500',
		error && 'border-red-500 focus:ring-red-500',
		icon && 'pl-10',
		className
	);

	return (
		<div className="relative">
			{icon && (
				<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
					{icon}
				</div>
			)}
			<input ref={ref} className={baseStyles} {...props} />
			{error && (
				<motion.span
					initial={{ opacity: 0, x: -10 }}
					animate={{ opacity: 1, x: 0 }}
					className="absolute -bottom-6 left-0 text-sm text-red-500"
				>
					Error message
				</motion.span>
			)}
		</div>
	);
});
Input.displayName = 'Input';

// Textarea Component
interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
	className,
	error,
	...props
}, ref) => {
	const baseStyles = cn(
		'w-full bg-neutral-100 dark:bg-neutral-900',
		'border-2 border-neutral-900 dark:border-neutral-100',
		'px-4 py-2 font-mono',
		'focus:outline-none focus:ring-2 focus:ring-red-500',
		'disabled:opacity-50 disabled:cursor-not-allowed',
		'placeholder:text-neutral-500',
		error && 'border-red-500 focus:ring-red-500',
		className
	);

	return (
		<textarea ref={ref} className={baseStyles} {...props} />
	);
});
Textarea.displayName = 'Textarea';

// Select Component
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	options: { value: string; label: string; }[];
	error?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
	className,
	options,
	error,
	...props
}, ref) => {
	const baseStyles = cn(
		'w-full bg-neutral-100 dark:bg-neutral-900',
		'border-2 border-neutral-900 dark:border-neutral-100',
		'px-4 py-2 font-mono',
		'focus:outline-none focus:ring-2 focus:ring-red-500',
		'disabled:opacity-50 disabled:cursor-not-allowed',
		error && 'border-red-500 focus:ring-red-500',
		className
	);

	return (
		<select ref={ref} className={baseStyles} {...props}>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
});
Select.displayName = 'Select';

// Checkbox Component
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
	className,
	label,
	...props
}, ref) => {
	const baseStyles = cn(
		'h-5 w-5 bg-neutral-100 dark:bg-neutral-900',
		'border-2 border-neutral-900 dark:border-neutral-100',
		'focus:outline-none focus:ring-2 focus:ring-red-500',
		'checked:bg-red-500 checked:border-red-700',
		className
	);

	return (
		<label className="inline-flex items-center space-x-2">
			<input
				type="checkbox"
				ref={ref}
				className={baseStyles}
				{...props}
			/>
			{label && <span className="font-mono">{label}</span>}
		</label>
	);
});
Checkbox.displayName = 'Checkbox';

// Radio Component
interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({
	className,
	label,
	...props
}, ref) => {
	const baseStyles = cn(
		'h-5 w-5 bg-neutral-100 dark:bg-neutral-900',
		'border-2 border-neutral-900 dark:border-neutral-100',
		'focus:outline-none focus:ring-2 focus:ring-red-500',
		'checked:bg-red-500 checked:border-red-700',
		className
	);

	return (
		<label className="inline-flex items-center space-x-2">
			<input
				type="radio"
				ref={ref}
				className={baseStyles}
				{...props}
			/>
			{label && <span className="font-mono">{label}</span>}
		</label>
	);
});
Radio.displayName = 'Radio';

// Modal Component
interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children: React.ReactNode;
}

export const Modal = ({
	isOpen,
	onClose,
	title,
	children
}: ModalProps) => {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
					onClick={(e) => e.target === e.currentTarget && onClose()}
				>
					<motion.div
						initial={{ scale: 0.95, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.95, opacity: 0 }}
						className="container flex items-center justify-center min-h-screen px-4"
					>
						<Card className="w-full max-w-lg p-6">
							{title && (
								<div className="flex items-center justify-between mb-4">
									<h2 className="text-2xl font-bold font-mono">{title}</h2>
									<Button
										variant="ghost"
										size="icon"
										onClick={onClose}
									>
										<X className="h-6 w-6" />
									</Button>
								</div>
							)}
							{children}
						</Card>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

// Alert Component
interface AlertProps {
	variant?: 'info' | 'success' | 'warning' | 'error';
	title?: string;
	children: React.ReactNode;
	onClose?: () => void;
}

export const Alert = ({
	variant = 'info',
	title,
	children,
	onClose
}: AlertProps) => {
	const variantStyles = {
		info: 'border-blue-500 dark:border-blue-400',
		success: 'border-green-500 dark:border-green-400',
		warning: 'border-yellow-500 dark:border-yellow-400',
		error: 'border-red-500 dark:border-red-400'
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			className={cn(
				'p-4 border-l-4',
				'bg-neutral-100 dark:bg-neutral-900',
				variantStyles[variant]
			)}
		>
			<div className="flex items-start justify-between">
				<div>
					{title && <h3 className="font-bold mb-2 font-mono">{title}</h3>}
					<div className="text-sm">{children}</div>
				</div>
				{onClose && (
					<Button
						variant="ghost"
						size="icon"
						onClick={onClose}
					>
						<X className="h-4 w-4" />
					</Button>
				)}
			</div>
		</motion.div>
	);
};

interface ToastProps {
	message: string;
	type?: 'success' | 'error' | 'info';
	onClose: () => void;
}

export const Toast = ({ message, type = 'info', onClose }: ToastProps) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, 5000);
		return () => clearTimeout(timer);
	}, [onClose]);

	const typeStyles = {
		success: 'border-green-500',
		error: 'border-red-500',
		info: 'border-blue-500'
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 50, x: '-50%' }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 50 }}
			className={cn(
				'fixed bottom-4 left-1/2 z-50',
				'p-4 min-w-[300px]',
				'bg-neutral-100 dark:bg-neutral-900',
				'border-2 border-t-4',
				typeStyles[type]
			)}
		>
			<div className="flex items-center justify-between">
				<span className="font-mono">{message}</span>
				<button
					onClick={onClose}
					className="text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
				>
					<X className="h-4 w-4" />
				</button>
			</div>
		</motion.div>
	);
};

// Loading Spinner Component
export const LoadingSpinner = ({
	size = 'default',
	className
}: {
	size?: 'sm' | 'default' | 'lg';
	className?: string;
}) => {
	const sizeMap = {
		sm: 'h-4 w-4',
		default: 'h-8 w-8',
		lg: 'h-12 w-12'
	};

	return (
		<div
			className={cn(
				'animate-spin rounded-full border-2',
				'border-r-transparent border-t-transparent',
				'border-neutral-900 dark:border-neutral-100',
				sizeMap[size],
				className
			)}
		/>
	);
};

// Progress Bar Component
export const ProgressBar = ({
	progress,
	className
}: {
	progress: number;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				'w-full h-4',
				'bg-neutral-200 dark:bg-neutral-800',
				'border-2 border-neutral-900 dark:border-neutral-100',
				className
			)}
		>
			<motion.div
				initial={{ width: 0 }}
				animate={{ width: `${progress}%` }}
				className="h-full bg-red-500"
				style={{ width: `${progress}%` }}
			/>
		</div>
	);
};

// Accordion Component
interface AccordionProps {
	items: {
		title: string;
		content: React.ReactNode;
	}[];
}

export const Accordion = ({ items }: AccordionProps) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<div className="space-y-2">
			{items.map((item, index) => (
				<div key={index} className="border-2 border-neutral-900 dark:border-neutral-100">
					<button
						className="w-full px-4 py-2 flex justify-between items-center font-mono"
						onClick={() => setOpenIndex(openIndex === index ? null : index)}
					>
						{item.title}
						{openIndex === index ? <Minus /> : <Plus />}
					</button>
					<AnimatePresence>
						{openIndex === index && (
							<motion.div
								initial={{ height: 0 }}
								animate={{ height: 'auto' }}
								exit={{ height: 0 }}
								className="overflow-hidden"
							>
								<div className="p-4 border-t-2 border-neutral-900 dark:border-neutral-100">
									{item.content}
								</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			))}
		</div>
	);
};

// Tabs Component
interface TabsProps {
	tabs: {
		label: string;
		content: React.ReactNode;
	}[];
}

export const Tabs = ({ tabs }: TabsProps) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div>
			<div className="flex border-b-2 border-neutral-900 dark:border-neutral-100">
				{tabs.map((tab, index) => (
					<button
						key={index}
						className={cn(
							'px-4 py-2 font-mono',
							activeTab === index ? 'bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900' : ''
						)}
						onClick={() => setActiveTab(index)}
					>
						{tab.label}
					</button>
				))}
			</div>
			<div className="p-4">
				{tabs[activeTab].content}
			</div>
		</div>
	);
};

// Navigation Menu Component
interface NavigationMenuProps {
	items: {
		label: string;
		href: string;
	}[];
}

export const NavigationMenu = ({ items }: NavigationMenuProps) => {
	return (
		<nav>
			<ul className="flex space-x-4">
				{items.map((item) => (
					<li key={item.href}>
						<Link
							href={item.href}
							className="font-mono hover:text-red-500 transition-colors"
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

// Image Gallery Component
interface ImageGalleryProps {
	images: {
		src: string;
		alt: string;
		caption?: string;
	}[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
	const [selectedImage, setSelectedImage] = useState<number | null>(null);

	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{images.map((image, index) => (
					<div
						key={index}
						className="cursor-pointer relative aspect-video group"
						onClick={() => setSelectedImage(index)}
					>
						<Image
							src={image.src}
							alt={image.alt}
							fill
							className="object-cover"
						/>
						<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
							{image.caption && (
								<p className="absolute bottom-2 left-2 text-white font-mono">
									{image.caption}
								</p>
							)}
						</div>
					</div>
				))}
			</div>

			<Modal
				isOpen={selectedImage !== null}
				onClose={() => setSelectedImage(null)}
			>
				{selectedImage !== null && (
					<div className="relative aspect-video">
						<Image
							src={images[selectedImage].src}
							alt={images[selectedImage].alt}
							fill
							className="object-contain"
						/>
					</div>
				)}
			</Modal>
		</>
	);
};

// Drag Warning Component
export const DragWarning = ({
	message = "Are you sure you want to leave? You have unsaved changes.",
}: {
	message?: string;
}) => {
	useEffect(() => {
		const handleBeforeUnload = (e: BeforeUnloadEvent) => {
			e.preventDefault();
			e.returnValue = message;
			return message;
		};

		window.addEventListener('beforeunload', handleBeforeUnload);
		return () => window.removeEventListener('beforeunload', handleBeforeUnload);
	}, [message]);

	return null;
};

// Video Player Component
interface VideoPlayerProps {
	src: string;
	thumbnail?: string;
	autoPlay?: boolean;
}

export const VideoPlayer = ({ src, thumbnail, autoPlay = false }: VideoPlayerProps) => {
	const [isPlaying, setIsPlaying] = useState(autoPlay);
	const videoRef = React.useRef<HTMLVideoElement>(null);

	const togglePlay = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	return (
		<div className="relative aspect-video group">
			<video
				ref={videoRef}
				src={src}
				poster={thumbnail}
				className="w-full h-full object-cover"
				autoPlay={autoPlay}
				loop
				playsInline
			/>
			<button
				onClick={togglePlay}
				className="absolute inset-0 flex items-center justify-center"
			>
				<div className="opacity-0 group-hover:opacity-100 transition-opacity">
					{isPlaying ? (
						<Pause className="w-12 h-12 text-white" />
					) : (
						<Play className="w-12 h-12 text-white" />
					)}
				</div>
			</button>
		</div>
	);
};

// ScrollProgress Component
export const ScrollProgress = () => {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight - windowHeight;
			const scrolled = window.scrollY;
			const progress = (scrolled / documentHeight) * 100;
			setProgress(progress);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.div
			className="fixed top-0 left-0 right-0 h-1 bg-red-500 z-50"
			style={{ scaleX: progress / 100, transformOrigin: '0%' }}
		/>
	);
};

// Noise Overlay Component
export const NoiseOverlay = ({ opacity = 0.05 }: { opacity?: number }) => {
	return (
		<div
			className="pointer-events-none fixed inset-0 z-50"
			style={{
				backgroundImage: 'url("/noise.png")',
				opacity,
				mixBlendMode: 'multiply'
			}}
		/>
	);
};

export { cn };
