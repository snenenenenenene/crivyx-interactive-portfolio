'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Facebook, Twitter, Instagram, Menu, Star, Square, CircleSquare } from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCookieBarVisible, setIsCookieBarVisible] = useState(true);

  const SteamIcon = () => (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.80814 2.59131C5.51642 2.59131 2.00063 5.93075 1.66675 10.1743L6.04546 12.0012C6.41638 11.7449 6.86489 11.5956 7.34691 11.5956C7.39041 11.5956 7.43332 11.5968 7.47564 11.5992L9.42311 8.75055V8.71058C9.42311 6.99648 10.8051 5.60157 12.5039 5.60157C14.2027 5.60157 15.5847 6.99648 15.5847 8.71058C15.5847 10.4247 14.2027 11.8202 12.5039 11.8202C12.4804 11.8202 12.4575 11.8196 12.434 11.819L9.65648 13.8182C9.65824 13.8552 9.65942 13.8923 9.65942 13.9287C9.65942 15.216 8.62191 16.263 7.34691 16.263C6.22769 16.263 5.29128 15.4565 5.07967 14.389L1.94773 13.0822C2.91764 16.5428 6.06839 19.0798 9.80814 19.0798C14.3203 19.0798 17.9777 15.3883 17.9777 10.8356C17.9777 6.28227 14.3203 2.59131 9.80814 2.59131Z" fill="currentColor" />
    </svg>
  );

  const UpRightArrow = () => (
    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.68 5.888L4.008 5.348L5.292 3.68H1.176L1.176 6.68H0.36L0.36 2.72H5.292L4.008 1.052L4.68 0.512L6.72 3.212L4.68 5.888Z" fill="currentColor" />
    </svg>
  );

  return (
    <div className="h-[100dvh] overflow-hidden">
      <div className="relative h-full">
        <nav className="fixed w-full z-50 px-[--indent] bg-[#161614] text-white">
          <div className="h-[--navigationHeight]">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-[0.0694444444vw]">
              {/* Left Section - Logo and Description */}
              <div className="col-span-3 md:col-span-5">
                <div className="flex items-start">
                  <Link href="/" aria-label="Navigate to homepage" className="block">
                    <div className="h-[--navigationHeight] flex items-center">
                      <Image
                        src="/logo.svg"
                        alt="Seresaurus Games"
                        width={136}
                        height={96}
                        priority
                      />
                    </div>
                  </Link>
                  <div className="hidden md:block mt-2 ml-4">
                    <p className="font-mono text-lg text-[#8f8f8f]">
                      Indie Game Studio
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-1 md:col-span-3 flex flex-col justify-between">
                {/* <div className="flex justify-end">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex items-center gap-2 font-mono text-lg"
                  >
                    Menu
                    <Star className="h-6 w-6" />
                  </button>

                  {isMenuOpen && (
                    <div className="absolute top-full right-0 bg-[#161614] border border-white">
                      <nav className="py-2">
                        <ul>
                          <li>
                            <Link href="/" className="flex items-center justify-between px-6 py-3 font-mono text-lg hover:text-[#ff0000]">
                              Games
                              <Star className="h-6 w-6 ml-4" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/company" className="flex items-center justify-between px-6 py-3 font-mono text-lg hover:text-[#ff0000]">
                              Company
                              <Square className="h-6 w-6 ml-4" />
                            </Link>
                          </li>
                          <li>
                            <Link href="/careers" className="flex items-center justify-between px-6 py-3 font-mono text-lg hover:text-[#ff0000]">
                              Careers
                              <CircleSquare className="h-6 w-6 ml-4" />
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  )}
                </div> */}

                {/* Social Icons */}
                <div className="hidden md:flex flex-col items-end">
                  <div className="flex gap-2 mb-4">
                    {/* <a
                      href="https://twitter.com/SeresaurusGames"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 border border-[#8f8f8f] rounded-full hover:border-[#ff0000] hover:text-[#ff0000] transition-colors"
                    >
                      <X size={16} />
                    </a> */}
                    <a
                      href="https://youtube.com/@Seresaurusgames"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 border border-[#8f8f8f] rounded-full hover:border-[#ff0000] hover:text-[#ff0000] transition-colors"
                    >
                      YouTube
                    </a>
                    <a
                      href="https://instagram.com/seresaurusgames"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 border border-[#8f8f8f] rounded-full hover:border-[#ff0000] hover:text-[#ff0000] transition-colors"
                    >
                      <Instagram size={16} />
                    </a>
                    <a
                      // href="https://store.steampowered.com/search/?publisher=Seresaurus%20Games"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 hover:text-[#ff0000] transition-colors"
                    >
                      <SteamIcon />
                    </a>
                  </div>

                  {/* <div className="bg-white text-black whitespace-nowrap py-1 px-2">
                    <span className="font-mono text-sm">
                      We develop and publish finely-crafted survival sandbox games.
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="h-[calc(100dvh-var(--navigationHeight))] mt-[--navigationHeight]">
          <div className="p-[15px] h-full bg-[#161614]">
            <div className="relative h-full bg-black">
              <video
                autoPlay
                playsInline
                muted
                loop
                className="w-full h-full object-cover"
                src="/projects/ornitho.mp4"
              />

              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black">
                <h2 className="font-mono text-2xl mb-4">ORNITHO</h2>
                <p className="text-[#8f8f8f] mb-6 max-w-xl">
                  A new survival sandbox experience...
                </p>

                <div className="flex gap-4">
                  <button className="flex items-center px-6 py-3 bg-white text-black border border-black hover:text-[#ff0000] hover:border-[#ff0000] transition-colors font-mono">
                    Wishlist on Steam
                    <UpRightArrow />
                  </button>
                  <button className="flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-[#ff0000] hover:border-[#ff0000] transition-colors font-mono">
                    Learn More
                    <UpRightArrow />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Cookie Bar */}
        {isCookieBarVisible && (
          <div className="fixed bottom-0 left-0 right-0 bg-white text-black">
            <div className="flex justify-between items-center p-4">
              <span className="font-mono">This website uses cookies.</span>
              <div className="flex gap-4">
                <button
                  onClick={() => setIsCookieBarVisible(false)}
                  className="font-mono text-[#8f8f8f] hover:text-black transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={() => setIsCookieBarVisible(false)}
                  className="px-6 py-3 bg-black text-white hover:bg-[#ff0000] transition-colors font-mono"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Background Canvas */}
      <canvas className="fixed inset-0 pointer-events-none z-30" />
    </div>
  );
};

export default HomePage;