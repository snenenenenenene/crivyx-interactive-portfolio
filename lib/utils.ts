// lib/utils.ts
export const getSocialMediaLinks = () => ({
	twitter: process.env.NEXT_PUBLIC_TWITTER_URL,
	youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL,
	instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
	steam: process.env.NEXT_PUBLIC_STEAM_URL,
  });
