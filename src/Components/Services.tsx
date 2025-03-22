import { ChevronRight } from 'lucide-react';

const services = [
  {
    id: "service-1",
    title: "Architectural Design",
    description: "Creating innovative and sustainable architectural solutions that transform spaces and enhance lives.",
    features: ["Custom Design", "3D Visualization", "Sustainable Solutions"],
  },
  {
    id: "service-2",
    title: "Interior Design",
    description: "Crafting beautiful and functional interior spaces that reflect your unique style and needs.",
    features: ["Space Planning", "Material Selection", "Custom Furniture"],
  },
  {
    id: "service-3",
    title: "Project Management",
    description: "Comprehensive project management ensuring seamless execution from concept to completion.",
    features: ["Timeline Management", "Budget Control", "Quality Assurance"],
  },
];

export function Services() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <div className="h-1 w-12 bg-orange-500 mr-4"></div>
          <span className="text-orange-500 uppercase tracking-wider font-medium">What We Do</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.id} className="group p-8 bg-white hover:bg-orange-500 transition duration-300">
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white/90 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={`${service.id}-feature-${idx}`} className="flex items-center text-gray-700 group-hover:text-white">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}