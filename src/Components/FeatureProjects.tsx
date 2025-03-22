import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../data/ProjectData';
import ProjectImageDialog from './ProjectImageDialog';

const projects: Project[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    title: "Luxury Villa Design",
    category: "Architecture",
    location: "Beverly Hills, CA",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      "https://images.unsplash.com/photo-1444084316824-dc26d6657664?w=1200&q=80",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
    ],
    description: "Nothing",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    title: "Modern Office Complex",
    category: "Interior",
    location: "Manhattan, NY",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      "https://images.unsplash.com/photo-1444084316824-dc26d6657664?w=1200&q=80",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
    ],
    description: "Nothing",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80",
    title: "Boutique Hotel",
    category: "Urban Design",
    location: "Miami Beach, FL",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
      "https://images.unsplash.com/photo-1444084316824-dc26d6657664?w=1200&q=80",
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
    ],
    description: "Nothing",
  }
];

export function FeaturedProjects() {

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8 sm:mb-12">
          <div className="h-1 w-8 sm:w-12 bg-orange-500 mr-3 sm:mr-4"></div>
          <span className="text-orange-500 uppercase tracking-wider font-medium text-sm sm:text-base">Our Work</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 sm:mb-16">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project: Project, index: number) => (
            <div
              key={index}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 sm:h-96 object-cover transform md:group-hover:scale-110 transition duration-700"
                />
                {/* Mobile: Always visible overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-500"></div>
                {/* Mobile: Always visible content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transform translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition duration-500">
                  <span className="text-orange-500 block mb-2 text-sm sm:text-base">{project.category}</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 sm:mt-12">
          <button className="bg-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-none inline-flex items-center hover:bg-orange-600 transition duration-300 text-sm sm:text-base">
            <Link to={'/projects'}>View All Projects</Link>
            <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
        {/* Image Dialog */}
        {selectedProject && (
          <ProjectImageDialog
            isOpen={isDialogOpen}
            onClose={closeDialog}
            images={selectedProject.images}
            title={selectedProject.title}
          />
        )}
      </div>
    </section>
  );
}