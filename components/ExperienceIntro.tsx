"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExperienceIntro = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const domains = ["HR solutions", "utility apps", "financial technology", "blockchain applications"];
  const skills = ["strategic thinking", "patience", "anticipation", "problem-solving"];
  
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % domains.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }
    }
  };

  return (
    <div className="w-full font-sans px-4 md:px-10 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <motion.div 
        className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Main Title with Gradient */}
        <motion.h2 
          variants={itemVariants}
          className="font-extrabold text-4xl md:text-6xl mb-8 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent max-w-4xl"
        >
          My Journey
        </motion.h2>

        {/* Stats Row */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-6 mb-12"
        >
          <motion.div 
            variants={statsVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-6 shadow-lg"
          >
            <div className="text-4xl font-bold text-white">6+</div>
            <div className="text-purple-100 text-sm mt-1">Years Experience</div>
          </motion.div>
          
          <motion.div 
            variants={statsVariants}
            whileHover={{ scale: 1.05, rotate: -1 }}
            className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 shadow-lg"
          >
            <div className="text-4xl font-bold text-white">4</div>
            <div className="text-blue-100 text-sm mt-1">Industry Sectors</div>
          </motion.div>
          
          <motion.div 
            variants={statsVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl p-6 shadow-lg"
          >
            <div className="text-4xl font-bold text-white">♟️</div>
            <div className="text-cyan-100 text-sm mt-1">Chess Player</div>
          </motion.div>
        </motion.div>

        {/* First Paragraph with Rotating Words */}
        <motion.div variants={itemVariants} className="mb-6">
          <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg max-w-3xl leading-relaxed">
            I've been developing mobile applications for the past{" "}
            <span className="font-bold text-purple-600 dark:text-purple-400">6 years</span>, 
            and it's been an incredible journey of growth and discovery. My career has taken me through diverse sectors—from{" "}
            <span className="inline-block min-w-[200px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                >
                  {domains[currentWord]}
                </motion.span>
              </AnimatePresence>
            </span>
            . Each domain has taught me something unique about solving real-world problems through mobile technology.
          </p>
        </motion.div>

        {/* Chess Connection Section with Icon Animation */}
        <motion.div 
          variants={itemVariants}
          className="relative"
        >
          <div className="flex items-start gap-4 max-w-3xl">
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
              className="text-4xl mt-1 flex-shrink-0"
            >
              ♟️
            </motion.div>
            
            <p className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
              Beyond coding, I'm also a chess player. Chess has taught me{" "}
              {skills.map((skill, index) => (
                <React.Fragment key={skill}>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 + index * 0.3 }}
                    className="font-semibold text-blue-600 dark:text-blue-400"
                  >
                    {skill}
                  </motion.span>
                  {index < skills.length - 1 && ", "}
                </React.Fragment>
              ))}
              —skills that translate remarkably well into software development. Whether I'm debugging a complex issue or architecting a new feature, I often find myself applying the same analytical mindset I use over the chessboard.
            </p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-20 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl pointer-events-none"
        />
      </motion.div>
    </div>
  );
};

export default ExperienceIntro;