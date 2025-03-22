import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center mb-12">
              <div className="h-1 w-12 bg-orange-500 mr-4"></div>
              <span className="text-orange-500 uppercase tracking-wider font-medium">Contact Us</span>
            </div>
            <h2 className="text-4xl font-bold mb-8">Let's Discuss Your Project</h2>
            <p className="text-gray-400 mb-12 max-w-lg">
              Whether you're looking to build your dream home, renovate your office, or need
              expert architectural consultation, we're here to help bring your vision to life.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-orange-500 mr-4" />
                <span>+91 9996622911</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-orange-500 mr-4" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Architect.studio65%40gmail.com" target="_blank" className="text-blue-500 hover:underline">Architect.studio65@gmail.com</a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-orange-500 mr-4" />
                <span>Plot No. 2, In front of IOCL, Main Bawa Tarana Road, Near Gandhi Chowk
                  <br />
                  Khanna Colony Sonipat - 131101
                </span>
              </div>
            </div>
            <div className="flex space-x-4 mt-12">
              <Facebook className="h-6 w-6 cursor-pointer hover:text-orange-500" />
              <Twitter className="h-6 w-6 cursor-pointer hover:text-orange-500" />
              <Instagram className="h-6 w-6 cursor-pointer hover:text-orange-500" />
              <Linkedin className="h-6 w-6 cursor-pointer hover:text-orange-500" />
            </div>
          </div>
          <form className="space-y-6 bg-white p-8">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-100 text-black border border-gray-200 focus:outline-none focus:border-orange-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-100 border text-black border-gray-200 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-4 py-3 bg-gray-100 border text-black border-gray-200 focus:outline-none focus:border-orange-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={6}
                className="w-full px-4 py-3 bg-gray-100 border text-black border-gray-200 focus:outline-none focus:border-orange-500"
              ></textarea>
            </div>
            <button className="w-full bg-orange-500 text-white px-8 py-4 flex items-center justify-center hover:bg-orange-600 transition duration-300">
              Send Message
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}