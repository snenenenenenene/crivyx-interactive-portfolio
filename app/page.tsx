'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brutal-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center border-b-4 border-brutal-black">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-[95%] mx-auto">
            <h1 className="text-[15vw] font-display font-black leading-none text-brutal-black mb-8">
              CRIVYX<br />
              INTERACTIVE
            </h1>

            <motion.div
              className="relative inline-block"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-brutal-red text-brutal-white text-xl md:text-2xl p-6 shadow-brutal max-w-2xl">
                <p>Developing psychological horror games that challenge conventional gameplay mechanics and industry standards.</p>
              </div>
            </motion.div>

            <div className="mt-12 flex flex-wrap gap-6">
              <Link href="/games/paleogenesis">
                <motion.div
                  whileHover={{ x: 4, y: 4 }}
                  className="bg-brutal-black text-brutal-white font-mono px-8 py-4 text-lg inline-block shadow-brutal border-2 border-brutal-black hover:bg-brutal-white hover:text-brutal-black transition-colors"
                >
                  DISCOVER OUR GAMES
                </motion.div>
              </Link>

              <Link href="/about">
                <motion.div
                  whileHover={{ x: 4, y: 4 }}
                  className="bg-brutal-white text-brutal-black font-mono px-8 py-4 text-lg inline-block shadow-brutal border-2 border-brutal-black transition-colors"
                >
                  ABOUT US
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Game Section */}
      <section className="py-24 bg-brutal-black text-brutal-white">
        <div className="container mx-auto px-6">
          <div className="max-w-[95%] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brutal-white text-brutal-black p-12 shadow-brutal-xl border-4 border-brutal-black"
            >
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-6xl font-display font-black mb-8">PALEOGENESIS</h2>
                  <p className="text-xl mb-8">
                    A psychological horror survival experience where prehistoric predators transform Antwerp&apos;s iconic landmarks into a hunting ground of primal terror.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {[
                      {
                        title: "MULTIPLAYER SURVIVAL",
                        desc: "Team up or survive alone in a world where every shadow could hide ancient death."
                      },
                      {
                        title: "DYNAMIC AI",
                        desc: "Face intelligent dinosaurs that learn from your tactics and adapt their hunting strategies."
                      },
                      {
                        title: "PSYCHOLOGICAL HORROR",
                        desc: "Experience a sanity system that makes every encounter more terrifying than the last."
                      },
                      {
                        title: "ICONIC LOCATIONS",
                        desc: "Explore faithfully recreated Antwerp landmarks transformed into prehistoric hunting grounds."
                      }
                    ].map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-brutal-red text-brutal-white p-4"
                      >
                        <h3 className="font-mono text-lg font-bold mb-2">{feature.title}</h3>
                        <p className="text-sm">{feature.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                  <Link href="/games/paleogenesis">
                    <motion.div
                      whileHover={{ x: 4, y: 4 }}
                      className="bg-brutal-black text-brutal-white font-mono px-8 py-4 text-lg inline-block shadow-brutal"
                    >
                      LEARN MORE
                    </motion.div>
                  </Link>
                </div>
                <div className="relative aspect-[4/3]">
                  <div className="absolute inset-4 border-4 border-brutal-black">
                    <Image
                      src="/games/paleogenesis/overview.jpg"
                      alt="Paleogenesis"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brutal-red">
        <div className="container mx-auto px-6">
          <div className="max-w-[95%] mx-auto text-center">
            <h2 className="text-brutal-white text-6xl font-display font-black mb-8">
              JOIN THE EVOLUTION
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/community">
                <motion.div
                  whileHover={{ x: 4, y: 4 }}
                  className="bg-brutal-white text-brutal-black font-mono px-8 py-4 text-lg inline-block shadow-brutal border-2 border-brutal-black"
                >
                  JOIN COMMUNITY
                </motion.div>
              </Link>
              <Link href="/newsletter">
                <motion.div
                  whileHover={{ x: 4, y: 4 }}
                  className="bg-brutal-black text-brutal-white font-mono px-8 py-4 text-lg inline-block shadow-brutal border-2 border-brutal-black"
                >
                  NEWSLETTER
                </motion.div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}