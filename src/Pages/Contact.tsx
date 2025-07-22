import { Header } from '@/Components/Header';
import { Footer } from '@/Components/Footer';
import { motion } from 'framer-motion';
import { ContactForm } from '@/Components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  let number = 9996622911;
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="relative h-[60vh] bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center animate-image-zoom"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            className="text-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.23, 1, 0.32, 1]
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-light text-white tracking-wider mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-gray-200 text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              Get in touch with our team for inquiries, collaborations, or to discuss your next project.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <main className="flex-grow">
        {/* Contact Information */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              <div
                className="flex flex-col items-center text-center hover:cursor-pointer p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                onClick={() => { window.location.href = `tel:${number}` }}
              >
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">We're available Monday to Saturday 10am to 8pm</p>
                <a href="tel:+11234567890" className="text-orange-500 hover:text-orange-600 font-medium">
                  +91 9996622911
                </a>
              </div>

              <div
                className="flex flex-col items-center text-center p-8 border border-gray-100 hover:cursor-pointer rounded-lg shadow-sm hover:shadow-md transition-shadow"
                onClick={() => { window.open("https://mail.google.com/mail/?view=cm&fs=1&to=Architect.studio65%40gmail.com", "_blank") }}
              >
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Our friendly team is here to help</p>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Architect.studio65%40gmail.com" target="_blank" className="text-orange-500 hover:cursor-pointer hover:text-orange-600 font-medium">
                  Architect.studio65@gmail.com
                </a>
              </div>

              <div
                className="flex flex-col items-center text-center p-8 border border-gray-100 rounded-lg hover:cursor-pointer shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1"
                onClick={() => { window.open("https://maps.app.goo.gl/mN5tr68BSBjRQNZY9", "_blank") }}
              >
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Office</h3>
                <p className="text-gray-600 mb-4">Come visit our studio</p>
                <address className="not-italic text-orange-500 hover:text-orange-600 font-medium">
                  Plot No. 2, In front of IOCL, Main Bawa Tarana Road<br />
                  Near Gandhi Chowk, Khanna Colony Sonipat - 131101
                </address>
              </div>
            </div>
          </div>
        </section>

        {/* Connect with Firm Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Our Firm</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Interested in working with us? Fill out the form below with your details and we'll get back to you as soon as possible.
                </p>
              </div>

              <ContactForm />
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[400px] bg-gray-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.6900250294575!2d77.02421907530328!3d28.99655507546789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390db1cac5b77b91%3A0xa5612f6a2fd0af6a!2sSTUDIO%2065%20Architects%20and%20Planners!5e0!3m2!1sen!2sin!4v1742532253642!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
            className="absolute inset-0"
          ></iframe>
        </section>
      </main>

      <Footer />
    </div>
  );
}