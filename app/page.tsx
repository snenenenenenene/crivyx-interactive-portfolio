// app/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';
import { VHSEffect } from '../components/VHSEffect';
import { CookieConsent } from '../components/CookieConsent';
import { getSocialMediaLinks } from '../lib/utils';

const HomePage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const socialLinks = getSocialMediaLinks();

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

  return (
    <div className="min-h-screen bg-primary-darkgray">
      {/* Navigation */}
      <nav
        className="fixed w-full z-50 bg-primary-darkgray border-b border-primary-white/10"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="w-full mx-auto px-6 h-36">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center h-full space-x-6">
              <Link href="/" aria-label="Navigate to homepage" className="h-full flex items-center">
                <Image
                  src="/logo.svg"
                  alt="Seresaurus Games Logo"
                  width={136}
                  height={96}
                  priority
                  className="h-full w-auto py-4"
                />
              </Link>
              <h1
                className="hidden md:flex items-center h-full font-radlush text-4xl tracking-wider text-primary-white"
                style={{
                  fontFamily: 'Radlush',
                  fontWeight: 1000
                }}
              >
                SERESAURUS GAMES
              </h1>
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.twitter && (
                <motion.a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                  aria-label="Follow us on Twitter"
                >
                  <X className="w-5 h-5" />
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
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-36 p-6">
        <div className="relative h-[calc(100vh-9rem-3rem)]">
          {/* Video and VHS Effect */}
          <div className="relative w-full h-full">
            <video
              autoPlay
              playsInline
              muted
              loop
              src="/projects/ornitho.mp4"
              className="w-full h-full object-cover"
              onLoadedData={() => setIsVideoLoaded(true)}
              aria-label="Promotional video for Ornitho game"
            />
            <div className="absolute inset-0">
              <VHSEffect />
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-primary-black via-transparent to-transparent">
              <div className="space-y-4">
                <h2 className="font-mono text-3xl sm:text-4xl text-primary-white font-bold">
                  ORNITHO
                </h2>
                <p className="text-primary-white text-lg sm:text-xl max-w-2xl">
                  In Ornitho, Antwerp&apos;s familiar landmarks have become hunting grounds where prehistoric terrors lurk in every shadow. Navigate this psychological horror nightmare alone or with survivors, where your sanity is as fragile as your life. Face intelligent dinosaurs that adapt to your tactics in this atmospheric survival experience.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="game-button"
                    aria-label="Wishlist Ornitho on Steam"
                  >
                    Wishlist on Steam
                    <span className="ml-2">→</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="game-button-outline"
                    aria-label="Learn more about Ornitho"
                  >
                    <Link className="w-full h-full" href="/projects/ornitho">
                      Learn More
                    </Link>
                    <span className="ml-2">→</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Cookie Consent */}
      <CookieConsent />
    </div>
  );
};

export default HomePage;