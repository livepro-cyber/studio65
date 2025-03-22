import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 2,
    name: "Michael Chen",
    role: "Principal Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80"
  },
  {
    id: 1,
    name: "Sarah Johnson",
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
  { number: "25+", label: "Years of Experience" },
  { number: "200+", label: "Projects Completed" },
  // { number: "50+", label: "Design Awards" },
  { number: "100%", label: "Client Satisfaction" }
];

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
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-wider mb-4">
              OUR STUDIO
            </h1>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto px-4">
              Where creativity meets precision in architectural design
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Creating Spaces That Inspire
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 1998, our studio has been at the forefront of architectural innovation,
              creating spaces that seamlessly blend functionality with aesthetic excellence.
              We believe in sustainable design practices that respect both the environment and
              local cultural contexts.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our multidisciplinary team brings together expertise in architecture, interior design,
              and urban planning to deliver comprehensive solutions that exceed client expectations.
            </p>
            <div className="inline-block">
              <span className="text-orange-500 border-b-2 border-orange-500 pb-1 font-medium">
                Learn More About Our Process →
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
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
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-around gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <span className="block text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </span>
                <span className="block text-gray-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our diverse team of experts brings together years of experience and a
            passion for innovative design solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
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
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To create architectural masterpieces that stand the test of time while
                pushing the boundaries of sustainable design.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                Delivering exceptional architectural solutions that transform spaces
                and enhance the lives of those who inhabit them.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
              <p className="text-gray-300">
                Innovation, sustainability, and client satisfaction are at the core
                of everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}