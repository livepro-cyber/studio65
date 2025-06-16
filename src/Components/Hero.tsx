import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const heroImages = [
  {
    id: "image-1",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000",
    alt: "Modern Architecture Villa",
    title: "LUXURY INTERIORS",
    subtitle: "PRIVATE RESIDENCES",
    tag: "Architecture & Design",
  },
  {
    id: "image-2",
    src: "https://images.unsplash.com/photo-1623298317883-6b70254edf31?w=2000&auto=format&fit=crop&q=80",
    alt: "Interior Design Detail",
    title: "BRIAN'S VILLA",
    subtitle: "CUSTOM DESIGNS",
    tag: "Interior & Lifestyle",
  },
  {
    id: "image-3",
    src: "https://plus.unsplash.com/premium_photo-1661962952618-031d218dd040?q=80&w=2000&auto=format&fit=crop",
    alt: "Modern Technology Integration",
    title: "SMART LIVING",
    subtitle: "MODERN TECHNOLOGY",
    tag: "Technology & Innovation",
  },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const fragments = 8; // Number of fragments for the transition

  // Preload images for smoother transitions
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = heroImages.map((img) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.onload = resolve;
          image.onerror = reject;
          image.src = img.src;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
        setImagesLoaded(true);
      }
    };

    loadImages();
  }, []);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  const goToNextSlide = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setDirection(1);
    setPreviousIndex(activeIndex);
    setActiveIndex((prevIndex) => (prevIndex + 1) % heroImages.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1800);
  }, [activeIndex, isAnimating]);

  const goToPrevSlide = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    setDirection(-1);
    setPreviousIndex(activeIndex);
    setActiveIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1800);
  }, [activeIndex, isAnimating]);

  const goToSlide = (index: number) => {
    if (isAnimating || index === activeIndex) return;

    setIsAnimating(true);
    setDirection(index > activeIndex ? 1 : -1);
    setPreviousIndex(activeIndex);
    setActiveIndex(index);

    setTimeout(() => {
      setIsAnimating(false);
    }, 1800);
  };

  useEffect(() => {
    resetTimeout();

    if (!paused && imagesLoaded) {
      timeoutRef.current = window.setTimeout(() => {
        goToNextSlide();
      }, 5000);
    }

    return () => {
      resetTimeout();
    };
  }, [activeIndex, paused, goToNextSlide, imagesLoaded]);

  const renderSlideContent = (index: number, isActive: boolean = false) => (
    <motion.div 
      className="relative container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center"
      initial={!isActive ? { opacity: 0, y: 30 } : false}
      animate={!isActive ? { opacity: 1, y: 0 } : false}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <div className="max-w-6xl w-full h-full flex flex-col justify-center sm:justify-between p-4 sm:p-6 pt-16 sm:pt-20 pb-20 sm:pb-24">
        <motion.div
          initial={!isActive ? { opacity: 0, x: direction * 50 } : false}
          animate={!isActive ? { opacity: 1, x: 0 } : false}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <div className="flex items-center">
            <motion.div
              className="h-[2px] bg-orange-500 mr-2 sm:mr-4"
              initial={{ width: 20 }}
              animate={isActive ? { 
                width: [20, 32, 20],
                opacity: [0.7, 1, 0.7]
              } : { width: 20 }}
              transition={{
                duration: 2.5,
                repeat: isActive ? Number.POSITIVE_INFINITY : 0,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
            <span className="text-orange-500 uppercase tracking-wider font-medium text-xs sm:text-sm md:text-base">
              {heroImages[index].tag}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={!isActive ? { opacity: 0, y: 20 } : false}
          animate={!isActive ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex-1 flex flex-col justify-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-tight tracking-tight break-words">
            <motion.span
              className="inline-block"
              animate={isActive ? {
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.3)",
                  "0 0 30px rgba(255,255,255,0.6)",
                  "0 0 20px rgba(255,255,255,0.3)",
                ],
              } : {}}
              transition={{
                duration: 3,
                repeat: isActive ? Number.POSITIVE_INFINITY : 0,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              {heroImages[index].title}
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              animate={isActive ? {
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.3)",
                  "0 0 30px rgba(255,255,255,0.6)",
                  "0 0 20px rgba(255,255,255,0.3)",
                ],
              } : {}}
              transition={{
                duration: 3,
                delay: 0.2,
                repeat: isActive ? Number.POSITIVE_INFINITY : 0,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              {heroImages[index].subtitle}
            </motion.span>
          </h1>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderSlideControls = () => (
    <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-0 right-0 z-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Pagination Dots */}
          <div className="flex space-x-2 sm:space-x-3 order-2 sm:order-1">
            {heroImages.map((item, index) => (
              <motion.button
                key={`pagination-${item.id}`}
                onClick={() => goToSlide(index)}
                className={`h-[2px] rounded-full bg-white backdrop-blur-sm ${
                  index === activeIndex ? "bg-opacity-100" : "bg-opacity-40"
                }`}
                initial={false}
                animate={{
                  width: index === activeIndex ? 28 : 14,
                  backgroundColor: index === activeIndex 
                    ? "rgba(255, 255, 255, 1)" 
                    : "rgba(255, 255, 255, 0.4)",
                }}
                transition={{
                  width: { type: "spring", stiffness: 400, damping: 30 },
                  backgroundColor: { duration: 0.3 },
                }}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ 
                  scale: 1.2, 
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-2 sm:space-x-3 order-1 sm:order-2">
            <motion.button
              onClick={goToPrevSlide}
              disabled={isAnimating}
              className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border border-white/40 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-200 ${
                isAnimating ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Previous slide"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                borderColor: "rgba(255, 255, 255, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </motion.button>
            <motion.button
              onClick={goToNextSlide}
              disabled={isAnimating}
              className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center border border-white/40 text-white backdrop-blur-sm hover:bg-white/20 transition-all duration-200 ${
                isAnimating ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Next slide"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(255, 255, 255, 0.25)",
                borderColor: "rgba(255, 255, 255, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );

  if (!imagesLoaded) {
    return (
      <section className="relative h-[100svh] overflow-hidden bg-gray-900 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-white border-t-transparent rounded-full"
        />
      </section>
    );
  }

  return (
    <section
      className="relative h-[100svh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ 
        perspective: "1200px",
        transformStyle: "preserve-3d"
      }}
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          {isAnimating && (
            <>
              {/* Exiting fragments */}
              {Array.from({ length: fragments }).map((_, i) => {
                const rotateY = direction * (i - fragments / 2) * 8;
                const rotateX = (i % 2 === 0 ? 1 : -1) * Math.random() * 15;
                const delay = i * 0.1;

                return (
                  <motion.div
                    key={`exit-fragment-${previousIndex}-${i}`}
                    className="absolute inset-0"
                    style={{
                      clipPath: `polygon(${(i * 100) / fragments}% 0, ${
                        ((i + 1) * 100) / fragments
                      }% 0, ${((i + 1) * 100) / fragments}% 100%, ${(i * 100) / fragments}% 100%)`,
                      transformStyle: "preserve-3d",
                      transformOrigin: "center center",
                    }}
                    initial={{ 
                      opacity: 1, 
                      scale: 1, 
                      rotateY: 0, 
                      rotateX: 0, 
                      z: 0 
                    }}
                    animate={{
                      opacity: 0,
                      scale: 1.1 + (i / fragments) * 0.3,
                      rotateY: rotateY,
                      rotateX: rotateX,
                      z: -100 - i * 30,
                    }}
                    transition={{
                      duration: 1.4,
                      delay: delay,
                      ease: [0.645, 0.045, 0.355, 1.0],
                    }}
                  >
                    <img
                      src={heroImages[previousIndex].src}
                      alt={heroImages[previousIndex].alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
                    {i === Math.floor(fragments / 2) && renderSlideContent(previousIndex)}
                  </motion.div>
                );
              })}

              {/* Entering fragments */}
              {Array.from({ length: fragments }).map((_, i) => {
                const rotateY = direction * (fragments / 2 - i) * 8;
                const rotateX = (i % 2 === 0 ? -1 : 1) * Math.random() * 15;
                const delay = i * 0.1;

                return (
                  <motion.div
                    key={`enter-fragment-${activeIndex}-${i}`}
                    className="absolute inset-0"
                    style={{
                      clipPath: `polygon(${(i * 100) / fragments}% 0, ${
                        ((i + 1) * 100) / fragments
                      }% 0, ${((i + 1) * 100) / fragments}% 100%, ${(i * 100) / fragments}% 100%)`,
                      transformStyle: "preserve-3d",
                      transformOrigin: "center center",
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0.9 - (i / fragments) * 0.1,
                      rotateY: rotateY,
                      rotateX: rotateX,
                      z: 100 + i * 30,
                      x: direction * 100,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotateY: 0,
                      rotateX: 0,
                      z: 0,
                      x: 0,
                    }}
                    transition={{
                      duration: 1.4,
                      delay: delay,
                      ease: [0.215, 0.61, 0.355, 1.0],
                    }}
                  >
                    <img
                      src={heroImages[activeIndex].src}
                      alt={heroImages[activeIndex].alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
                    {i === Math.floor(fragments / 2) && renderSlideContent(activeIndex)}
                  </motion.div>
                );
              })}
            </>
          )}

          {!isAnimating && (
            <motion.div
              key={`static-slide-${activeIndex}`}
              className="absolute inset-0"
              initial={false}
            >
              {/* Background Image with subtle animation */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                <img
                  src={heroImages[activeIndex].src}
                  alt={heroImages[activeIndex].alt}
                  className="w-full h-full object-cover"
                  style={{ willChange: "transform" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
              </motion.div>

              {/* Content */}
              {renderSlideContent(activeIndex, true)}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {renderSlideControls()}
    </section>
  );
}

export default Hero;