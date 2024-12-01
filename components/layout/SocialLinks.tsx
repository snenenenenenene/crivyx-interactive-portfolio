// /components/layout/SocialLinks.tsx
'use client';

import { getSocialMediaLinks } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Instagram, Youtube } from 'lucide-react';

// Steam Icon Component
const SteamIcon = () => (
	<svg
		className="w-5 h-5"
		viewBox="0 0 20 21"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M9.80814 2.59131C5.51642 2.59131 2.00063 5.93075 1.66675 10.1743L6.04546 12.0012C6.41638 11.7449 6.86489 11.5956 7.34691 11.5956C7.39041 11.5956 7.43332 11.5968 7.47564 11.5992L9.42311 8.75055V8.71058C9.42311 6.99648 10.8051 5.60157 12.5039 5.60157C14.2027 5.60157 15.5847 6.99648 15.5847 8.71058C15.5847 10.4247 14.2027 11.8202 12.5039 11.8202C12.4804 11.8202 12.4575 11.8196 12.434 11.819L9.65648 13.8182C9.65824 13.8552 9.65942 13.8923 9.65942 13.9287C9.65942 15.216 8.62191 16.263 7.34691 16.263C6.22769 16.263 5.29128 15.4565 5.07967 14.389L1.94773 13.0822C2.91764 16.5428 6.06839 19.0798 9.80814 19.0798C14.3203 19.0798 17.9777 15.3883 17.9777 10.8356C17.9777 6.28227 14.3203 2.59131 9.80814 2.59131Z" />
	</svg>
);

// Reddit Icon Component
const RedditIcon = () => (
	<svg
		className="w-5 h-5"
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
	</svg>
);

// Discord Icon Component
const DiscordIcon = () => (
	<svg
		className="w-5 h-5"
		viewBox="0 0 24 24"
		fill="currentColor"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
	</svg>
);

export const SocialLinks = () => {
	const socialLinks = getSocialMediaLinks();

	return (
		<div className="flex items-center space-x-4">
			{socialLinks.discord && (
				<motion.a
					href={socialLinks.discord}
					target="_blank"
					rel="noreferrer"
					className="social-link"
					whileHover={{ scale: 1.1 }}
					aria-label="Join our Discord community"
				>
					<DiscordIcon />
				</motion.a>
			)}
			{socialLinks.reddit && (
				<motion.a
					href={socialLinks.reddit}
					target="_blank"
					rel="noreferrer"
					className="social-link"
					whileHover={{ scale: 1.1 }}
					aria-label="Join our Reddit community"
				>
					<RedditIcon />
				</motion.a>
			)}
			{socialLinks.youtube && (
				<motion.a
					href={socialLinks.youtube}
					target="_blank"
					rel="noreferrer"
					className="social-link"
					whileHover={{ scale: 1.1 }}
					aria-label="Subscribe to our YouTube channel"
				>
					<Youtube className="w-5 h-5" />
				</motion.a>
			)}
			{socialLinks.instagram && (
				<motion.a
					href={socialLinks.instagram}
					target="_blank"
					rel="noreferrer"
					className="social-link"
					whileHover={{ scale: 1.1 }}
					aria-label="Follow us on Instagram"
				>
					<Instagram className="w-5 h-5" />
				</motion.a>
			)}
			{socialLinks.steam && (
				<motion.a
					href={socialLinks.steam}
					target="_blank"
					rel="noreferrer"
					className="social-link"
					whileHover={{ scale: 1.1 }}
					aria-label="Find us on Steam"
				>
					<SteamIcon />
				</motion.a>
			)}
		</div>
	);
};