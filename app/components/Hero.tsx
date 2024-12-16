"use client";

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: '-100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 lg:pr-10"
            variants={itemVariants}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
              <span className="block">Welcome to</span>
              <span className="block text-secondary">Our Volleyball Club</span>
            </h1>
            <p className="mt-3 text-base sm:text-lg md:text-xl mb-8">
              Join us in our passion for volleyball and be part of an amazing community of players and fans.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="/join" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-tertiary hover:text-secondary bg-secondary hover:bg-tertiary transition duration-150 ease-in-out">
                Join Our Club
              </Link>
              <Link href="/schedule" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-tertiary hover:text-secondary bg-secondary hover:bg-tertiary transition duration-150 ease-in-out">
                View Schedule
              </Link>
            </div>
          </motion.div>
          <motion.div 
            className="w-full lg:w-1/2 mt-10 lg:mt-0"
            variants={imageVariants}
          >
            <div className="relative w-full h-64 sm:h-72 md:h-96 lg:h-[500px]">
              <Image
                src="/images/team-A.webp"
                alt="Volleyball Player"
                width={500}
                height={500}
                style={{ width: '100%', height: 'auto' }}
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero;
