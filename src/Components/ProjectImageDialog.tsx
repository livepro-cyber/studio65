import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogClose } from './ui/dialog';
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "../lib/utils";

interface ProjectImageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}

const ProjectImageDialog = ({ isOpen, onClose, images, title }: ProjectImageDialogProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Reset current image index when dialog opens
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      setIsLoading(true);
    }
  }, [isOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowLeft') {
        navigateImages('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImages('next');
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length, currentImageIndex, onClose]);

  const navigateImages = (dir: 'next' | 'prev') => {
    setIsLoading(true);
    
    if (dir === 'next') {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    } else {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (!isOpen || !images.length) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl w-11/12 p-0 bg-background/80 backdrop-blur-xl border border-border/20 shadow-2xl rounded-xl overflow-hidden">
        <div className="relative h-[80vh] w-full">
          {/* Navigation controls */}
          <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-20 glass-dark">
            <h2 className="text-white font-light text-lg md:text-xl tracking-wide">
              {title} <span className="text-sm opacity-70 ml-2">{currentImageIndex + 1}/{images.length}</span>
            </h2>
            <DialogClose asChild>
              <button className="rounded-full p-2 hover:bg-white/10 transition-colors">
                <X className="h-6 w-6 text-white" />
              </button>
            </DialogClose>
          </div>

          {/* Image container */}
          <div className="relative h-full w-full flex items-center justify-center bg-black/50">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-white/30 border-t-white animate-spin"></div>
              </div>
            )}
            <img
              src={images[currentImageIndex]}
              alt={`${title} - Image ${currentImageIndex + 1}`}
              className={cn(
                "max-w-full max-h-full object-contain transition-opacity duration-300",
                isLoading ? "opacity-0" : "opacity-100"
              )}
              onLoad={handleImageLoad}
            />
          </div>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={() => navigateImages('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 bg-black/30 hover:bg-black/50 transition-colors glass"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8 text-white" />
              </button>
              <button
                onClick={() => navigateImages('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full p-2 bg-black/30 hover:bg-black/50 transition-colors glass"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8 text-white" />
              </button>
            </>
          )}

          {/* Image counter dots */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setIsLoading(true);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === currentImageIndex 
                    ? "bg-white w-4" 
                    : "bg-white/40 hover:bg-white/60"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectImageDialog;