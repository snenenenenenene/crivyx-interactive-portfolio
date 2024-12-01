'use client';

import { motion } from 'framer-motion';
import { Brain, Ghost, Map, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Multiplayer Survival",
    description: "Team up or survive alone in a world where every shadow could hide ancient death."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Dynamic AI",
    description: "Face intelligent dinosaurs that learn from your tactics and adapt their hunting strategies."
  },
  {
    icon: <Ghost className="w-6 h-6" />,
    title: "Psychological Horror",
    description: "Experience a sanity system that makes every encounter more terrifying than the last."
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: "Iconic Locations",
    description: "Explore faithfully recreated Antwerp landmarks transformed into prehistoric hunting grounds."
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/games/paleogenesis/central-station.webp"
            alt="Paleogenesis - Central Station"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="max-w-3xl pt-20"
            >
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-display tracking-tight text-white font-black mb-8">
                PALEOGENESIS
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
                A psychological horror survival experience where prehistoric predators
                transform Antwerp's iconic landmarks into hunting grounds.
              </p>
              <motion.a
                href="https://store.steampowered.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-black 
                         font-medium hover:bg-red-500 hover:text-white transition-colors 
                         duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Wishlist on Steam
              </motion.a>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-neutral-900 p-8 hover:bg-neutral-800 transition-colors duration-300">
                  <div className="text-red-500 mb-6">{feature.icon}</div>
                  <h3 className="text-lg text-white font-medium mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Preview */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Central Station",
                image: "/games/paleogenesis/central-station.webp",
                description: "Experience Antwerp's iconic transport hub transformed into a deadly maze."
              },
              {
                title: "Cathedral",
                image: "/games/paleogenesis/cathedral.webp",
                description: "Gothic architecture meets prehistoric terror in this haunting landmark."
              }
            ].map((location, index) => (
              <motion.div
                key={location.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  <Image
                    src={location.image}
                    alt={location.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <h3 className="text-xl text-white font-medium mb-2">{location.title}</h3>
                    <p className="text-gray-300 text-sm">{location.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section className="py-32 bg-red-500">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl text-white font-black mb-6">
              Join the Community
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Get involved in development, share feedback, and connect with other survivors.
            </p>
            <Link
              href="/community"
              className="inline-flex items-center px-8 py-4 bg-black text-white 
                       hover:bg-white hover:text-black transition-colors duration-300"
            >
              Join the Hunt
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}