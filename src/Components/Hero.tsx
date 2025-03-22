import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const heroImages = [
  {
    id: "image-1",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    alt: "Modern Architecture Villa",
    title: "LUXURY INTERIORS",
    subtitle: "PRIVATE RESIDENCES",
    tag: "Architecture & Design",
  },
  {
    id: "image-2",
    src: "https://images.unsplash.com/photo-1623298317883-6b70254edf31?w=600&auto=format&fit=crop&q=80",
    alt: "Interior Design Detail",
    title: "BRIAN'S VILLA",
    subtitle: "CUSTOM DESIGNS",
    tag: "Interior & Lifestyle",
  },
  {
    id: "image-3",
    src: "https://plus.unsplash.com/premium_photo-1661962952618-031d218dd040?q=80&w=2096&auto=format&fit=crop",
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
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const timeoutRef = useRef<number | null>(null);
  const frames = 7; // Number of frame segments for the effect

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

    if (!paused) {
      timeoutRef.current = window.setTimeout(() => {
        goToNextSlide();
      }, 6000);
    }

    return () => {
      resetTimeout();
    };
  }, [activeIndex, paused, goToNextSlide]);

  const renderSlideControls = () => (
    <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-0 right-0 z-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          {/* Pagination Dots */}
          <div className="flex space-x-2 sm:space-x-3 order-2 sm:order-1">
            {heroImages.map((item, index) => (
              <motion.button
                key={`pagination-${item.id}`}
                onClick={() => goToSlide(index)}
                className={`h-[2px] rounded-full bg-white ${
                  index === activeIndex ? "bg-opacity-100" : "bg-opacity-50"
                }`}
                initial={false}
                animate={{
                  width: index === activeIndex ? 24 : 12,
                  scale: index === activeIndex ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  width: { type: "spring", stiffness: 300, damping: 25 },
                  scale: {
                    duration: 0.5,
                    repeat: index === activeIndex ? Number.POSITIVE_INFINITY : 0,
                    repeatDelay: 2,
                  },
                }}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-2 sm:space-x-4 order-1 sm:order-2">
            <motion.button
              onClick={goToPrevSlide}
              disabled={isAnimating}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-white/30 text-white hover:bg-white/20 ${
                isAnimating ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Previous slide"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
            <motion.button
              onClick={goToNextSlide}
              disabled={isAnimating}
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border border-white/30 text-white hover:bg-white/20 ${
                isAnimating ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Next slide"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSlideContent = (index: number, isStatic: boolean = false) => (
    <div className="relative container mx-auto px-4 h-full flex items-center">
      <div className="max-w-4xl h-[550px] flex flex-col justify-between p-4 sm:p-6 mt-[15vh] sm:mt-[20vh] md:mt-[25vh]">
        <motion.div
          initial={!isStatic ? { opacity: 0, x: direction * 50 } : false}
          animate={!isStatic ? { opacity: 1, x: 0 } : false}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex items-center">
            <motion.div
              className="h-[2px] bg-orange-500 mr-2 sm:mr-4"
              initial={false}
              animate={{ width: [24, 32, 24] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            ></motion.div>
            <span className="text-orange-500 uppercase tracking-wider font-medium text-sm sm:text-base md:text-lg">
              {heroImages[index].tag}
            </span>
          </div>
        </motion.div>

        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
            <motion.span
              className="inline-block"
              initial={{ textShadow: "0 0 8px rgba(255,255,255,0.3)" }}
              animate={{
                opacity: [0.9, 1, 0.9],
                textShadow: [
                  "0 0 8px rgba(255,255,255,0.3)",
                  "0 0 16px rgba(255,255,255,0.5)",
                  "0 0 8px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 0,
              }}
            >
              {heroImages[index].title}
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ textShadow: "0 0 8px rgba(255,255,255,0.3)" }}
              animate={{
                opacity: [0.9, 1, 0.9],
                textShadow: [
                  "0 0 8px rgba(255,255,255,0.3)",
                  "0 0 16px rgba(255,255,255,0.5)",
                  "0 0 8px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{
                duration: 4,
                delay: 0.1,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              {heroImages[index].subtitle}
            </motion.span>
          </h1>
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="relative h-[100svh] overflow-hidden perspective-[1200px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ perspective: "1200px" }}
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          {isAnimating &&
            Array.from({ length: frames }).map((_, i) => {
              const rotateY = direction * (i - frames / 2) * 5;
              const rotateX = (i % 2 === 0 ? 1 : -1) * Math.random() * 10;

              return (
                <motion.div
                  key={`exit-frame-${previousIndex}-${i}`}
                  className="absolute inset-0 origin-center"
                  style={{
                    clipPath: `polygon(${(i * 100) / frames}% 0, ${
                      ((i + 1) * 100) / frames
                    }% 0, ${((i + 1) * 100) / frames}% 100%, ${(i * 100) / frames}% 100%)`,
                    backgroundImage: `url(${heroImages[previousIndex].src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRight: "2px solid rgba(255, 255, 255, 0.3)",
                    transformStyle: "preserve-3d",
                  }}
                  initial={{ opacity: 1, scale: 1, rotateY: 0, rotateX: 0, z: 0 }}
                  animate={{
                    opacity: 0,
                    scale: 1.1 + (i / frames) * 0.3,
                    rotateY: rotateY,
                    rotateX: rotateX,
                    z: -100 - i * 20,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: i * 0.08,
                    ease: [0.645, 0.045, 0.355, 1.0],
                  }}
                >
                  {renderSlideContent(previousIndex)}
                </motion.div>
              );
            })}

          {isAnimating &&
            Array.from({ length: frames }).map((_, i) => {
              const rotateY = direction * (frames / 2 - i) * 5;
              const rotateX = (i % 2 === 0 ? -1 : 1) * Math.random() * 10;

              return (
                <motion.div
                  key={`enter-frame-${activeIndex}-${i}`}
                  className="absolute inset-0 origin-center"
                  style={{
                    clipPath: `polygon(${(i * 100) / frames}% 0, ${
                      ((i + 1) * 100) / frames
                    }% 0, ${((i + 1) * 100) / frames}% 100%, ${(i * 100) / frames}% 100%)`,
                    backgroundImage: `url(${heroImages[activeIndex].src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRight: "2px solid rgba(255, 255, 255, 0.3)",
                    transformStyle: "preserve-3d",
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.9 - (i / frames) * 0.1,
                    rotateY: rotateY,
                    rotateX: rotateX,
                    z: 100 + i * 20,
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
                    duration: 1.2,
                    delay: i * 0.08,
                    ease: [0.215, 0.61, 0.355, 1.0],
                  }}
                >
                  {renderSlideContent(activeIndex)}
                </motion.div>
              );
            })}

          {!isAnimating && (
            <motion.div
              key={`static-slide-${activeIndex}`}
              className="absolute inset-0"
              initial={false}
              animate={{ scale: 1 }}
              transition={{
                scale: {
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "linear",
                  from: 1,
                  to: 1.05,
                },
              }}
            >
              <img
                src={heroImages[activeIndex].src || "/placeholder.svg"}
                alt={heroImages[activeIndex].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
            </motion.div>
          )}

          {!isAnimating && (
            <div key={`static-content-${activeIndex}`} className="absolute inset-0">
              {renderSlideContent(activeIndex, true)}
            </div>
          )}
        </AnimatePresence>
      </div>

      {renderSlideControls()}
    </section>
  );
}

export default Hero;
