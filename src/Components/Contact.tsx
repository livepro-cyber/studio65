import { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyeg7MRUFfzMzuPLEvVMF8tg5rlHCTknJdmNeTn74i41tYiRQDMuKl7LIcj1UXiUXuF/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 text-black border border-gray-200 focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border text-black border-gray-200 focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border text-black border-gray-200 focus:outline-none focus:border-orange-500"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border text-black border-gray-200 focus:outline-none focus:border-orange-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 text-white px-8 py-4 flex items-center justify-center hover:bg-orange-600 transition duration-300 disabled:bg-orange-400"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <ChevronRight className="ml-2 h-5 w-5" />}
            </button>
            
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-100 text-green-700 rounded">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="p-4 bg-red-100 text-red-700 rounded">
                Something went wrong. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}