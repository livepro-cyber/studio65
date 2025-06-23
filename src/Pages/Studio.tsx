import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import { motion } from "framer-motion";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 2,
    name: "Ajay Panghal",
    role: "Principal Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80"
  },
  {
    id: 1,
    name: "Shourya Panghal",
    role: "Senior Interior Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80"
  },
  {
    id: 3,
    name: "Emma Williams",
    role: "Urban Planning Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80"
  },
  {
    id: 4,
    name: "David Miller",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80"
  }
];

const stats = [
  { number: "10+", label: "Years of Experience" },
  { number: "110+", label: "Projects Completed" },
  { number: "100%", label: "Client Satisfaction" }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function Studio() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-light text-white tracking-wider mb-4"
              variants={fadeIn}
            >
              OUR STUDIO
            </motion.h1>
            <motion.p
              className="text-gray-200 text-lg max-w-2xl mx-auto px-4"
              variants={fadeIn}
            >
              Where creativity meets precision in architectural design
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <motion.div
        className="container mx-auto px-4 py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-light mb-6"
              variants={fadeIn}
            >
              Creating Spaces That Inspire
            </motion.h2>
            <motion.p
              className="text-gray-600 mb-6 leading-relaxed"
              variants={fadeIn}
            >
              We are the architects of clarity — where bold ideas meet disciplined execution. Since 2015, we’ve built more than just spaces; we’ve built trust, brick by brick.
            </motion.p>
            <motion.p
              className="text-gray-600 mb-8 leading-relaxed"
              variants={fadeIn}
            >
              With a team fluent in architecture, interior design, and urban planning, we deliver thoughtful solutions tailored to your world. Every project, every detail — designed to stand the test of time and expectation.
            </motion.p>
          </div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={fadeIn}
          >
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
              alt="Studio"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop&q=60"
              alt="Work"
              className="rounded-lg shadow-lg mt-8"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="bg-gray-100 py-16">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="flex justify-around gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeIn}
              >
                <span className="block text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </span>
                <span className="block text-gray-600">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Team Section */}
      <motion.div
        className="container mx-auto px-4 py-16 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerChildren}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-light mb-6"
            variants={fadeIn}
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            variants={fadeIn}
          >
            Our diverse team of experts brings together years of experience and a
            passion for innovative design solutions.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
              variants={fadeIn}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[400px] object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-orange-500">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Values Section */}
      <div className="bg-gray-900 text-white py-16 md:py-24">
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {['Vision', 'Mission', 'Values'].map((title, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
              >
                <h3 className="text-2xl font-semibold mb-4">Our {title}</h3>
                <p className="text-gray-300">
                  {title === 'Vision' &&
                    "To create architectural masterpieces that stand the test of time while pushing the boundaries of sustainable design."}
                  {title === 'Mission' &&
                    "Delivering exceptional architectural solutions that transform spaces and enhance the lives of those who inhabit them."}
                  {title === 'Values' &&
                    "Innovation, sustainability, and client satisfaction are at the core of everything we do."}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}