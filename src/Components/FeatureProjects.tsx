import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../data/ProjectData';
import ProjectImageDialog from './ProjectImageDialog';

const projects: Project[] = [
  {
    id: 1,
    title: "Residency in Omaxe City",
    category: "Residential",
    description: "Premium and Aesthetic interior Designs",
    image: "https://img.squareyards.com/secondaryPortal/IN_638778351673323687-17032507060767.jpg",
    images: [
      "/ProjectImages/OmaxeCity/LivingRoom.webp",
      "/ProjectImages/OmaxeCity/LivingRoom2.webp",
      "/ProjectImages/OmaxeCity/Bedroom.webp",
      "/ProjectImages/OmaxeCity/Bedroom3.webp",
      "/ProjectImages/OmaxeCity/Kitchen.webp",
      "/ProjectImages/OmaxeCity/Kitchen2.webp",
    ],
  },
  {
    id: 2,
    title: "Residency at Batra Colony",
    category: "Residential",
    description: "A sustainable residential development featuring contemporary design and eco-friendly materials",
    image: "https://housing-images.n7net.in/01c16c28/4ed699b1e6f6d5ea574e270985c3f407/v0/large/4_bhk_independent_house-for-sale-suncity_township_i-Rohtak-others.jpg",
    images: [
      "/ProjectImages/BatraColony/Bedroom.webp",
      "/ProjectImages/BatraColony/Bedroom2.webp",
      "/ProjectImages/BatraColony/Bedroom3.webp",
      "/ProjectImages/BatraColony/Bedroom4.webp",
      "/ProjectImages/BatraColony/LivingRoom.webp",
      "/ProjectImages/BatraColony/LivingRoom2.webp",
      "/ProjectImages/BatraColony/DinningRoom.webp",
      "/ProjectImages/BatraColony/Kitchen.webp",
      "/ProjectImages/BatraColony/Kitchen2.webp",
      "/ProjectImages/BatraColony/Mandir.webp",
    ],
  },
  {
    id: 3,
    image: "/ProjectImages/Bunglow/OutterView.webp",
    title: "Farmhouse Farmana",
    category: "Residential",
    location: "Manhattan, NY",
    images: [
      "/ProjectImages/Bunglow/Front.webp",
      "/ProjectImages/Bunglow/Back.webp",
      "/ProjectImages/Bunglow/SideView.jpg",
      "/ProjectImages/Bunglow/LivingRoom.webp",
      "/ProjectImages/Bunglow/Bedroom.webp",
      "/ProjectImages/Bunglow/Bedroom3.webp",
      "/ProjectImages/Bunglow/Bedroom2.webp",
      "/ProjectImages/Bunglow/Entry.webp",
      "/ProjectImages/Bunglow/Aesthetics.webp",
    ],
    description: "A modern office complex designed for flexibility and collaboration",
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