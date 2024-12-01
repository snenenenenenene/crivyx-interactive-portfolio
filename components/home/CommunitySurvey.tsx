/* eslint-disable @typescript-eslint/no-unused-vars */
// /components/home/CommunitySurvey.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

interface CommunitySurveyProps {
	onClose: () => void;
}

type Question = {
	id: string;
	text: string;
	type: 'radio' | 'checkbox' | 'text';
	options?: string[];
};

const questions: Question[] = [
	{
		id: 'horror_experience',
		text: 'What type of horror games do you enjoy most?',
		type: 'checkbox',
		options: [
			'Psychological Horror',
			'Survival Horror',
			'Action Horror',
			'Cosmic Horror',
			'Monster Horror'
		]
	},
	{
		id: 'gameplay_preference',
		text: 'Do you prefer playing horror games alone or with others?',
		type: 'radio',
		options: [
			'Solo',
			'Co-op with friends',
			'Both equally',
			'Depends on the game'
		]
	},
	{
		id: 'feature_importance',
		text: 'What aspects of horror games matter most to you?',
		type: 'checkbox',
		options: [
			'Atmosphere',
			'Story',
			'Monster Design',
			'Gore/Violence',
			'Puzzle Solving',
			'Stealth Mechanics'
		]
	},
	{
		id: 'feedback',
		text: 'What would you like to see in Paleogenesis?',
		type: 'text'
	}
];

export const CommunitySurvey = ({ onClose }: CommunitySurveyProps) => {
	const [currentStep, setCurrentStep] = useState(0);
	const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
	const [hasSubmitted, setHasSubmitted] = useState(false);

	const handleAnswer = (questionId: string, answer: string | string[]) => {
		setAnswers(prev => ({
			...prev,
			[questionId]: answer
		}));
	};

	const handleSubmit = async () => {
		// Here you would typically send the survey data to your backend
		console.log('Survey answers:', answers);
		setHasSubmitted(true);
	};

	const handleCheckboxChange = (questionId: string, option: string) => {
		const currentAnswers = answers[questionId] as string[] || [];
		const newAnswers = currentAnswers.includes(option)
			? currentAnswers.filter(a => a !== option)
			: [...currentAnswers, option];
		handleAnswer(questionId, newAnswers);
	};

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
				onClick={(e) => e.target === e.currentTarget && onClose()}
			>
				<motion.div
					initial={{ scale: 0.9, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.9, opacity: 0 }}
					className="relative bg-primary-darkgray border border-primary-white/10 rounded-lg max-w-xl w-full p-6"
				>
					{/* Close Button */}
					<button
						onClick={onClose}
						className="absolute top-4 right-4 text-primary-gray hover:text-primary-white transition-colors"
						aria-label="Close survey"
					>
						<X className="w-6 h-6" />
					</button>

					{!hasSubmitted ? (
						<>
							<div className="mb-8">
								<h2 className="text-2xl font-mono mb-2">Help Shape Our Game</h2>
								<p className="text-primary-gray">
									Your feedback will help us create the ultimate horror experience.
								</p>
							</div>

							<div className="space-y-6">
								{questions.map((question, index) => (
									<motion.div
										key={question.id}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.1 }}
										className="space-y-4"
									>
										<h3 className="font-mono text-lg">{question.text}</h3>
										{question.type === 'radio' && (
											<div className="space-y-2">
												{question.options?.map(option => (
													<label
														key={option}
														className="flex items-center space-x-3 cursor-pointer group"
													>
														<input
															type="radio"
															name={question.id}
															value={option}
															onChange={(e) => handleAnswer(question.id, e.target.value)}
															className="form-radio text-primary-red focus:ring-primary-red"
														/>
														<span className="text-primary-gray group-hover:text-primary-white transition-colors">
															{option}
														</span>
													</label>
												))}
											</div>
										)}
										{question.type === 'checkbox' && (
											<div className="space-y-2">
												{question.options?.map(option => (
													<label
														key={option}
														className="flex items-center space-x-3 cursor-pointer group"
													>
														<input
															type="checkbox"
															checked={
																(answers[question.id] as string[] || []).includes(
																	option
																)
															}
															onChange={() =>
																handleCheckboxChange(question.id, option)
															}
															className="form-checkbox text-primary-red focus:ring-primary-red"
														/>
														<span className="text-primary-gray group-hover:text-primary-white transition-colors">
															{option}
														</span>
													</label>
												))}
											</div>
										)}
										{question.type === 'text' && (
											<textarea
												className="w-full bg-black border border-primary-white/10 rounded-lg p-3 
                                 text-primary-white focus:border-primary-red focus:ring-1 
                                 focus:ring-primary-red transition-colors"
												rows={4}
												onChange={(e) => handleAnswer(question.id, e.target.value)}
												placeholder="Share your thoughts..."
											/>
										)}
									</motion.div>
								))}
							</div>

							<div className="mt-8 flex justify-end">
								<button
									onClick={handleSubmit}
									className="game-button"
								>
									Submit Feedback
								</button>
							</div>
						</>
					) : (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="text-center py-8"
						>
							<h2 className="text-2xl font-mono mb-4">Thank You!</h2>
							<p className="text-primary-gray mb-6">
								Your feedback is invaluable to us. Want to stay updated and join our
								community?
							</p>
							<div className="flex flex-col space-y-4">
								<a
									href="https://discord.gg/your-server"
									target="_blank"
									rel="noopener noreferrer"
									className="game-button"
								>
									Join Our Discord
								</a>
								<a
									href="https://reddit.com/r/your-subreddit"
									target="_blank"
									rel="noopener noreferrer"
									className="game-button-outline"
								>
									Join Our Subreddit
								</a>
							</div>
						</motion.div>
					)}
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};