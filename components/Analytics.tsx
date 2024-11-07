// components/Analytics.tsx
import { getCookie } from '@/lib/cookies';
import Script from 'next/script';

export const Analytics = () => {
	const hasConsent = getCookie('cookie-consent') === 'accepted';

	if (!hasConsent) return null;

	return (
		<>
			{/* Add your analytics scripts here */}
			<Script
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR-GA-ID');
        `}
			</Script>
		</>
	);
};