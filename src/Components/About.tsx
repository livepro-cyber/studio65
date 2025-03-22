import { ChevronRightIcon } from 'lucide-react';

export function About() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-6 sm:mb-8">
          <div className="h-0.5 sm:h-1 w-8 sm:w-12 bg-orange-500 mr-3 sm:mr-4"></div>
          <span className="text-orange-500 text-sm sm:text-base uppercase tracking-wider font-medium">
            Studio 65
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image Container */}
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
              alt="Modern Architecture"
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
            />
            {/* Years Box */}
            <div className="absolute 
              bottom-0 right-0 sm:-right-8 lg:-right-12 
              bg-orange-500 
              p-4 sm:p-6 lg:p-8 
              w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 
              flex flex-col justify-center items-center 
              transform translate-y-1/4 sm:translate-y-0"
            >
              <div className="text-4xl sm:text-6xl lg:text-[80px] font-bold text-white leading-none">
                10
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white uppercase">
                Years
              </div>
              <div className="text-sm sm:text-base lg:text-lg text-white uppercase">
                Working
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
              MAKE IS A DIFFERENT KIND OF ARCHITECTURE PRACTICE
            </h2>
            <h3 className="text-xl sm:text-2xl text-gray-900 mb-4 sm:mb-6">
              We know that good design means good business
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Founded by Robert Downey Jr in 2004, we're an employee-owned firm pursuing a democratic design process that values everyone's input. Today we have more than 150 people in London, Hong Kong and Sydney providing architecture, interior & urban design services from concept to completion.
            </p>
            <button className="w-full sm:w-auto bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-center sm:justify-start hover:bg-orange-600 transition duration-300 group">
              <span className="text-sm sm:text-base">MORE ABOUT US</span>
              <ChevronRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}